import React from "react";
import Header from "../PublicPage/Header";
import Footer from "../PublicPage/Footer";
import SimpleMap from "./MapContainer";

const ShelterDetail = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <SimpleMap/>
            </main>
            <Footer />
        </div>
    );
};

export default ShelterDetail;