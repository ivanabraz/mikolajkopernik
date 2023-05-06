import React from "react";
import { motion } from "framer-motion";


const TwoColumns = (TwoColumnsProps) => {

    return (
        <div id={TwoColumnsProps.divId}
        className={`${TwoColumnsProps.bgColor} ${TwoColumnsProps.textColor} w-full h-full grid gap-0 grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2`}>
            <motion.div
                initial={{ scale: 0 }} whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                    type: "spring",
                    damping: 10,
                    stiffness: 70,
                    restDelta: 0.001,
                    delay: 0.2,
                }}
                className={`${TwoColumnsProps.divOrder} w-full h-full flex flex-col justify-center m-auto my-5
                p-10 xs:p-10 sm:p-10 md:p-10 lg:p-20
                text-sm xs:text-sm sm:text-sm md:text-lg lg:text-lg`}>
                    { TwoColumnsProps.titlePl.length !== 0
                        ?   <p className="mb-10 text-sm">
                                {TwoColumnsProps.titlePl} / <span className="font-light italic">{TwoColumnsProps.titleEs}</span>
                            </p>
                        :   <></>
                    }
                    <p className={`first-letter:text-9xl first-letter:font-goudy first-letter:mr-3 first-letter:mt-[-7px] first-letter:float-left ${TwoColumnsProps.firstLetterColor}`}>
                        {TwoColumnsProps.text}
                    </p>
                </motion.div>
            {/* IMAGE */}
            <motion.div
                initial={{ scale: 0 }} whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                    type: "spring",
                    damping: 10,
                    stiffness: 70,
                    restDelta: 0.001,
                    delay: 0.2,
                }} className='w-full h-full flex flex-col justify-center m-auto'>
                <img alt={TwoColumnsProps.imgAlt} className={`${TwoColumnsProps.imgAnimation} w-auto h-full`} src={TwoColumnsProps.imgSrc}/>
            </motion.div>
        </div>                
    )
}

export default TwoColumns;