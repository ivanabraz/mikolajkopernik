import React from 'react';
import KopernikHead from "../illustrations/mk-2.png";

const Spin = () => {
    return (
        <div className='w-screen h-screen flex justify-center bg-nblue'>
            <img src={KopernikHead} className="h-28 self-center animate-[spin_25s_linear_infinite]" alt="Kopernik's head icon"/>
        </div>
    );
}

export default Spin;