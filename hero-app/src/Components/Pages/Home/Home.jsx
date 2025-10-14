import React from 'react';
import Banner from '../../Banner/Banner';
import Stats from '../../Stats/Stats';
import Apps from '../Apps/Apps';
import { useLoaderData } from 'react-router';

const Home = () => {

    const data= useLoaderData();
    return (
        <div >
            <Banner></Banner>
            <Stats></Stats>
            <Apps data={data}></Apps>
        </div>
    );
};

export default Home;