import {Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger} from "@/components/ui/sheet.tsx";
import {CircleUserRound, Menu} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";
import {useAuth0} from "@auth0/auth0-react";
import MobileNavLinks from "@/layout/navbar/MobileNavLinks.tsx";
import {Separator} from "@/components/ui/separator.tsx";


function MobileNav() {
    const {isAuthenticated, user, loginWithRedirect} = useAuth0();

    return (
        <Sheet>
            <SheetTrigger>
                <Menu className={'text-black-500 mr-4'}/>
            </SheetTrigger>
            <SheetContent>
                <SheetTitle>
                    {isAuthenticated ? (
                        <span className={'flex justify-center items-center px-3 ' +
                            'font-bold hover:text-blue-400 gap-2'}
                        >
                            <CircleUserRound className={'text-black-500'}/>
                            {user?.email}
                        </span>
                    ) : (
                        <span>Bienvenidos a Muebleria Torres</span>
                    )}
                </SheetTitle>
                <Separator/>
                <SheetDescription className="flex">
                    {isAuthenticated ? (
                        <MobileNavLinks/>
                    ):(
                        <Button
                            className={'flex-1 font-bold bg-primary'}
                            onClick={async () => {
                                await loginWithRedirect()
                            }}
                        >
                            Iniciar sesión
                        </Button>
                    )}
                </SheetDescription>
            </SheetContent>
        </Sheet>
    );
}

export default MobileNav;