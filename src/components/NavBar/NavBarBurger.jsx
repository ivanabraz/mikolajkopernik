import React, { useContext } from "react";
import { MenuIcon } from '@heroicons/react/outline';

// CONTEXT
import { NavBarContext } from '../../context/NavBarContext';


const NavBarBurger = () => {

    const { setOpen } = useContext(NavBarContext);

    return (
        <>
            {/* Burger */}
            <header className="w-full absolute left-0 right-0 bg-transparent z-40 flex justify-between">
                <nav aria-label="Top" className="p-4 sm:p-6 lg:p-8">
                    <div className="h-16 flex items-center">
                        <button type="button" className="bg-transparent p-2 rounded-md text-nblack" onClick={() => setOpen(true)}>
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className="h-8 w-8 xs:h-8 xs:w-8 sm:h-8 sm:w-8 md:h-10 md:w-10" aria-hidden="true" />
                        </button>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default NavBarBurger;