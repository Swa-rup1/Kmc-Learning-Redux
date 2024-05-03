import React from "react";
import { Card } from "antd";
import { Avatar } from "antd";

const MostRecentProduct = ({ title, data }) => {
  return (
    <>
      <div className=" font-extrabold text-base text-[#44aca6] m-2">
        {title}
      </div>

      <div className="  grid  md:grid-cols-12 grid-flow-row gap-4 ">
        {data?.map((product) => (
          <div key={product.Id} className=" md:col-span-3">
            <Card className=" hh" hoverable>
              <div className="grid  ">
                {/* Brand-Image */}

                <div className="CompanyTitle  flex  justify-center gap-4 m-2">
                  <div>
                    <Avatar
                      className=" h-[250px] w-[250px] object-cover "
                      src={product.Img}
                      alt={product.ProductName}
                      size={{
                        xs: 80,
                        sm: 100,
                        md: 120,
                        lg: 140,
                        xl: 160,
                        xxl: 200,
                      }}
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

                <button className=" bg-red-600 text-white ">Add to Cart</button>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default MostRecentProduct;
