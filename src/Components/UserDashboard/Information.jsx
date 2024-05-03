import React from "react";

import ReusableComponent from "./Dashboard/ReusableComponent";
import ReusableComponent2 from "./Dashboard/ReusableComponent2";
import MostRecentProduct from "./Dashboard/MostRecentProduct";
import {
  HandMade,
  HotProduct,
  JobDetail,
  RecentProduct,
} from "../UserDashboard/utils/Array";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from "./Dashboard/SimpleSlider";
import RecentProductCarousel from "./Dashboard/RecentProductCarousel";

const Information = () => {
  return (
    <>
      <SimpleSlider data={RecentProduct}></SimpleSlider>

      <div className=" grid w-full gap-y-2 m-1 ">
        <ReusableComponent title={"Hot Product"} data={HotProduct} />

        <ReusableComponent title={"Hand Made"} data={HandMade} />
      </div>

      <RecentProductCarousel
        title={"Popular Demand Product "}
        data={RecentProduct}
      ></RecentProductCarousel>

      <div className=" grid w-full gap-y-2">
        <ReusableComponent2 title={"Job Detail"} data={JobDetail} />
      </div>

      <MostRecentProduct
        title={"Most Recent Product "}
        data={RecentProduct}
      ></MostRecentProduct>
    </>
  );
};

export default Information;
