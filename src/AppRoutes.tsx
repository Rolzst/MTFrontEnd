import {Navigate, Route, Routes} from "react-router-dom";
import Layout from "@/layout/Layout.tsx";
import Home from "@/pages/Home.tsx";
import AuthCallBackPage from "@/pages/AuthCallBackPage.tsx";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm.tsx";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={'/'} element={
                <Layout>
                    <Home/>
                </Layout>
                }
            />

            <Route path={'/auth-callback'} element={ <AuthCallBackPage/> }/>
            <Route path={'/user-profile'} element={
                <Layout>
                    <UserProfileForm isLoading={false}/>
                </Layout>
            }/>
            <Route path={'*'} element={<Navigate to={'/'}/>}></Route>
        </Routes>
    );
}

export default AppRoutes;