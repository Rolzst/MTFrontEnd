import { z } from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel} from "@/components/ui/form.tsx";
import {Input} from "@/components/ui/input.tsx";
import LoadingButton from "@/components/LoadingButton.tsx";
import {Button} from "@/components/ui/button.tsx";
import TarjetasSection from "@/forms/user-profile-form/TarjetasSection.tsx";

const formSchema = z.object({
    email: z.string().optional(),
    tarjetas: z.array(
        z.object({
            nombre: z.string().min(1, 'El nombre es requerido'),
            noTarjeta: z.coerce.number().min(16, 'El número de tarjeta es requerido'),
            fechaVencimiento: z.coerce.number().min(4, 'La fecha de vencimiento es requerida'),
            cvc: z.coerce.number().max(4 , 'El cvc es de máximo 3 caracteres'),
        })
    ),
});
type UserFormData = z.infer<typeof formSchema>;
type Props = {
    onSave: (userProfileData: UserFormData) => void;
    isLoading: boolean;
}

function UserProfileForm({onSave, isLoading}: Readonly<Props>) {

    const form = useForm<UserFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            tarjetas: [{
                nombre: '',
                noTarjeta: 0,
                fechaVencimiento: 0,
                cvc: 0
            }]
        }
    })

    const onSubmit = (formDataJson: UserFormData) => {
        const formData = new FormData();
        

        formData.append('email', formDataJson.email);
        formDataJson.tarjetas.forEach(
            (tarjeta, index) =>{
                formData.append(`tarjetas[${index}][nombre]`, tarjeta.nombre);
                formData.append(`tarjetas[${index}][noTarjeta]`, tarjeta.noTarjeta.toString());
                formData.append(`tarjetas[${index}][fechaVencimiento]`, tarjeta.fechaVencimiento.toString());
                formData.append(`tarjetas[${index}][cvc]`, tarjeta.cvc.toString());
            }
        )

        onSave(formData);
        console.log(formDataJson);

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}
            className={'space-y-2 bg-gray-800 rounded-lg md:p-10'}>
                <div>
                    <h2 className={"font-bold text-xl mb-2"}>
                        Información del perfil
                    </h2>
                </div>
                <FormDescription>
                    Consulta y cambia la inormación de tu perfil aquí
                </FormDescription>

                <FormField control={form.control}
                           name={'email'}
                           render={({field}) => (
                               <FormItem className={'flex-1'}>
                                   <FormLabel>
                                       Correo
                                   </FormLabel>
                                   <FormControl>
                                       <Input {...field} disabled className={'bg-white'}/>
                                   </FormControl>
                               </FormItem>
                           )}
                />
                <TarjetasSection/>
                {
                    isLoading ? <LoadingButton/>
                        : <Button type={'submit'}>
                            Guardar
                        </Button>
                }
            </form>
        </Form>
    );
}

export default UserProfileForm;