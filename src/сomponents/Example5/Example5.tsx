import {motion, useAnimationControls} from 'framer-motion';
import {useState} from "react";

export const Example5 = () => {

    const [isActiveIndex, setIsActiveIndex] = useState(0);
    const control = useAnimationControls();

    const isSelected = (index: number) => {
        return isActiveIndex === index;
    }

    const clickRight = () => {
        setIsActiveIndex(1);
        control.start({
            x: 1000,
            transition: {
                duration: 2
            }
        })
    }

    const clickLeft = () => {
        setIsActiveIndex(2);
        control.start({
            x: 0,
            transition: {
                duration: 2
            }
        })
    }

    const clickCircle = () => {
        setIsActiveIndex(3);
        control.start({
            borderRadius: '50%',
            transition: {
                duration: 0.5
            }
        })
    }

    const clickSquare = () => {
        setIsActiveIndex(4);
        control.start({
            borderRadius: 0,
            transition: {
                duration: 0.5
            }
        })
    }

    const clickStop = () => {
        setIsActiveIndex(5);
        control.stop();
    }

    return (
        <div className='container'>
            <a onClick={clickRight}>
                Move Right
                {isSelected(1) && <ActiveLine />}
            </a>
            <a onClick={clickLeft}>
                Move Left
                {isSelected(2) && <ActiveLine />}
            </a>
            <a onClick={clickCircle}>
                Circle
                {isSelected(3) && <ActiveLine />}
            </a>
            <a onClick={clickSquare}>
                Square
                {isSelected(4) && <ActiveLine />}
            </a>
            <a onClick={clickStop}>
                Stop
                {isSelected(5) && <ActiveLine />}
            </a>
            <motion.div className='figure'
                        animate={control}
            >
            </motion.div>
        </div>
    )
}

const ActiveLine = () => {

    return (
        <motion.div
            layoutId='layoutActive'
            style={{
                width: '100%',
                height: '4px',
                position: 'absolute',
                bottom: '-5px',
                backgroundColor: '#af8e3c',
            }}
        />
    )
}
