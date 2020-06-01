import React, { useEffect, useState, Fragment } from 'react';
import { useClient, useGame } from '../../../hooks';
import { COLORS, SOCKET } from '../../../helpers/constants';
import { IF } from '../../App/Conditional';
import { CardsWrapper, Card, CardBack, CardFront, SmallNumber } from './elements';
import { ScrollerKit } from '../../App/ui';
import GameHeader from './GameHeader';

const container = {
    hidden: { opacity: 1, scale: 0 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    flipped: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    }
  };  
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      translateX: 0,
      rotateY: 0
    },
    flipped: {
        translateX: '-100%',
        rotateY: 180
    }
  };

  const smallBadge = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1
    },
    flipped: {
        opacity: 0
    }
  };
  

const Cards = () => {
    const { socket } = useClient();
    const { cardNumbers, started, setStarted, selectItem, clearItems, getIndexOfSelectedItem, setTriedNumbers } = useGame();
    const [randomNumbers, setRandomNumbers] = useState([]);

    useEffect(() => {
        socket.emit(SOCKET.CHANNEL.RANDOM_NUMBERS, cardNumbers);
    }, [cardNumbers, socket]);
    
    useEffect(() => {
        socket.on(SOCKET.CHANNEL.RANDOM_NUMBERS, setRandomNumbers);
        
        return () => {
            clearItems();
            setStarted(false);
            setTriedNumbers(0);
            socket.off(SOCKET.CHANNEL.RANDOM_NUMBERS);
        };
    // eslint-disable-next-line
    }, []);
    
    return (
        <Fragment>
            <GameHeader />
            <ScrollerKit>
                <CardsWrapper
                    variants={container}
                    initial="hidden"
                    animate={started ? 'flipped' : 'show'}
                >
                    {randomNumbers.map((hiddenNumber, i) => {
                        const cardBackIndex = getIndexOfSelectedItem(hiddenNumber) + 1;
                        return (
                            <Card
                                key={i}
                                variants={item}
                                whileHover={{ scale: 1.2, zIndex: 9 }}
                                whileTap={{ scale: 0.8, }}
                                onClick={() => selectItem({ hiddenNumber })}
                            >
                                <CardBack style={{ background: COLORS[i] }}>
                                    <IF on={cardBackIndex}>
                                        {cardBackIndex}
                                    </IF>
                                </CardBack>
                                <CardFront>
                                    <IF on={cardBackIndex}>
                                        <SmallNumber variants={smallBadge}>
                                            {cardBackIndex}
                                        </SmallNumber>
                                    </IF>
                                    {hiddenNumber}
                                </CardFront>
                            </Card>
                        );
                    })}
                </CardsWrapper>
            </ScrollerKit>
        </Fragment>
    );
};

export default Cards;


