import React from 'react';
import {
    Wrapper,
    MenuItem
} from './elements';

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

const items = ['Start', 'difficulty', 'History'];

const Menu = ({
    onConfirm = []
}) => {
    return (
        <Wrapper
            variants={container}
            initial="hidden"
            animate="show"
            exit="hidden"
        >
            {items.map((item, i) => {
                return (
                    <MenuItem 
                        key={item}
                        variants={itemV}
                        onClick={onConfirm[i]}
                    >
                        {item}
                    </MenuItem>
                );
            })}
        </Wrapper>
    );
};

export default Menu;