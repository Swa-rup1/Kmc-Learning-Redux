import React from "react";

import {
  DeleteOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateCard } from "../../Redux/Slices/Addtocart";

const Order = () => {
  const [orderdata, setOrderData] = React.useState([]);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const cardItem = useSelector((state) => state);

  const handelAdd = (id) => {
    const addtoQTY = orderdata?.map((item) => {
      if (id === item.id) {
        return {
          ...item,
          qty: item.qty + 1,
        };
      } else {
        return { ...item };
      }
    });
    // console.log("item", item.id);

    dispatch(updateCard(addtoQTY));
  };

  const handelminus = (id, QTY) => {
    if (QTY > 1) {
      const minusQTY = orderdata.map((item) => {
        if (id === item.id) {
          return {
            ...item,
            qty: item.qty - 1,
          };
        } else {
          return { ...item };
        }
      });

      updateState({
        ...appState,
        addtocart: minusQTY,
      });
    }
  };

  const handeldelete = (id) => {
    dispatch(
      updateCard(cardItem?.addtocard?.data?.filter((item) => item.id !== id))
    );
  };

  React.useEffect(() => {
    setOrderData(cardItem?.addtocard?.data);
  }, [cardItem?.addtocard?.data]);

  const total = orderdata.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price * currentItem.qty;
  }, 0);

  return (
    <div>
      <div>
        {orderdata.map((item) => (
          <div
            key={item.id}
            className="flex justify-start gap-3 items-center py-2"
          >
            <div>
              <img
                src={item.Image}
                alt={item.Name}
                className="object-cover w-[60px] h-auto"
              />
            </div>
            <div>
              <div>{item.Name}</div>
              <div>price: {item.price}</div>
              <div>QTY :{item.qty}</div>
            </div>
            <div>
              <PlusOutlined onClick={() => handelAdd(item.id)} />
            </div>
            <div>
              <DeleteOutlined onClick={() => handeldelete(item.id)} />
            </div>
            <div>
              <MinusCircleOutlined
                onClick={() => handelminus(item.id, item.QTY)}
              />
            </div>
          </div>
        ))}
      </div>

      <div>
        <div> Total Amount : {total}</div>
      </div>

      <div>
        <button
          className=" border-spacing-1 border-collapse bg-green-600 p-3 font-bold  items-center"
          onClick={() => Navigate("/payment")}
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Order;
