import { Button, IconButton } from "@mui/material";
import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex item-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://m.media-amazon.com/images/I/71vmHXYFrsL._SX466_.jpg"
            alt=""
          />
        </div>

        <div className="ml-5 space-y-1">
          <p className="font-semibold">Mens Slim Mid Blue Jins</p>
          <p className="opacity-70 ">Size: L,White</p>
          <p className="opacity-70 mt-2 ">Seller: Dhatingan Shop</p>
          <div className="flex space-x-5 items-center tracking-tight text-gray-900 pt-6 ">
            <p className="font-semibold">₹299</p>
            <p className="opacity-50 line-through">₹399</p>
            <p className="text-green-600 font-semibold">10% Off</p>
          </div>
        </div>
      </div>

      <div className="lg:flex items-center  lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">1</span>
          <IconButton sx={{ color: "Rgb(145 85 253)" }}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <Button sx={{ color: "Rgb(145 85 253)" }}>Remove</Button>
      </div>
    </div>
  );
};

export default CartItem;
