import {Navigate, Route, Routes} from "react-router-dom";
import Layout from "@/layout/Layout.tsx";
import Home from "@/pages/Home.tsx";
import AuthCallBackPage from "@/pages/AuthCallBackPage.tsx";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm.tsx";
import Categorias from "@/components/Categorias.tsx";
import ProductForm from "./forms/user-profile-form/Product/ProductForm";
import { useCreateProduct } from "./api/ProductApi";



const AppRoutes = () => {
    const { createProduct, isLoading } = useCreateProduct();
    return (
        <Routes>
            <Route path={'/'} element={
                <Layout>
                    <Home/>
                </Layout>
                }
            />
            <Route path={'/categorias'} element={
                <Layout>
                    <Categorias/>
                </Layout>
            }/>

            <Route path={'/ProductForm'} element = {
                <Layout>
                    <ProductForm onSave={createProduct} isLoading={isLoading}/>
                </Layout>
            }/>


            <Route path={'/auth-callback'} element={ <AuthCallBackPage/> }/>
            <Route path={'/user-profile'} element={
                <Layout>
                    <UserProfileForm onSave={() => console.log('hola')} isLoading={false}/>
                </Layout>
            }/>
            <Route path={'*'} element={<Navigate to={'/'}/>}></Route>
        </Routes>
    );
}

export default AppRoutes;