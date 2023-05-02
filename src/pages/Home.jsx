import React, {Fragment} from 'react';
import Header from '../components/Header/Header';
import TwoColumns from '../components/TwoColumns/TwoColumns';
import HeroQuote from '../components/HeroQuote/HeroQuote';

const Home = () => {
    return (
        <Fragment>
            <Header/>
            <HeroQuote titlePl="“Nic piękniejszego nad niebo, które przecież ogarnia wszystko, co piękne”" 
            titleEs="“Nada más bello que el cielo, que, al fin y al cabo, abarca todo lo bello”"
            author="— Mikołaj Kopernik" 
            backgroundColor="bg-nblack"/>
            <TwoColumns/>
        </Fragment>
    );
}

export default Home;