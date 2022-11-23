import React, { useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { GlobalContext } from "../GlobalContext/GlobalContext";

const ProductDetails = () => {
  const params = useParams();
  const productid = params.productid;
  // console.log(productid);

  const { cart, addToCart, updateCart } = useContext(GlobalContext);

  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios({
      url: `http://localhost:5000/api/items/get_item/${productid}`,
      method: "get",
    })
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [productid]);

  const addToCartHandler = () => {
    const newItem = {
      id: product._id,
      name: product.name,
      price: +product.price,
      image: product.image,
      quantity: 1,
    };

    const findItem = cart.find((item) => item.id === product._id);

    if (findItem) {
      //console.log("exist");
      updateCart(product._id);
      // console.log(cart);
      return;
    }

    addToCart(newItem);

    //console.log(cart);
    //console.log(newItem);
  };

  return (
    <div className="w-full h-100 mt-5 flex justify-center ">
      <div className="w-[80%] mt-[90px] grid gap-4 grid-cols-2">
        <div>
          <img src={product.image} className="w-full" />
        </div>
        <div className="grid gap-4">
          <div>
            <h2 className="hover:text-orange-400">[ {product.name} ]</h2>
            <h3 className="my-2">${product.price}</h3>
            <p className="hover:text-orange-400">{product.description}</p>
          </div>

          <div>
            <button
              onClick={addToCartHandler}
              className="w-full self-end block py-2 px-5 bg-orange-400 text-white rounded hover:bg-transparent hover:text-orange-400"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
