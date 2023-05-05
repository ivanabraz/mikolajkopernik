import React from "react";

// Illustrations
import Kopernik from "../../illustrations/Kopernik";
import Sun from "../../illustrations/sun.svg";
import Moon from "../../illustrations/moon.svg";
import Planet1 from "../../illustrations/planet-1.svg";
import Star1 from "../../illustrations/star-1.svg";
import Star2 from "../../illustrations/star-2.svg";
import Star3 from "../../illustrations/star-3.svg";
import Ribbon from "../../illustrations/ribbon.svg";

const illustrations = {
    images: [
        {   imgSrc: Sun, 
            imgClassName: "z-1 w-36 xs:w-24 sm:w-24 md:w-[20%] lg:w-[20%] absolute top-[25%] left-[5%] animate-[spin_25s_linear_infinite]", 
            imgAlt: "Imagen del Sol"
        },
        {   imgSrc: Star1, 
            imgClassName: "w-10 xs:w-10 sm:w-10 md:w-[10%] lg:w-[10%] absolute top-[70%] left-[5%] animate-[bounce_10s_ease-in-out_infinite]", 
            imgAlt: "Imagen de estrella"
        },
        {   imgSrc: Moon, 
            imgClassName: "w-10 xs:w-10 sm:w-10 md:w-[15%] lg:w-[15%] absolute top-[5%] xs:top-[5%] sm:top-[5%] md:top-[25%] right-[30%] xs:right-[5%] sm:right-[5%] md:right-[15%] animate-[bounce_9s_ease-in-out_infinite]", 
            imgAlt: "Imagen de la Luna"
        },
        {   imgSrc: Planet1, 
            imgClassName: "z-10 w-24 xs:w-24 sm:w-24 md:w-[12%] lg:w-[12%] absolute top-[35%] xs:top-[40%] sm:top-[40%] md:top-[45%] right-[5%] animate-[spin_20s_linear_infinite]", 
            imgAlt: "Imagen de planeta"
        },
        {   imgSrc: Star3, 
            imgClassName: "w-10 xs:w-10 sm:w-10 md:w-[5%] lg:w-[5%] absolute top-[65%] right-[3%] xs:right-[3%] sm:right-[3%] md:right-[10%] animate-[bounce_5s_ease-in-out_infinite]", 
            imgAlt: "Imagen de estrella"
        },
        {   imgSrc: Ribbon, 
            imgClassName: "z-10 w-[95%] xs:w-[95%] sm:w-[70%] md:w-[40%] lg:w-[25%] absolute m-auto top-[90%] right-0 left-0 mr-auto ml-auto animate-[bounce_8s_ease-in-out_infinite]", 
            imgAlt: "Banner 550 aniversario"
        },
        {   imgSrc: Star2, 
            imgClassName: "w-10 absolute top-[105%] left-[24%] animate-[spin_20s_linear_infinite]", 
            imgAlt: "Imagen de estrella"
        },
    ],
}

const Header = () => {
    return (
            <div className="relative w-full h-screen overflow-hidden flex flex-col justify-between">
                <p className="text-center text-nblack font-serif italic font-medium
                mt-10 xs:mt-10 sm:mt-10 md:mt-5
                text-[7rem] xs:text-[7rem] sm:text[7rem] md:text-[12rem] lg:text-[9rem] xl:text-[10rem] 2xl:text-[11rem]">
                    <span className="hidden xs:hidden sm:hidden md:hidden lg:inline">Mikołaj </span>Kopernik
                </p>
                <Kopernik KopernikCustomClass={`self-center
                w-[170%] xs:w-[160%] sm:w-[150%] z-10 `}/>

                {illustrations.images.map((img) => (
                    <img src={img.imgSrc} className={img.imgClassName} alt={img.imgAlt}/>
                ))}
            </div>
    )
}

export default Header;