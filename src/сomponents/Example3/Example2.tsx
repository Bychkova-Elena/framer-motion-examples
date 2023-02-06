import {motion, useInView} from 'framer-motion';
import {useEffect, useRef} from "react";

export const Example2 = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        console.log("Element is in view: ", isInView)
    }, [isInView])

    return (
        <div className='container'>
            <motion.div className='figure figure_border_radius'
                        ref={ref}
                        drag
                        dragSnapToOrigin
                        dragConstraints={{
                            right: 100,
                            left: -20,
                            top: 50,
                            bottom: 50
                        }}
                        whileHover={{
                            scale: 1.1,
                            // skew: -5,
                        }}
                        whileTap={{
                            scale: 0.9
                        }}
                        onPan={(e, pointInfo) => {console.log(pointInfo)}}
            >
                {/*<p onPointerDownCapture={e => e.stopPropagation()}>Hello</p>*/}
            </motion.div>
        </div>
    )
}
