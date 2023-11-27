"use server"

import { CartType, Product, User } from "@/types/types";
import axios from "axios";

export const getProducts = async () => {
  try {
    const {data} = await axios.get('https://fakestoreapi.com/products');
    return data;
  } catch (err) {
    throw new Error('Ошибка при получении данных');
  };
};

export const getSingleProduct = async (id: number) => {
  try {
    const {data}: { data: Product | undefined } = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return data;
  } catch (err) {
    throw new Error('Ошибка при получении данных');
  };
};

export const getProductsInSpecificCategory = async (category : string) => {
  try {
    const {data}: { data: Product | undefined } = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
    return data;
  } catch (err) {
    throw new Error('Ошибка при получении данных');
  };
};

export const getCategories = async () => {
  try {
    const {data}: { data: string[] | undefined } = await axios.get(`https://fakestoreapi.com/products/categories`);
    return data;
  } catch (err) {
    throw new Error('Ошибка при получении данных');
  };
};

export const signInFetch = async (userDB : User) => {
  try {
    const {data} : { data: User } = await axios.post(`http://localhost:3001/users`, userDB);
    return data;
  } catch (error) {
    throw new Error('Ошибка при получении данных');
  };
};

export const logInFetch = async (userLogIn: { username: string; password: string; }) => {
  try {
    const { username, password } = userLogIn;
    const {data} = await axios.get(`https://fakestoreapi.com/users`);
    const filteredData = data.filter((user : User) => {
      return user.username === username && user.password === password;
    })
    return filteredData;
  } catch (error) {
    throw new Error('Ошибка при получении данных');
  };
};

export const getUsers = async () => {
  try {
    const {data} = await axios.get('https://fakestoreapi.com/users');
    return data;
  } catch (err) {
    throw new Error('Ошибка при получении данных');
  };
};

export const getProductsBySearch =async (search: string) => {
  try {
    const {data}: { data: Product[] } = await axios.get(`https://fakestoreapi.com/products?q=${search}`);
    const filteredData = data.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()));
    return filteredData;
  } catch (err) {
    throw new Error('Ошибка при получении данных');
  };
};

export const getSingleCart = async (id: number) => {
  try {
    const {data}: { data: CartType[] } = await axios.get(`https://fakestoreapi.com/carts/user/${id}`);
    return data[0];
  } catch (err) {
    throw new Error('Ошибка при получении данных');
  };
};

export const getProductsInCart = async (productIds : number[] | undefined,) => {
  try {
    const {data}: { data: Product[] } = await axios.get(`https://fakestoreapi.com/products`);
    const filteredData = data.filter(product => productIds?.includes(product.id));
    return filteredData;
  } catch (err) {
    throw new Error('Ошибка при получении данных');
  };
}