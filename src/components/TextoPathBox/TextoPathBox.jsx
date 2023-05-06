import React from 'react';
import Marquee from 'react-easy-marquee';

const TextoPathBox = (TextoPathBoxProps) => {
    return(
        <div className={`${TextoPathBoxProps.bgColor} ${TextoPathBoxProps.textColor} font-serif italic w-full flex m-auto justify-center overflow-hidden`}>
            <Marquee duration={`${TextoPathBoxProps.marqueeDuration}`} axis="X" reverse={TextoPathBoxProps.reverse} height="250px" width="100%" className='m-auto texto-path-box--styles
            rounded-none xs:rounded-none sm:rounded-none md:rounded-full lg:rounded-full xl:rounded-full 2xl:rounded-full'>
                <p className={`text-8xl xs:text-8xl sm:text-8xl md:text-8xl lg:text-8xl xl:text-[10rem] py-5 md:py-10`}>{TextoPathBoxProps.text}</p>
            </Marquee>
        </div>
    )
}

export default TextoPathBox;