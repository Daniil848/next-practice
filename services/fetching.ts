import { Product } from "@/types/types";
import axios from "axios";

export const getProducts = async () => {
  try {
    const {data} = await axios.get('http://127.0.0.1:3001/products');
    return data;
  } catch (err) {
    console.log(err);
  };
};

export const getSingleProduct = async (id: number) => {
  try {
    const {data}: { data: Product | undefined } = await axios.get(`http://127.0.0.1:3001/products/${id}`);
    return data;
  } catch (err) {
    console.log(err);
  };
};

export const getProductsInSpecificCategory = async (category : string) => {
  try {
    const {data}: { data: Product | undefined } = await axios.get(`http://127.0.0.1:3001/products?category=${category}`);
    return data;
  } catch (err) {
    console.log(err);
  };
};

export const getCategories = async () => {
  try {
    const {data}: { data: string[] | undefined } = await axios.get(`http://127.0.0.1:3001/categories`);
    return data;
  } catch (err) {
    console.log(err);
  };
}