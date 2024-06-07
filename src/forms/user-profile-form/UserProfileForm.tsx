import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form.tsx";
import {Input} from "@/components/ui/input.tsx";
import LoadingButton from "@/components/LoadingButton.tsx";
import {Button} from "@/components/ui/button.tsx";

const formSchema = z.object({
    email: z.string().optional(),
    noTarjeta: z.coerce.number().optional(),
    fechaVencimiento: z.string().optional(),
    cvc: z.coerce.number().min(3, 'el cvc tiene al menos 3 numeros'),
    calle: z.string().min(2, 'ingresa una calle valida'),
    colonia: z.string().min(2, 'Ingresa una colonia valida'),
    estado: z.string().min(2, 'Ingresa un estado valido'),
    pais: z.string().min(2, 'Ingresa un país valido'),
    cp: z.coerce.number().min(8, 'El código postal debe tener 8 digitos')
});
type UserFormData = z.infer<typeof formSchema>;
type Props = {
    onSave: (userProfileData: UserFormData) => void;
    isLoading: boolean;
}

function UserProfileForm({onSave, isLoading}: Props) {

    const form = useForm<UserFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            noTarjeta: 0,
            fechaVencimiento: "",
            cvc: 0,
            calle: "",
            colonia: "",
            estado: "",
            pais: "",
            cp: 0
        }
    })

    const onSubmit = (formDataJson: UserFormData) => {

        //onSave(formDataJson);
        console.log(formDataJson);

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}
                  className={'flex flex-row space-y-2 border-gray-100 rounded-lg md:p-10'}>
                <div>
                    <div>
                        <h2 className={"font-bold text-xl mb-2"}>
                            Información del perfil
                        </h2>
                    </div>
                    <FormDescription>
                        Consulta y cambia la información de tu perfil aquí
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
                    <FormField control={form.control}
                               name={'noTarjeta'}
                               render={({field}) => (
                                   <FormItem className={'flex-1'}>
                                       <FormLabel>
                                           Número de tarjeta
                                       </FormLabel>
                                       <FormControl>
                                           <Input {...field} className={'bg-white'}/>
                                       </FormControl>
                                       <FormMessage />
                                   </FormItem>
                               )}
                    />
                    <FormField control={form.control}
                               name={'fechaVencimiento'}
                               render={({field}) => (
                                   <FormItem className={'flex-1'}>
                                       <FormLabel>
                                           Fecha de vencimiento
                                       </FormLabel>
                                       <FormControl>
                                           <Input {...field} className={'bg-white'}/>
                                       </FormControl>
                                       <FormMessage />
                                   </FormItem>
                               )}
                    />
                    <FormField control={form.control}
                               name={'cvc'}
                               render={({field}) => (
                                   <FormItem className={'flex-1'}>
                                       <FormLabel>
                                           CVC
                                       </FormLabel>
                                       <FormControl>
                                           <Input {...field} className={'bg-white'}/>
                                       </FormControl>
                                       <FormMessage />
                                   </FormItem>
                               )}
                    />

                </div>
                <div className={'pl-5 space-y-1'}>
                    <div>
                        <h2 className={"font-bold text-xl mb-2"}>
                            Información de la dirección
                        </h2>
                    </div>
                    <FormField control={form.control}
                               name={'calle'}
                               render={({field}) => (
                                   <FormItem className={'flex-1'}>
                                       <FormLabel>
                                           Calle
                                       </FormLabel>
                                       <FormControl>
                                           <Input {...field} className={'bg-white'}/>
                                       </FormControl>
                                       <FormMessage />
                                   </FormItem>
                               )}
                    />
                    <FormField control={form.control}
                               name={'colonia'}
                               render={({field}) => (
                                   <FormItem className={'flex-1'}>
                                       <FormLabel>
                                           Colonia
                                       </FormLabel>
                                       <FormControl>
                                           <Input {...field} className={'bg-white'}/>
                                       </FormControl>
                                       <FormMessage />
                                   </FormItem>
                               )}
                    />
                    <FormField control={form.control}
                               name={'estado'}
                               render={({field}) => (
                                   <FormItem className={'flex-1'}>
                                       <FormLabel>
                                           Estado
                                       </FormLabel>
                                       <FormControl>
                                           <Input {...field} className={'bg-white'}/>
                                       </FormControl>
                                       <FormMessage />
                                   </FormItem>
                               )}
                    />
                    <FormField control={form.control}
                               name={'pais'}
                               render={({field}) => (
                                   <FormItem className={'flex-1'}>
                                       <FormLabel>
                                           País
                                       </FormLabel>
                                       <FormControl>
                                           <Input {...field} className={'bg-white'}/>
                                       </FormControl>
                                       <FormMessage />
                                   </FormItem>
                               )}
                    />
                    <FormField control={form.control}
                               name={'cp'}
                               render={({field}) => (
                                   <FormItem className={'flex-1'}>
                                       <FormLabel>
                                           Código postal
                                       </FormLabel>
                                       <FormControl>
                                           <Input {...field} className={'bg-white'}/>
                                       </FormControl>
                                       <FormMessage />
                                   </FormItem>
                               )}
                    />
                    {
                        isLoading ? <LoadingButton/>
                            : <Button type={'submit'}>
                                Guardar
                            </Button>
                    }
                </div>

            </form>
        </Form>
    );
}

export default UserProfileForm;