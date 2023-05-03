import React from "react";
import { motion } from "framer-motion";


// Illustrations
import Heliocentrism from "../../illustrations/heliocentrism.svg"

const TwoColumns = () => {

    return (
        <div id="program" 
        className='w-full h-full grid gap-0 grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'>
            <div className='w-full h-full flex flex-col justify-center m-auto
            p-5 xs:p-5 sm:p-5 md:p-10 lg:p-20
            text-sm xs:text-sm sm:text-sm md:text-lg lg:text-lg'>
                <p className="first-letter:text-9xl first-letter:font-goudy">
                    Mikołaj Kopernik nació en Toruń, Polska en 1473. Era el hijo menor de una familia de comerciantes adinerados. Kopernik se interesó por la astronomía desde muy joven, pero también estudió derecho, medicina y matemáticas. En 1491, se trasladó a la Uniwersytet Jagielloński en Kraków, donde estudió filosofía y astronomía. Durante este tiempo, hizo amistad con algunos de los astrónomos más importantes de la época.
                </p>
                <p className="mt-3">
                    En 1496, Kopernik se trasladó a Italia para continuar sus estudios. Allí, estudió matemáticas y astronomía en la Universidad de Bolonia y más tarde en la Universidad de Padua. Fue en Italia donde Kopernik comenzó a trabajar en su teoría heliocéntrica (Heliocentryzm), que afirmaba que el sol estaba en el centro del sistema solar, en lugar de la tierra.
                </p>
                <span className="text-9xl font-goudy">
                    E
                </span>
            </div>
            {/* IMAGE */}
            <div className='w-full h-full bg-lime p-14 flex flex-col justify-center m-auto'>
                <motion.img
                initial={{ scale: 0 }} whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                    type: "spring",
                    damping: 10,
                    stiffness: 70,
                    restDelta: 0.001,
                    delay: 0.2,
                }}
                alt='Heliocentrism' className="w-auto h-full" src={Heliocentrism}
                />
            </div>
        </div>                
    )
}

export default TwoColumns;