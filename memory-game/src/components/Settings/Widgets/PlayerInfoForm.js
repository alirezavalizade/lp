import React, { useState, useCallback, useEffect, useMemo, Fragment } from 'react';
import { transform, useAnimation } from 'framer-motion';
import { Title, Input } from '../../App/ui';
import { Form, InputWrapper, MaxLengthBadge, BadgeWrapper } from './elements';

const container = {
    hidden: { 
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    },
    show: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    }
  }
  
  const child = {
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

const maxLength = 12;
const mapRemainingToColor = transform([2, 6], ["#ff008c", "#fff"]);
const mapRemainingToSpringVelocity = transform([0, 5], [50, 0]);

const PlayerInfoForm = ({ onSubmit, initialValue }) => {
    const [value, setValue] = useState(() => initialValue);
    const controls = useAnimation();

    // fns
    const validatedSubmit = useCallback((e) => {
        e.preventDefault();
        if (value.length <= 12) {
            onSubmit(value);
        }
    }, [onSubmit, value]);
    // effects
    const charactersRemaining = useMemo(() => maxLength - value.length, [value.length]);

    useEffect(() => {
        if (charactersRemaining > 6) return;

        controls.start({
            scale: 1,
            transition: {
                type: "spring",
                velocity: mapRemainingToSpringVelocity(charactersRemaining),
                stiffness: 700,
                damping: 80
            }
        });
    }, [controls, value.length, charactersRemaining]);

    return (
        <Fragment>
            <Form 
                onSubmit={validatedSubmit} 
                variants={container}
                initial="hidden"
                animate="show"
                exit="hidden"
            >
                <Title 
                    f="fancy" 
                    s={40} 
                    bottom="0"
                    variants={child}
                >
                    Enter your name:
                </Title>
                <InputWrapper
                    variants={child}
                >
                    <Input 
                        type="text" 
                        placeholder="e.g Ahmed"
                        f="fancy"
                        onChange={e => setValue(e.target.value)} 
                        value={value}
                     />
                    <BadgeWrapper>
                        <MaxLengthBadge
                            animate={controls}
                            style={{ color: mapRemainingToColor(charactersRemaining) }}
                        >
                            {charactersRemaining}
                        </MaxLengthBadge>
                    </BadgeWrapper>
                </InputWrapper>
            </Form>
        </Fragment>
    );
};

export default PlayerInfoForm;