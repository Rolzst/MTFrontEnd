import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import {useNavigate} from "react-router-dom";
import {useCreateUser} from "@/api/UserApi.tsx";

type Props = {
    children: React.ReactNode;
};

function Auth0ProviderWithNavigate({children}: Readonly<Props>) {
    const navigate = useNavigate();
    const domain = import.meta.env.VITE_AUTH0_DOMAIN;
    const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
    const redirectUrl = import.meta.env.VITE_AUTH0_REDIRECT_URL;

    const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

    if(!domain || !clientId || !redirectUrl || !audience) {
        throw new Error('Error al iniciar Auth0Provider');
    }
    const onRedirectCallback = () => {
        navigate('/auth-callback')
    }

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            authorizationParams={{
                redirect_uri: redirectUrl,
                audience
            }}
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    );
}

export default Auth0ProviderWithNavigate;