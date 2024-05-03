import React from "react";
import { Card } from "antd";
import { Avatar } from "antd";
import Slider from "react-slick";

const RecentProductCarousel = ({ title, data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <>
      <div className=" font-extrabold text-base text-[#44aca6] m-2">
        {title}
      </div>

      <div className="slider-container">
        <Slider {...settings}>
          {data?.map((product) => (
            <div key={product.Id} className=" ">
              <Card className=" " hoverable>
                <div className="  ">
                  {/* Brand-Image */}

                  <div className="CompanyTitle ">
                    <div>
                      <Avatar
                        className=" h-[250px] w-[250px] object-cover "
                        src={product.Img}
                        alt={product.ProductName}
                      />
                    </div>
                  </div>

                  {/* Most Recent Product Description */}

                  <div className="Description text-base font-bold">
                    <div>
                      <h1>{product.ProductName}</h1>
                    </div>

                    <div>
                      <p className=" font-normal">
                        <br />
                        {product.Description}
                      </p>
                    </div>
                  </div>

                  <button className=" bg-red-600 text-white ">
                    Add to Cart
                  </button>
                </div>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default RecentProductCarousel;
