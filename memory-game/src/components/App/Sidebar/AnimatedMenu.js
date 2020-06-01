import React from 'react';
import { MenuWrapper, Menu, MenuItem } from './elements';
import { SettingIcon } from '../../../theme/Icons';

const menuItemvariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const menuVariants = {
  open: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const AnimatedMenu = () => {

    return (
      <MenuWrapper
        animate="open"
        transition={{ duration: 1 }}
      >
        <Menu variants={menuVariants}>
          {Array.from({ length: 1 }, (_, i) => {
              return (
                <MenuItem key={i} variants={menuItemvariants}>
                    <SettingIcon size={25} />
                </MenuItem>
              );
          })}
        </Menu>
      </MenuWrapper>
    );
};

export default AnimatedMenu;