import React, { useCallback } from 'react';
import { useGame } from '../../../hooks';
import { Wrapper, MenuItem } from './elements';
import { IF } from '../../App/Conditional';

const container = {
    hidden: { 
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    },
    show: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    }
  }
  
  const itemV = {
    hidden: { 
        y: -50,
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

const items = ['< Back to Home', 'Easy', 'Normal', 'Hard'];

const GameConfig = ({
    onConfirm
}) => {
    const { selectedConfig, setDifficultyLevel } = useGame();

    const onSelectMenuItem = useCallback((i, item) => {
        if (i === 0) {
            return onConfirm();
        }
        const loweredCase = item.toLowerCase();
        setDifficultyLevel(loweredCase);
    }, [setDifficultyLevel, onConfirm]);
    
    return ( 
        <Wrapper
            variants={container}
            initial="hidden"
            animate="show"
            exit="hidden"
        >
            {items.map((item, i) => {
                const active = selectedConfig === item.toLowerCase();
                return (
                    <MenuItem 
                        key={item}
                        variants={itemV}
                        onClick={() => onSelectMenuItem(i, item)}
                        active={active}
                    >
                        <IF on={active}>
                            <span role="img">✓</span>
                        </IF>
                        {item}
                    </MenuItem>
                );
            })}
        </Wrapper>
    );
};

export default GameConfig;