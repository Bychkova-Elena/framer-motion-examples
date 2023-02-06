import { motion } from 'framer-motion';

export const Example3 = () => {

    const boxVariant = {
        hidden: {
            x: -1000
        },
        visible: {
            x: 0,
            transition: {
                delay: 1,
                when: 'beforeChildren',
                staggerChildren: 0.5,
                staggerDirection: -1,
            }
        }
    }

    const listVariant = {
        hidden: {
            x: -10,
            opacity: 0
        },
        visible: (el: number) => ({
            x: 0,
            opacity: el * 0.3,
        })
    }

    return (
        <div className='container'>
            <motion.div className='figure'
                        variants={boxVariant}
                        initial='hidden'
                        animate='visible'
            >
                {[1,2,3].map(el => {
                return (
                    <motion.li key={el} className='small_element'
                               custom={el}
                               variants={listVariant}
                    ></motion.li>
                )
                })}
            </motion.div>
        </div>
    )
}
