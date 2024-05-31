import {Link} from "react-router-dom";
import {Button} from "@/components/ui/button.tsx";
import {useAuth0} from "@auth0/auth0-react";

function MobileNavLinks() {
    const  {logout} = useAuth0();
    return (
        <div className={'flex flex-col w-full items-center space-y-3 pt-2'}>
            <Link to={'/user-profile'}
                className={' bg-white  font-bold' +
                    'hover:text-orange-500'}
            >
                Perfil
            </Link>
            <Button
                className={'w-full items-center px-3 ' +
                    'font-bold hover:text-blue-500'}
                onClick={() => logout()}
            >
                Salir
            </Button>
        </div>
    );
}

export default MobileNavLinks;