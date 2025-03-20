import { Grid } from "@mui/material";
import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
const RestaurantDetails = () => {
  return (
    <div className="px-5 lg:px-20">
      <section className="">
        <h3 className="text-gray-500 py-2 mt-10">
          Home/sri-lanka/sl fast food
        </h3>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784_1280.jpg"
                alt=""
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://cdn.pixabay.com/photo/2015/07/08/12/35/interior-design-836320_960_720.jpg"
                alt=""
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://cdn.pixabay.com/photo/2016/11/21/16/02/outdoor-dining-1846137_1280.jpg"
                alt=""
              />
            </Grid>
          </Grid>
        </div>

        <div className="pt-3 pb-5">
            <h1 className="text-4xl font-semibold">
                Sri lankan fast food
            </h1>
            <p className="text-gray-500 flex items-center gap-3">
                <LocationOnIcon/>
                <span>this is the best food serving restaurent in sri lanka</span>
            </p>
            <p className="text-gray-500 flex items-center gap-3">
                <CalendarTodayIcon/>
                <span>Mon-Sun 9.00 am -9.00 pm ( Today )</span>
            </p>
        </div>
      </section>
    </div>
  );
};

export default RestaurantDetails;
