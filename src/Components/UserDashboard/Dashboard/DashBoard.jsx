import React from "react";
import { HandMade, HotProduct } from "../utils/Array";
import Carousel from "./Carousel";

import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../Services/AllProduct";
import { fetchCarousal } from "../../../Services/AllProduct";
import ReusableComponent from "./ReusableComponent";
import MostRecentProduct from "./MostRecentProduct";
import ReusableComponentSecond from "./ReusableComponent2";
import RecentProductCarousel from "./RecentProductCarousel";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.allproduct);
  const { data } = useSelector((state) => state.carousalslice);

  React.useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(fetchCarousal());
  }, [dispatch]);

  return (
    <div>
      <Carousel title={"Trending"} data={data.data} />
      <RecentProductCarousel title={"New Arrival"} data={HandMade} />
      {products.data && (
        <ReusableComponent
          title={"Hot Products"}
          data={products.data.map((item) => ({
            ...item,
            qty: 1,
          }))}
        />
      )}
      <ReusableComponent title={"HandMade"} data={HandMade} />
      <ReusableComponentSecond title={"Trending"} data={HotProduct} />
      <MostRecentProduct title={"Hot products"} data={HotProduct} />
    </div>
  );
};

export default Dashboard;
