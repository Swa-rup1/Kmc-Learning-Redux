import React from "react";
import Slider from "react-slick";

const SimpleSlider = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="slider-container  m-2 mb-9  ">
      <Slider {...settings}>
        {data?.map((product, index) => (
          <div key={index} className="opacity-60 ">
            {/* Back-IMG */}
            <div
              className="flex justify-center relative "
              style={{
                backgroundImage: `url('${product.Img}')`,
                backgroundSize: "100% auto",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                minHeight: "250px",
                maxHeight: "500px",
              }}
            >
              <img
                src={product.Img}
                alt=""
                className="absolute inset-0 w-full h-full object-cover "
                style={{
                  maxWidth: "50%",
                  margin: "auto",
                }}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
