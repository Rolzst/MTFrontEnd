import {Button} from "@/components/ui/button.tsx";
import {useAuth0} from "@auth0/auth0-react";
import { FaCartShopping } from "react-icons/fa6";
import UserNameMenu from "@/components/UserNameMenu.tsx";
import {Link} from "react-router-dom";

function MainNav() {
    const {loginWithRedirect, isAuthenticated} = useAuth0();

    return (
        <span className={'flex flex-row'}>
            <Link to={'/categorias'}
                  className={'flex items-center px-2 mx-2 rounded-lg hover:text-black hover:bg-white'}
            >
                Categorías
            </Link>
            {isAuthenticated ? (
                <UserNameMenu/>
            ) : (
                <Button variant={'ghost'}
                        className={'font-bold hover:text-black hover:bg-white mr-1'}
                        onClick={async () => {
                            await loginWithRedirect()
                        }}
                >
                    Iniciar sesión
                </Button>
            )}

            <Button className={'font-bold hover:text-black hover:bg-white mr-3'}>
                <FaCartShopping />
            </Button>
        </span>
    );
}

export default MainNav;