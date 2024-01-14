import React from "react";
import { Avatar, Box, Grid, Rating} from "@mui/material";

const ProductReviewCard = () => {
  return (
    <div className="">
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white "
              sx={{  width: 59, height: 56, bgcolor: "#9155FD" }}
            >YD</Avatar>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-2">
            <div className="">
              <p className="font-semibold text-lg">Abhijit</p>
              <p className="opacity-70">April 5, 2023</p>
            </div>
            </div>
              <Rating
                value={4.5}
                name="half-rating"
                defaultValue={2.5}
                precision={0.5}
                readOnly
              />
            <p>
              Nice product, I like this shirt
            </p>
        </Grid>
      </Grid>
    </div>
  )
}

export default ProductReviewCard;
