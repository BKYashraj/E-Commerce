import React from "react";
import CardItem from './CartItem';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


const Cart = () => {
  const navigate = useNavigate();
  const HandleClick=()=>{
    navigate("/checkout?step=2")
  }
  return (
    <div className="lg:grid grid-cols-3 lg:px-16 relative">
      <div className="lg:col-span-2 lg:px-5 bg-white">
        <div className=" space-y-3">
          {[1,1,1,1].map((item=><CardItem />))}
        </div>
      </div>

      <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">
        <div className="border p-5 bg-white shadow-lg rounded-md">
          <p className="uppercase font-bold opacity-60 pb-4">PRICE DETAILS</p>
          <hr />

          <div className="space-y-3 font-semibold mb-10">
            <div className="flex justify-between pt-3 text-black ">
              <span>Price</span>
              <span>₹5500</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span className="text-green-700">-₹1500</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Charges</span>
              <span className="text-green-700">Free</span>
            </div>
            <hr />
            <div className="flex justify-between font-bold text-lg">
              <span>Total Amount</span>
              <span className="text-green-700">₹4000</span>
            </div>
          </div>

          <Button
            onClick={HandleClick}
            variant="contained"
            type="submit"
            className="w-full"
            sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#9155fd " }}
          >
            Check Out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
