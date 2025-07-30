import React from "react";
import Header from "../PublicPage/Header";
import Footer from "../PublicPage/Footer";
import NewAnimal from "./NewAnimal";

const Dog2 = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <NewAnimal />
            </main>
            <Footer />
        </div>
    );
};

export default Dog2;