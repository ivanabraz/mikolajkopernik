import React from "react";
import { motion } from "framer-motion";

const HeroQuote = (HeroTextProps) => {
    return (
        <div className={`${HeroTextProps.backgroundColor} flex flex-row justify-center items-center text-center w-full h-fit text-nwhite
        p-16 xs:p-16 sm:p-16 md:p-40 `}>
            <motion.div
            initial={{ scale: 0 }} whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
                type: "spring",
                damping: 10,
                stiffness: 90,
                restDelta: 0.001,
            }}>
                <p className="text-xl xs:text-xl sm:text-xl md:text-4xl font-medium">{HeroTextProps.titlePl}</p>
                <p className="text-md xs:text-md sm:text-md md:text-2xl font-light italic pt-3">{HeroTextProps.titleEs}</p>
                <p className="text-md xs:text-md sm:text-md md:text-2xl font-light pt-5">{HeroTextProps.author}</p>
            </motion.div>
        </div>
    )
}

export default HeroQuote;