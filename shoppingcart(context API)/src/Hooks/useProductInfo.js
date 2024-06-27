import { useEffect,useState } from "react";


const useProductInfo = () => {
    const [productInfo, setProductInfo] = useState()
    const fetchData = async () => {
        let responce = await fetch(`https://fakestoreapi.com/products`);
        const convertedJson = await responce.json();
        setProductInfo(convertedJson);
        console.log(convertedJson);
    }
    
    fetchData();

    return productInfo;
}

export default useProductInfo