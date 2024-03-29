import React, { Fragment, useContext } from "react";
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import NavBarBurger from './NavBarBurger';
import NavBarList from './NavBarList';
import KopernikHead from "../../illustrations/mk.png";

// CONTEXT
import { NavBarContext } from '../../context/NavBarContext';

const NavBar = () => {
    const { open, setOpen } = useContext(NavBarContext);

    return (
        <>
            <NavBarBurger/>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 flex z-40" onClose={setOpen}>
                    <Transition.Child as={Fragment} enter="transition-opacity ease-linear duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="transition-opacity ease-linear duration-300" leaveFrom="opacity-100" leaveTo="opacity-0" >
                        <Dialog.Overlay className="fixed inset-0" />
                    </Transition.Child>
                    <Transition.Child as={Fragment} enter="transition ease-in-out duration-300 transform" enterFrom="-translate-x-full" enterTo="translate-x-0" leave="transition ease-in-out duration-300 transform" leaveFrom="translate-x-0" leaveTo="-translate-x-full">
                        <div className="relative max-w-xs w-full bg-nblack shadow-xl pb-12 flex flex-col overflow-y-auto">
                            <div className="px-4 pt-5 pb-2 flex">
                                <button type="button" className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-white" onClick={() => setOpen(false)}>
                                    <span className="sr-only">Close menu</span>
                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                            <img src={KopernikHead} className="w-28 px-4 mt-5 animate-[spin_25s_linear_infinite]" alt="Kopernik's head icon"/>
                            <NavBarList/>
                        </div>
                    </Transition.Child>
                </Dialog>
            </Transition.Root>

    </>
    )
}

export default NavBar;