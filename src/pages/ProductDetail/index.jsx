import useFetch from "@/hooks/useFetch";
import React from "react";
import { useParams } from "react-router-dom";
const ProductDetail = () => {
    const params = useParams();
    const [product] = useFetch(
        `https://api01.f8team.dev/api/products/${params.id}`
    );

    return (
        <div>
            <h3>Tên sản phẩm: {product.title}</h3>
            <img src={product.thumbnail} alt={product.title} />
            <p>Giá: {product.price}$</p>
        </div>
    );
};

export default ProductDetail;
