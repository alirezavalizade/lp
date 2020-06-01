import React, { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useGame } from '../../../hooks';
import { HeartIcon } from '../../../theme/Icons';
import { PlayerHeartWrapper, HeartItem } from './elements';
import { Space } from '../../App/ui';

const container = {
    hidden: { 
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    },
    show: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    }
};
  
const item = {
    hidden: { 
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    },
    show: { 
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    }
};

const PlayerHearts = () => {
    const { config, triedNumbers } = useGame();
    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            scale: 1.1,
            transition: {
                type: "spring",
                velocity: 100,
                stiffness: 700,
                damping: 80
            }
        });
    }, [controls, triedNumbers]);
    
    const length = config.maxAllowedTryNumbers - triedNumbers;
    return (
        <PlayerHeartWrapper
            variants={container}
            initial="hidden"
            animate="show"
        >
            {Array.from({ length }).map((_, i) => {
                return (
                    <HeartItem
                        key={i}
                        variants={item}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        animate={i === length - 1 ? controls : null}
                    >
                        <HeartIcon size={30} />
                        <Space size={10} />
                    </HeartItem>
                );
            })}
        </PlayerHeartWrapper>
    );
};

export default PlayerHearts;