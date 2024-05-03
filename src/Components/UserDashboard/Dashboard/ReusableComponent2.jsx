import React from "react";
import { Card } from "antd";

const ReusableComponent2 = ({ title, data }) => {
  return (
    <>
      <div className=" font-extrabold text-base text-[#44aca6] m-2">
        {title}
      </div>

      <div className=" gap-4  grid  md:grid-cols-12 grid-flow-row ">
        {data?.map((product) => (
          <div key={product.Id} className=" md:col-span-3">
            <Card className=" hh" hoverable>
              <div className="grid ">
                <div className="CompanyTitle  flex justify-start gap-4 m-2">
                  {/* Company Logo */}
                  <div>
                    <img
                      src={product.logo}
                      alt={product.Company}
                      className=" h-[100px] w-[100px] object-cover"
                    />
                  </div>

                  {/* Company Name */}
                  <div className="text-sm  font-bold text-[black]  ">
                    <p className="  font-normal">{product.Company}</p>
                  </div>
                </div>

                <div className="Description text-base font-bold">
                  <div>
                    <h1>{product.Vacancy}</h1>
                  </div>
                  <div>
                    <p>Required : {product.ReqNo}</p>
                  </div>
                  <div>
                    <p>
                      {" "}
                      What will you do ? <br />
                      {product.Description}
                    </p>
                  </div>
                </div>

                <button className=" bg-red-600 text-white ">Apply Now</button>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default ReusableComponent2;
