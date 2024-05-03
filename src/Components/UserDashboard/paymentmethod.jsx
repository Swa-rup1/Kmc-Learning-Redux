import React from "react";
import { Table } from "antd";
import { PaymentApp, paymentMethods } from "./utils/Array";
import { useSelector } from "react-redux";

import { Esewa } from "../UserDashboard/payment/Esewa.jsx";
import KhaltiCheckout from "khalti-checkout-web";
import { Khalti } from "./payment/Khalti.jsx";

const Paymentmethod = () => {
  const carditem = useSelector((state) => state);
  // console.log("carditem", carditem);
  const [orderdata, setOrderData] = React.useState([]);
  // console.log("orderdata", orderdata);
  React.useEffect(() => {
    setOrderData(carditem?.addtocard?.data);
  }, [carditem?.addtocard?.data]);
  const total = orderdata.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price * currentItem.qty;
  }, 0);
  const addtoqty = orderdata.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.qty;
  }, 0);

  const columns = [
    {
      title: "Name",
      dataIndex: "Name",
      key: "Name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Qty",
      dataIndex: "qty",
      key: "qty",
    },
  ];

  const path = "https://uat.esewa.com.np/epay/main";
  const params = {
    amt: 100,
    psc: 0,
    pdc: 0,
    txAmt: 0,
    tAmt: 100,
    pid: "fasfjhdsajflfhaal",
    scd: "EPAYTEST",
    su: "http://merchant.com.np/page/esewa_payment_success",
    fu: "http://merchant.com.np/page/esewa_payment_failed",
  };

  const [isPayment, setPayment] = React.useState({
    eSewa: false,
    khalti: false,
  });

  // Khalti Integration



  const handelpayment = (id) => {
    console.log("esewa", id);
    if (id === 1) {
      setPayment({
        eSewa: true,
        khalti: false,
      });
    } else if (id === 2) {
      const checkout = new KhaltiCheckout(Khalti);
      checkout.show({ amount: total });
    }
  };
  // console.log("isPayment", isPayment);

  return (
    <div>
      Payment method
      <div>
        <Table dataSource={carditem?.addtocard?.data} columns={columns} />
      </div>
      <div className="flex justify-center gap-2">
        <div>Total amount is:{total}</div>
        <div>Total number of qty:{addtoqty}</div>
      </div>
      <div className="flex justify-end gap-2">
        {paymentMethods?.map((item) => (
          <div
            key={item.image}
            style={{ color: item.color }}
            className="flex justify-end"
            onClick={() => handelpayment(item.id)}
          >
            {<img alt="example" src={item.image} className="w-15 h-10" />}
          </div>
        ))}
      </div>
      {isPayment?.eSewa && <Esewa path={path} params={params} />}
    </div>
  );
};

export default Paymentmethod;
