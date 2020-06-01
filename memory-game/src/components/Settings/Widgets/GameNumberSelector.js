import React, { useState } from "react";
import { MagicMotion } from "framer-motion";
import { IF } from '../../App/Conditional';
import { Title } from '../../App/ui';
import { SelectorWrapper, GridWrapper, Grid, MotionGrid } from './elements';

const container = {
    hidden: { 
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    },
    show: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    }
  }
  
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

const GRIDS = [4, 8, 16, 32];

const GameNumberSelector = ({
    onConfirm
}) => {
    const [index, setIndex] = useState(0);
    return (
        <SelectorWrapper
            variants={container}
            initial="hidden"
            animate="show"
            exit="hidden"
        >
            <MagicMotion>
                <Title 
                    variants={item}
                    f="fancy" 
                    s={40} 
                    bottom="0"
                >
                    Select card numbers:
                </Title>
                <GridWrapper>
                    {GRIDS.map((number, i) => {
                        return (
                            <Grid 
                                key={i}
                                variants={item}
                                onMouseEnter={() => setIndex(i)} 
                                whileTap={{ scale: .9 }}
                                onClick={() => onConfirm(number)}
                        >
                                {number}
                                <IF on={i === index}>
                                    <MotionGrid
                                        magic
                                        magicId="grid-item-highlight"
                                    />
                                </IF>
                            </Grid>
                        );
                    })}
                </GridWrapper>
            </MagicMotion>
        </SelectorWrapper>
    );
};

export default GameNumberSelector;