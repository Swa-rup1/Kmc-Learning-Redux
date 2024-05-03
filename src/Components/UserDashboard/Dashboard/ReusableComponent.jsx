import React from "react";
import { Card, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../ContextApi";
import { updateCard } from "../../../Redux/Slices/Addtocart";
import { useDispatch, useSelector } from "react-redux";

const ReusableComponent = ({ title, data }) => {
  const { appState, updateState } = useAppContext();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cardItem = useSelector((state) => state);
  // console.log("cardData1", cardItem);

  const HandleDetail = (item) => {
    updateState({
      ...appState,
      data: item,
    });

    navigate("/detail");
  };

  const addtocart = (item) => {
    // item.qty = 1;

    dispatch(updateCard([...new Set([...cardItem?.addtocard.data, item])]));
  };

  // console.log("addtocart", appState);

  return (
    <>
      <div className=" font-extrabold text-base text-[#44aca6] m-2">
        {title}
      </div>

      <div className=" grid  md:grid-cols-12 grid-flow-row gap-4">
        {data?.map((item) => (
          <div key={item.id} className=" md:col-span-3">
            <Card
              key={item.id}
              hoverable
              cover={
                <img
                  src={item.Image}
                  alt={item.Name}
                  className="object-cover"
                  style={{ height: "200px" }}
                />
              }
            >
              <div className="grid" onClick={() => HandleDetail(item)}>
                <div>
                  <h2>{item.Name}</h2>
                </div>
                <div>
                  <p>Description: {item.Description}</p>
                </div>
                <div>
                  <p>price: {item.price}</p>
                </div>
                <div>
                  <p>Brand: {item.Brand}</p>
                </div>
              </div>

              {/* Add to Card */}
              <Button onClick={() => addtocart(item)}>Add to Cart</Button>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default ReusableComponent;
