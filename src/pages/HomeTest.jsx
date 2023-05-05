import React, {Fragment} from 'react';
import Header from '../components/Header/Header';
import TwoColumns from '../components/TwoColumns/TwoColumns';
import HeroQuote from '../components/HeroQuote/HeroQuote';

// Illustrations
import Bio1 from "../illustrations/biography-1.svg"

import Heliocentrism from "../illustrations/heliocentrism.svg"


const HomeTest = () => {

    const info = {
        sections: [
            { 
                divId: "biografia",
                titlePl: "Biografia",
                titleEs: "Biografía",
                text: "Mikołaj Kopernik nació en Toruń, Polska en 1473. Era el hijo menor de una familia de comerciantes adinerados. Kopernik se interesó por la astronomía desde muy joven, pero también estudió derecho, medicina y matemáticas. En 1491, se trasladó a la Uniwersytet Jagielloński en Kraków, donde estudió filosofía y astronomía. Durante este tiempo, hizo amistad con algunos de los astrónomos más importantes de la época.",
                imgSrc: Bio1,
                imgAlt: "Biografía parte 1",
            },
            { 
                divId: "biografia-2",
                divOrder: "order-last",
                titlePl: "",
                titleEs: "",
                text: 'En 1501, Kopernik regresó a Polska, donde trabajó como médico y funcionario. También comenzó a trabajar en su obra "De revolutionibus orbium coelestium", en la que presentó su teoría heliocéntrica y sus observaciones astronómicas. A lo largo de su vida, Kopernik mantuvo una estrecha relación con su familia y amigos, así como con otros astrónomos y científicos de la época. También se involucró en la política de la época y trabajó como asesor en temas monetarios y financieros para su tío, el obispo de Warmia. Kopernik falleció en mayo de 1543, a la edad de 70 años, poco después de publicar su obra "De revolutionibus orbium coelestium". Aunque su teoría heliocéntrica fue controvertida en su época, su trabajo sentó las bases para la astronomía moderna y es considerado como uno de los hitos más importantes de la ciencia.',
                imgSrc: Heliocentrism,
                imgAlt: "Biografía parte 2",
            },
            { 
                divId: "odkrycia",
                titlePl: "Odkrycia naukowe",
                titleEs: "Descubrimientos científicos",
                text: "Mikołaj Kopernik es conocido principalmente por su teoría heliocéntrica, que afirmaba que el sol estaba en el centro del sistema solar, en lugar de la tierra. Este descubrimiento fue revolucionario en su época, ya que contradecía la creencia popular de que la tierra estaba en el centro del universo. La teoría heliocéntrica de Kopernik se basaba en sus observaciones astronómicas, que demostraban que los movimientos de los planetas eran más fáciles de explicar si se asumía que el sol estaba en el centro del sistema solar. Esta teoría también explicaba la aparente retrogradación de los planetas, que se movían hacia atrás en el cielo en ciertos momentos del año. Además de su teoría heliocéntrica, Kopernik hizo otros importantes descubrimientos científicos. Uno de ellos fue su trabajo sobre la longitud de los años solares y las estaciones, que sugiere que el año solar tenía una duración de aproximadamente 365 días y 6 horas. Este descubrimiento fue fundamental para el desarrollo del calendario gregoriano, que se utiliza en la actualidad.",
                imgSrc: Heliocentrism,
                imgAlt: "Descubrimientos científicos Parte 1",
            },
            { 
                divId: "odkrycia-2",
                divOrder: "order-last",
                titlePl: "",
                titleEs: "",
                text: 'Kopernik también realizó importantes observaciones sobre la luna y los planetas, incluyendo la observación de las fases de Venus y la determinación de las posiciones relativas de los planetas. Además de sus descubrimientos científicos, Kopernik también hizo importantes contribuciones a la filosofía y la teología. En su obra "De revolutionibus orbium coelestium", Copérnico argumenta que la teoría heliocéntrica es más coherente con la naturaleza divina que la teoría geocéntrica, ya que hace que el universo sea más armonioso y ordenado. En resumen, Mikołaj Kopernik fue un pionero en la astronomía y sus descubrimientos científicos fueron fundamentales para la comprensión moderna del universo. Su trabajo también tuvo importantes implicaciones filosóficas y teológicas, lo que demuestra su capacidad para integrar la ciencia y la religión en su obra.',
                imgSrc: Heliocentrism,
                imgAlt: "Descubrimientos científicos Parte 2",
            },
            { 
                divId: "kontekst",
                titlePl: "Kontekst historyczny",
                titleEs: "Contexto histórico",
                text: "Mikołaj Kopernik vivió durante un periodo histórico conocido como el Renacimiento, que tuvo lugar entre los siglos XIV y XVII. El Renacimiento fue una época de gran actividad intelectual y artística, que se caracterizó por un resurgimiento del interés por la cultura clásica griega y romana, así como por el surgimiento de nuevos descubrimientos científicos y exploraciones geográficas. Durante la época de Kopernik, el mundo estaba experimentando importantes cambios políticos y religiosos. Europa estaba dividida en muchos pequeños estados, y el continente estaba siendo sacudido por guerras y conflictos religiosos. La Iglesia Católica Romana era una fuerza poderosa en Europa, y desempeñaba un papel importante en la política y la cultura. En este contexto, la teoría heliocéntrica de Kopernik fue revolucionaria, ya que contradecía la visión geocéntrica del universo que había prevalecido durante siglos y que era aceptada por la Iglesia Católica. La idea de que la tierra no estaba en el centro del universo era profundamente cuestionadora, ya que ponía en tela de juicio la idea de que la humanidad era el centro de la creación.",
                imgSrc: Heliocentrism,
                imgAlt: "??",
            },
            { 
                divId: "kontekst-2",
                titlePl: "",
                titleEs: "",
                text: 'A pesar de la importancia de su teoría, Kopernik no publicó su obra "De revolutionibus orbium coelestium" hasta el final de su vida, en 1543. Esto se debió en parte a la controversia que rodeaba sus ideas, así como a la dificultad de encontrar un editor dispuesto a publicar su obra. En resumen, el contexto histórico en el que vivió Mikołaj Kopernik fue el Renacimiento, una época de importantes cambios políticos, religiosos y culturales. La teoría heliocéntrica de Kopernik fue revolucionaria en su época, ya que contradecía la visión geocéntrica del universo que había prevalecido durante siglos. La controversia que rodeaba sus ideas muestra la importancia de la libertad de pensamiento y el valor de desafiar las ideas establecidas.',
                imgSrc: Heliocentrism,
                imgAlt: "??",
            },
            { 
                divId: "ciekawostki",
                titlePl: "Ciekawostki",
                titleEs: "Curiosidades",
                text: "",
                imgSrc: Heliocentrism,
                imgAlt: "??",
            },
        ],
    }

    return (
        <Fragment>
            <Header/>
            <HeroQuote titlePl="“Nic piękniejszego nad niebo, które przecież ogarnia wszystko, co piękne”" 
            titleEs="“Nada más bello que el cielo, que, al fin y al cabo, abarca todo lo bello”"
            author="— Mikołaj Kopernik" 
            backgroundColor="bg-nblack"/>


            {info.sections.map((info) => (
                <TwoColumns key={info.divId}
                    divId={info.divId}
                    divOrder={info.divOrder}
                    titlePl={info.titlePl}
                    titleEs={info.titleEs}
                    text={info.text}
                    imgSrc={info.imgSrc}
                    imgAlt={info.imgAlt}
                />
            ))}
        </Fragment>
    );
}

export default HomeTest;