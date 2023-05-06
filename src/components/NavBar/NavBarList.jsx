import React, { useContext } from "react";
import { NavHashLink } from 'react-router-hash-link';


// CONTEXT
import { NavBarContext } from '../../context/NavBarContext';



const NavBarList = () => {
    const { setOpen } = useContext(NavBarContext);

    const navigation = {
        pages: [
            { namePl: "Mikołaj Kopernik", nameEs: "Nicolás Copérnico", href: '/#top', icon:'', target:'_self' },
            { namePl: 'Biografia', nameEs: "Biografía", href: '/#biografia', icon:'', target:'_self' },
            { namePl: 'Odkrycia naukowe', nameEs: "Descubrimientos científicos", href: '/#odkrycia', icon:'', target:'_self' },
            { namePl: 'Kontekst historyczny', nameEs: "Contexto histórico", href: '/#kontekst', icon:'', target:'_self' },
            // { namePl: 'Ciekawostki', nameEs: "Curiosidades", href: '/#ciekawostki', icon:'', target:'_self' },
        ],
    }
    

    return (
        <>
            <div className="mt-2 pb-8 px-4">
                {/*  List */}
                <div className="w-full mt-10">
                    {navigation.pages.map((page) => (
                        <div key={page.namePl} >
                            <NavHashLink to={page.href} className="block text-nwhite text-2xl mt-5" onClick={() => setOpen(false)}> 
                                {page.namePl}
                                <span className="font-light	italic flex flex-col text-xl">{page.nameEs}</span>
                            </NavHashLink>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default NavBarList;