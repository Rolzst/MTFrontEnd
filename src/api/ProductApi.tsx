import {useMutation, useQuery} from "react-query";
import {useAuth0} from "@auth0/auth0-react";
import {toast} from "sonner";
import {Product} from "@/types.ts";

const API_BASE_URL = import.meta.env.VITE_BASE_URL;

type CreateProductRequest = {
    nombre: string,
    descripcion: string,
    precio: number
}

export const useCreateProduct = () => {
    const { getAccessTokenSilently } = useAuth0();

    const createProductRequest =  async (product: CreateProductRequest) => {
        const accessToken = await getAccessTokenSilently();
        const response = await fetch(API_BASE_URL + '/api/products/addproduct', {
            method: "POST",
            headers: {
                Authorization: 'Bearer ' + accessToken,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        });

        if (!response.ok) {
            throw new Error('Error' + response.statusText);
        }
    }//Fin de createProductRequest

    const {
        mutateAsync: createProduct,
        isLoading,
        isError,
        isSuccess
    } = useMutation(createProductRequest)

    return {
        createProduct,
        isLoading,
        isError,
        isSuccess
    }
}

type UpdateProductRequest = {
    nombre: string,
    descripcion: string,
    precio: number
}

export const useUpdateProduct = () =>{
    const { getAccessTokenSilently } = useAuth0();

    const updateProductRequest = async (formData: UpdateProductRequest) =>{
        const accessToken = await getAccessTokenSilently();
        const response = await fetch(API_BASE_URL + '/api/products',{
            method: "PUT",
            headers: {
                Authorization: 'Bearer ' + accessToken,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok){
            throw new Error('Error al acualizar usuario!')
        }

    }// Final del updateProductRequest

    const {
        mutateAsync: updateProduct,
        isLoading,
        isSuccess,
        error,
        reset
    } = useMutation(updateProductRequest)

    if (isSuccess){
        toast.success("Producto actualizado!");
    }
    if (error){
        toast.success("Error al actualizar producto!");
        reset();
    }

    return{
        updateProduct,
        isLoading,
        isSuccess,
        error,
        reset
    }

}// Final del useUpdateProduc

export const useProduct = () => {
    const { getAccessTokenSilently } = useAuth0();


    const getProductRequest = async (): Promise<Product> => {
        const accessToken = await getAccessTokenSilently();
        const response = await fetch(API_BASE_URL + '/api/products', {
            method: "GET",
            headers: {
                Authorization: 'Bearer ' + accessToken,
                "Content-Type": "application/json",
            }
        })

        if (!response.ok){
            throw new Error('Producto Actualizado')
        }
        return response.json();
    }//Final del getProductRequest
    const {
        data: getProduct,
        isLoading,
        error
    } = useQuery("fetchProduct", getProductRequest);

    if (error){
        toast.error(error.toString());
    }
    return {
        getProduct,
        isLoading
    }


}//Final del useProduct