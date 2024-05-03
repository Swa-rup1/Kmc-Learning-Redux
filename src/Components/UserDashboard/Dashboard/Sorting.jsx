import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchsort } from "../../../Services/AllProduct";
import { Select, Skeleton } from "antd";
import ReusableComponent from "./ReusableComponent";
import { HotProduct } from "../utils/Array";

const Sorting = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state?.sort);
  console.log("sort", data);

  React.useEffect(() => {
    dispatch(fetchsort());
  }, [dispatch]);

  const options = [
    {
      value: "aesc",

      desc: "xyz",
    },

    {
      value: "desc",

      desc: "xyz",
    },
  ];

  const handleChange = (value, option) => {
    console.log("fff", value, option);
    dispatch(fetchsort(value));
  };

  return (
    <>
      <div>Sorting</div>

      <div>
        <Select
          style={{
            width: "100%",
          }}
          placeholder="sorting"
          onSelect={handleChange}
          options={options}
          allowClear={true}
        />
      </div>

      <div className=" grid w-full gap-y-2 m-1 ">
        <Skeleton loading={loading}>
          <ReusableComponent title={"Hot Product"} data ={data.data}  />
        </Skeleton>
      </div>
    </>
  );
};

export default Sorting;
