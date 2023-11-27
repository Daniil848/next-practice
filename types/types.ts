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
  id: number,
  email: string,
  username:string,
  password:string,
  name:{
    firstname:string,
    lastname:string,
  },
  address:{
    city:string,
    street:string,
    number:number,
    zipcode:string,
    geolocation:{
      lat:string,
      long:string,
    },
  },
  phone: string,
};

export type CartType = {
  id: number,
  userId: number,
  date: string,
  products: [
    productId : any,
    quantity: any,
  ],
}