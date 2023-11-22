import { Product, User } from "@/types/types";
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
};

export const signInFetch =async (userDB : User) => {
  try {
    const {data} = await axios.post(`http://localhost:3001/users`, userDB);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  };
};

export const logInFetch = async (userDB : User) => {
  try {
    const {data} = await axios.get(`http://localhost:3001/users`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  };
};