
import {useAuth0} from "@auth0/auth0-react";
import {CircleUserRound} from "lucide-react";
import {Link} from "react-router-dom";
import {Separator} from "@/components/ui/separator.tsx";
import {Button} from "@/components/ui/button.tsx";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem
} from "@/components/ui/dropdown-menu.tsx";

function UserNameMenu() {
    const { user, logout } = useAuth0();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                    className={' flex items-center px-3 ' +
                        'font-bold hover:text-blue-500 gap-2'}
            >
                <CircleUserRound className={'text-black-500'}/>
                {user?.email}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                        <Link to={'/productform'}
                                className={'font-bold hover:text-blue-500'}>
                            Agregar productos
                        </Link>
                </DropdownMenuItem>
                <Separator/>
                <DropdownMenuItem>
                    <Link to={'/user-profile'}
                            className={'font-bold hover:text-blue-500'}>
                        Perfil
                    </Link>
                </DropdownMenuItem>
                <Separator/>
                <DropdownMenuItem>
                    <Button
                        className={'flex flex-1 font-bold'}
                        onClick={ () => logout()}
                    >
                        Salir
                    </Button>
                </DropdownMenuItem>
                
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default UserNameMenu;