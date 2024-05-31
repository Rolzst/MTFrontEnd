import {useFieldArray, useFormContext} from "react-hook-form";
import {FormField, FormItem} from "@/components/ui/form.tsx";
import {Button} from "@/components/ui/button.tsx";
import TarjetaItemInput from "@/forms/user-profile-form/TarjetaItemInput.tsx";


function MenuSection() {
    const {control} = useFormContext();
    const {
        fields,
        append,
        remove} =
    useFieldArray({
        control,
        name: 'tarjetas',
    })
    return (
        <div className={'space-y-2'}>
            <FormField
                control={control}
                name={'tarjetas'}
                render={ ()=>(
                    <FormItem>
                        {
                            fields.map((_,index) =>(
                                <TarjetaItemInput
                                    index={index}
                                    removeItemTarjeta={()=>remove(index)}
                                />
                            ))
                        }
                    </FormItem>
                )}>


            </FormField>
            <Button type={'button'}
                    onClick={()=>append({ nombre: "", noTarjeta: "", fechaVencimiento: "", cvc: ""})}>
                Agregar al menú
            </Button>

        </div>
    );
}

export default MenuSection;