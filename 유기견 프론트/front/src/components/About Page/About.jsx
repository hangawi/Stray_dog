import React from "react";
import Header from "../PublicPage/Header";
import Footer from "../PublicPage/Footer";
import Banner from "./Banner";
import Faq from "./Faq";

const About = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <Banner/>
                <Faq/>
            </main>
            <Footer />
        </div>
    );
};

export default About;