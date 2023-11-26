import { Metadata } from "next";
import { cookies } from 'next/headers';
import { getSingleCart } from "@/services/fetching";
import { CartType , Product } from "@/types/types";

export const metadata: Metadata = {
  title: 'Cart',
  description: 'Cart page',
};

const Cart = async () => {
 
  const cookie = cookies().get('userID');
  const id = Number(cookie?.value)
  console.log(id);

  const cart = await getSingleCart(id);

  return (
    <>
      <div>
        {cart?.products.map((cartItem : Product)=> (
          <div></div>
        ))}
      </div>
    </>
  );
};

export default Cart;