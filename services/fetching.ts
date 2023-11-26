import { Product, User } from "@/types/types";
import axios from "axios";

export const getProducts = async () => {
  try {
    const {data} = await axios.get('https://fakestoreapi.com/products');
    return data;
  } catch (err) {
    console.log(err);
  };
};

export const getSingleProduct = async (id: number) => {
  try {
    const {data}: { data: Product | undefined } = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return data;
  } catch (err) {
    console.log(err);
  };
};

export const getProductsInSpecificCategory = async (category : string) => {
  try {
    const {data}: { data: Product | undefined } = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
    return data;
  } catch (err) {
    console.log(err);
  };
};

export const getCategories = async () => {
  try {
    const {data}: { data: string[] | undefined } = await axios.get(`https://fakestoreapi.com/products/categories`);
    return data;
  } catch (err) {
    console.log(err);
  };
};

export const signInFetch = async (userDB : User) => {
  try {
    const {data} : { data: User } = await axios.post(`http://localhost:3001/users`, userDB);
    return data;
  } catch (error) {
    console.log(error);
  };
};

export const logInFetch = async (userLogIn: { username: string; password: string; }) => {
  try {
    const { username, password } = userLogIn;
    const {data} = await axios.post(`https://fakestoreapi.com/users?username=${username}&password=${password}`);
    console.log("fetch",data);
    return data;
  } catch (error) {
    console.log(error);
  };
};

export const getUsers = async () => {
  try {
    const {data} = await axios.get('https://fakestoreapi.com/users');
    return data;
  } catch (err) {
    console.log(err);
  };
};

export const getProductsBySearch =async (search: string) => {
  try {
    const {data}: { data: Product[] } = await axios.get(`https://fakestoreapi.com/products?q=${search}`);
    const filteredData = data.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()));
    console.log(filteredData);
    
    return filteredData;
  } catch (err) {
    console.log(err);
  };
}