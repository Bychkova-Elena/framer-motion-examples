import { motion } from 'framer-motion';
import {useState} from "react";

export const Example1 = () => {

    const [isAnimating, setIsAnimating] = useState(false);

    return (
        <div className='container'>
            <motion.div className='figure figure_border_radius'
                        initial={{
                            opacity: 0.2
                        }}
                        animate={{
                            x: isAnimating ? 1000 : 0,
                            opacity: isAnimating ? 1 : 0.5,
                            rotate: isAnimating ? 360 : 0,
                        }}
                        transition={{
                            type: 'spring',
                            stiffness: 20,
                            damping: 5,
                        }}
                        onClick={() => setIsAnimating(!isAnimating)}
            >
                Hello
            </motion.div>
        </div>
    )
}
