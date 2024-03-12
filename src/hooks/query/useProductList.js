import { useQuery } from "@tanstack/react-query";
import { getAllProductsAPI } from "../../api/ShoppingAPI";
import { CartStore } from "../../store/CartStore";
import { useEffect } from "react";

export const useProductList =()=>{
    const { data:products, isLoading, isError } = useQuery({
        queryKey: ['products'],
        queryFn: getAllProductsAPI
    });

    const setProductsList = CartStore((state) => state.setProductsList);

    useEffect(() => {
        if(!isLoading && !isError){
            setProductsList(products);
        }
    }, [products, setProductsList]);

    return { products, isLoading, isError }
}