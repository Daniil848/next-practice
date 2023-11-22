export type Product = {
  id : number,
  title: string,
  price: number,
  description: string,
  image: string,
  category: string | null,
  rating : {
    rate : number,
    count : number,
  },
};

export type User = {
  id : number,
  email : string | number,
  username : string | number,
  password : string | number,
};