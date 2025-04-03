import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import * as productService from "@/services/productService";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handle = async () => {
            const res = await productService.getAll();
            setProducts(res.data);
            setIsLoading(false);
        };
        handle();
    }, []);

    if (isLoading) return <div>Loading.....</div>;
    return (
        <div>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <Link to={`/products/${product.id}`}>
                            {product.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;
