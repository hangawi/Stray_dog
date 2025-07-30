import React from "react";
import Header from "../PublicPage/Header";
import Footer from "../PublicPage/Footer";
import DogQuiz from "./DogQuiz";

const DogQuizPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <DogQuiz/>
            </main>
            <Footer />
        </div>
    );
};

export default DogQuizPage;