import React from "react";
import Navbar from "@/layout/navbar/Navbar.tsx";
import Footer from "@/layout/Footer.tsx";

type Props ={
    children: React.ReactNode;
}

function Layout({children}: Readonly<Props>) {
    return (
        <div className={'flex flex-col min-h-screen'}>
            <Navbar/>
            <div className={'flex flex-col justify-center items-center '}>
                {children}
            </div>
            <Footer/>
        </div>
    );
}

export default Layout;