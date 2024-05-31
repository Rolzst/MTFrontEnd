import {useFormContext} from "react-hook-form";
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";

type Props = {
    index: number;
    removeItemTarjeta: () => void;
}

function MenuItemInput({index, removeItemTarjeta}: Readonly<Props>) {
    const {control} = useFormContext();

    return (
        <div className={'flex flex-row items-end gap-2'}>
            <FormField control={control}
                       name={`tarjetas.${index}.nombre`}
                       render={({field}) => (
                           <FormItem>
                               <FormLabel className={'flex items-center gap-1'}>
                                   Nombre
                                   <FormMessage/>
                               </FormLabel>
                               <FormControl>
                                   <Input {...field} placeholder={'Nombre...'} className={'bg-white'}/>
                               </FormControl>
                           </FormItem>
                       )}
            />
            <FormField control={control}
                       name={`tarjetas.${index}.noTarjeta`}
                       render={({field}) => (
                           <FormItem>
                               <FormLabel className={'flex items-center gap-1'}>
                                   Número de tarjeta
                                   <FormMessage/>
                               </FormLabel>
                               <FormControl>
                                   <Input {...field} placeholder={'Número de tarjeta...'} className={'bg-white'}/>
                               </FormControl>
                           </FormItem>
                       )}
            />
            <FormField control={control}
                       name={`tarjetas.${index}.fechaVencimiento`}
                       render={({field}) => (
                           <FormItem>
                               <FormLabel className={'flex items-center gap-1'}>
                                   Fecha de vencimiento
                                   <FormMessage/>
                               </FormLabel>
                               <FormControl>
                                   <Input {...field} placeholder={'Fecha de vencimiento...'} className={'bg-white'}/>
                               </FormControl>
                           </FormItem>
                       )}
            />

            <FormField control={control}
                       name={`tarjetas.${index}.cvc`}
                       render={({field}) => (
                           <FormItem>
                               <FormLabel className={'flex items-center gap-1'}>
                                   CVC
                                   <FormMessage/>
                               </FormLabel>
                               <FormControl>
                                   <Input {...field} placeholder={'CVC...'} className={'bg-white'}/>
                               </FormControl>
                           </FormItem>
                       )}
            />

            <Button
                type={'button'}
                onClick={removeItemTarjeta}
                className={'bg-red-500 max-h-fit'}>
                Eliminar
            </Button>
        </div>
    );
}

export default MenuItemInput;