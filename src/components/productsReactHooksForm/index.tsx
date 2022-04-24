import { useFieldArray, useForm } from 'react-hook-form';

interface IProduct {
    code: string;
    description: string;
    price?: number;
}

type FormValues = {
    products: IProduct[]
}

export const ProductsReactHookForm = () => {
    const { 
        control, 
        register, 
        handleSubmit,
        formState: { errors },
     } = useForm<FormValues>({
         delayError: 500,
     });
    const { fields, append, remove } = useFieldArray({
        control,
        name: "products",
    });

    
    const add = () => {
        append({
            code: "",
            description: "",
            price: undefined,
        });
    };

    return (
        <div>
            <h2>Products</h2>
            <form onSubmit={handleSubmit((data) => (data))}>
            {fields.map((product, index) => (
                 <div key={product.id} className="row">
                     {index + 1}
                 <input 
                 type="text" 
                 placeholder='code'
                 {...register(`products.${index}.code`, {
                     required: "Por favor, preencha o campo code",
                 })}
                 />

                 <input 
                 type="text" 
                 placeholder='description'
                 {...register(`products.${index}.description`)}
                 />

                 <input 
                 type="text" 
                 placeholder='price'
                 {...register(`products.${index}.price`)}
                 />
                 <button onClick={() => remove(index)} className='delete'>Delete</button>
             </div>
            ))}
                <button type='submit'>Enviar</button>
            </form>
            <button onClick={add} className='add'
            >Add
            </button>
            <pre>
                <code>{JSON.stringify(fields, null, 2)}</code>
            </pre>
        </div>
    )
};