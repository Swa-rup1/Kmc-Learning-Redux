import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchonsearchProduct } from "../../../Services/AllProduct";

const SearchProduct = () => {
  const param = useParams();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.searchProduct);
  console.log("GG", data.users.data);

  React.useEffect(() => {
    dispatch(fetchonsearchProduct({ id: param?.id }));
  }, [dispatch, param?.id]);

  console.log("GG", searchdata);

  return (
    <>
      <div>seaaaa</div>
      <div>ssww</div>
    </>
  );
};

export default SearchProduct;
