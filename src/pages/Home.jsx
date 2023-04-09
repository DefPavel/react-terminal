import axios from "axios";
import { useState } from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import MainPage from "../components/main/MainPage";

const Home = () => {

    return (
        <div className="bg-white shadow-md rounded container px-6 py-10 mx-auto">
            
            <MainPage />
            <HelmetProvider>
                <Helmet>
                    <title>Главная страница</title>
                </Helmet>
            </HelmetProvider>

        </div >
    )


}

export default Home