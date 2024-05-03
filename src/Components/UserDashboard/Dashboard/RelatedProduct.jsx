import React from "react";
import { Avatar, Card } from "antd";

const RelatedProduct = ({ title, data }) => {
  return (
    <>
      <h1 className=" text-red-600 font-madimi text-2xl my-3">{title}</h1>
      <div className=" py-1 font-varela grid lg:grid-cols-4 md:grid-cols-2 gap-2 px-8">
        {data?.map((item) => {
          return (
            <div key={item.id} className="my-3">
              <Card
                hoverable
                className=" max-w-72 mx-auto bg-gray-300
              font-varela border-none"
              >
                <div className=" text-center">
                  <Avatar
                    src={item.image}
                    alt="img"
                    className=" w-24 h-24 mx-auto mb-6"
                  />
                  <h1 className=" text-red-600 text-lg  py-2">{item.name}</h1>
                  <h2 className=" font-bold min-h-14">{item.description}</h2>
                </div>
                <button
                  className=" bg-black text-white w-full rounded-sm py-1.5
              flex items-center justify-center"
                >
                  Add to Cart
                </button>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RelatedProduct;
