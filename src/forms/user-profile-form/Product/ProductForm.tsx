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
    nombre: z.string().min(5,"se necesita minimos 5 caracteres"),
    descripcion: z.string().min(10,"Se requiere descripcion"),
    precio: z.coerce.number().min(100,"Ingrese el precio")
    
});
type ProductFormData = z.infer<typeof formSchema>;
type Props = {
    onSave: (ProductFormData: ProductFormData) => void;
    isLoading: boolean;
}

function ProductForm({onSave, isLoading}: Props) {

    const form = useForm<ProductFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nombre: "",
            descripcion: "",
            precio: 0
        }
    })

    const onSubmit = (formDataJson: ProductFormData) => {

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
                            Información del producto
                        </h2>
                    </div>
                    <FormDescription>
                        Consulta y cambia la información del producto
                    </FormDescription>

                    <FormField control={form.control}
                               name={'nombre'}
                               render={({field}) => (
                                   <FormItem className={'flex-1'}>
                                       <FormLabel>
                                           Nombre del producto
                                       </FormLabel>
                                       <FormControl>
                                           <Input {...field} className={'bg-white'}/>
                                       </FormControl>
                                   </FormItem>
                               )}
                    />
                    <FormField control={form.control}
                               name={'descripcion'}
                               render={({field}) => (
                                   <FormItem className={'flex-1'}>
                                       <FormLabel>
                                           Descripcion del producto
                                       </FormLabel>
                                       <FormControl>
                                           <Input {...field} className={'bg-white'}/>
                                       </FormControl>
                                       <FormMessage />
                                   </FormItem>
                               )}
                    />
                    <FormField control={form.control}
                               name={'precio'}
                               render={({field}) => (
                                   <FormItem className={'flex-1'}>
                                       <FormLabel>
                                            Precio
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

export default ProductForm;