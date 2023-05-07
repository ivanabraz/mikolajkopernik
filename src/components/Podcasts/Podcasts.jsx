import React from "react";


const Podcasts = (TwoColumnsProps) => {

    return (
        <div id="podcasts" className={`w-full h-full text-center flex flex-col justify-center `}>
            <p className="text-center text-6xl font-serif pt-20">Podcasts recomendados</p>
            <div className={`w-full h-full grid gap-10 grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 
                p-20`}>
                <div>
                    <iframe title="Nicolás Copérnico. El genio que expulsó a la Tierra del centro del Universo." className="rounded" src="https://open.spotify.com/embed/episode/47v9QZnPrZYUbdrUZVvia8?utm_source=generator&theme=0" width="100%" height="352" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
                <div>
                    <iframe title="#3 HELIOCENTRISMO de Nicolas Copernico" className="rounded" src="https://open.spotify.com/embed/episode/7nbc12avLHGySJQZFYeyoK?utm_source=generator" width="100%" height="352" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
                <div>
                    <iframe title="Clase 20 - Nicolás Copérnico: biografía" className="rounded" src="https://open.spotify.com/embed/episode/34KSUQOb40ZYwqwRKwxVgp?utm_source=generator" width="100%" height="352" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
                <div>
                    <iframe title="E4- Nicolás Copérnico" className="rounded" src="https://open.spotify.com/embed/episode/1Xr5gxP43H6cGAsGqBYXTb?utm_source=generator" width="100%" height="352" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
            </div>
        </div>                
    )
}

export default Podcasts;