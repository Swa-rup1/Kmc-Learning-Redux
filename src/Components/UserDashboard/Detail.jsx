import React from "react";
import Slider from "react-slick";
import { useAppContext } from "./ContextApi";
import { Button, Rate } from "antd";
import TextArea from "antd/es/input/TextArea";
import RelatedProduct from "../UserDashboard/Dashboard/RelatedProduct";

// From Reusable Compant.jsx
const Detail = () => {
  const { appState } = useAppContext();
  console.log("AppState", appState);

  const settings = {
    customPaging: function (i) {
      return (
        <a href="">
          <img src="{appState?.data?.Image}" alt="" />
        </a>
      );
    },

    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: null,
    prevArrow: null,
  };
  return (
    <>
      <div className="slider-container grid md:grid-cols-12 grid-flow-row">
        <div className="md:col-span-6 md:ml-[10rem]">
          <div className="sm:w-1/2 md:w-[500px] max-h-32 h-40 bg-black">
            <Slider {...settings}>
              <div>
                <img
                  src="{appState?.data?.Image}"
                  className="h-34 w-full"
                  alt=""
                  srcSet=""
                />
              </div>
              <div>
                <img
                  src="{appState?.data?.Image}"
                  className="h-34 w-full"
                  alt=""
                  srcSet=""
                />
              </div>
            </Slider>
          </div>
        </div>
        <div className="md:col-span-6 grid gap-2">
          <div>{appState?.data?.Name}</div>

          <div>Price: {appState?.data?.Price}</div>

          <div>Discount: {appState?.data?.Discount}</div>

          <div>{appState?.data?.Brand}</div>

          <div>{appState?.data?.Description}</div>

          <div>
            <Rate
              allowHalf
              value={appState?.data?.rating}
              className=" text-[red]"
            />
          </div>

          <div>
            <TextArea
              rows={4}
              placeholder="maxlength is 6"
              maxLength={6}
              value={appState?.data?.comment}
            />
          </div>

          <div>
            <Button className=" bg-slate-700 text-[#FFFFFF] w-[50%]">
              Buy Now
            </Button>
          </div>
        </div>
      </div>

      <div className="px-5 text-center gap-x-3">
        <RelatedProduct
          title={"Related Products"}
          data={appState.data.relatedProducts}
        />
      </div>
    </>
  );
};

export default Detail;
