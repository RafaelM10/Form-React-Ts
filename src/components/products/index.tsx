import { useState } from 'react';

interface IProduct {
    code: string;
    description: string;
    price?: number;
}

export const Products = () => {
    const [products, setProducts] = useState< IProduct[] >([{
        code:"10",
        description:"Keyboard",
        price: 98,
    },
    {
        code:"10",
        description:"Keyboard",
        price: 98,
    },
    ]);

    return (
        <div>
            <h2>Products</h2>
            {products.map(product => (
                 <div className="row">
                 <input type="text" placeholder='code'/>
                 <input type="text" placeholder='description'/>
                 <input type="text" placeholder='price'/>
                 <button className='delete'>Delete</button>
             </div>
            ))}
           
            <button className='add'>Add</button>
        </div>
    )
};