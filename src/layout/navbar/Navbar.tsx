import {Link} from "react-router-dom";
import MainNav from "@/layout/navbar/MainNav.tsx";
import MobileNav from "@/layout/navbar/MobileNav.tsx";

function Navbar() {
    return (
        <div className={'flex flex-row border-b-2 bg-primary py-6'}>
            <div className={'container mx-auto flex justify-between items-center'}>
                <Link to={'/'} className={'text-3xl font-bold tracking-tight text-black '}>
                    Muebleria Torres
                </Link>
            </div>
            <div className={'md:hidden'}>
                <MobileNav/>
            </div>
            <div className={' hidden md:block'}>
                <MainNav/>
            </div>

        </div>
    );
}

export default Navbar;