import React from "react";
import Header from "../PublicPage/Header";
import Footer from "../PublicPage/Footer";
import AnimalDetailForm from "./AnimalDetail";

const Cat1 = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <AnimalDetailForm/>
            </main>
            <Footer />
        </div>
    );
};

export default Cat1;