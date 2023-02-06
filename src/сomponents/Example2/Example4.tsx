import { motion } from 'framer-motion';

export const Example4 = () => {

    return (
        <div className='container'>
            <motion.div className='figure figure_border_radius'
            animate={{
                // scale: [1, 1.1, 1.1, 1, 1],
                x: [0, 200,  0,],
                backgroundColor: ['#ff8626', '#f1c32d', '#a2ee77'],
                // borderRadius: ['50%', '50%', '20%', '50%', '50%'],
            }}
             transition={{
                 repeat: Infinity,
                 type: 'tween',
                 ease: 'circOut',
                 duration: 1,
                 // delay: 3
             }}
            >
            </motion.div>
        </div>
    )
}
