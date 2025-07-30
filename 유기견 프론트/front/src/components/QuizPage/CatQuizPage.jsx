import React from "react";
import Header from "../PublicPage/Header";
import Footer from "../PublicPage/Footer";
import CatQuiz from "./CatQuiz";

const CatQuizPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <CatQuiz/>
            </main>
            <Footer />
        </div>
    );
};

export default CatQuizPage;