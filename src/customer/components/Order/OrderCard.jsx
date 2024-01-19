import { Grid } from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";
import React from "react";
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
  const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className="p-5 shadow-lg hover:shadow-2xl border ">
      <Grid spacing={2} container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div
            // onClick={() => navigate(`/account/order/${order?._id}`)}
            className="flex cursor-pointer"
          >
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://m.media-amazon.com/images/I/51Clvs6gtYL._AC_UL480_FMwebp_QL65_.jpg"
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p className="opacity-50 text-xs font-semibold ">
                Men slim rise blask jeans
              </p>
              <p className="opacity-50 text-xs font-semibold ">Size: M</p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>₹2900</p>
        </Grid>

        <Grid item xs={4}>
          {true &&
            <div>
              <p>
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 p-0 mr-2 text-sm"
                />
                <span>Delivered On Mar 03</span>

                <p />

                <p className="text-xs">Your Item Has Been Delivered</p>
              </p>
            </div>
          }
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
