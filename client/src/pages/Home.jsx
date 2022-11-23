import React, { useEffect, useState } from "react";
import img1 from "../assets/1.jpg";
import axios from "axios";
import { Link } from "react-router-dom";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import { useContext } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);
  const { cart, addToCart, updateCart } = useContext(GlobalContext);
  useEffect(() => {
    axios({
      url: "http://localhost:5000/api/items/all_items",
      method: "get",
    })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // console.log(products);

  const addToCartHandler = (event) => {
    event.preventDefault();
    let id = event.target.id;

    const name = document.getElementById("hiddenname" + id).value;
    const price = document.getElementById("hiddenprice" + id).value;
    const image = document.getElementById("hiddenimage" + id).value;

    const newItem = {
      id,
      name,
      price: +price,
      image,
      quantity: 1,
    };

    const findItem = cart.find((item) => item.id === id);

    if (findItem) {
      // console.log("exist");
      updateCart(id);
      // console.log(cart);
      return;
    }

    addToCart(newItem);
    //  console.log(cart);
  };

  return (
    <div className="w-full">
      <div className="">
        <img src={img1} className="h-[350px] w-full" />
      </div>

      <div className="w-full flex justify-center mt-5 mb-4">
        <div className="grid gap-4 grid-cols-3 w-[80%]">
          {products.map((product) => {
            return (
              <div className="shadow" key={product._id}>
                <img src={product.image} className="h-[250px] w-full " />

                <div className="w-[95%] flex justify-between   my-3">
                  <div className="mx-2">
                    <h3>{product.name}</h3>
                    <h4>${product.price}</h4>
                    <input
                      type="hidden"
                      value={product.name}
                      id={`hiddenname${product._id}`}
                    />
                    <input
                      type="hidden"
                      value={product.price}
                      id={`hiddenprice${product._id}`}
                    />
                    <input
                      type="hidden"
                      value={product.image}
                      id={`hiddenimage${product._id}`}
                    />
                  </div>
                  <div>
                    <button
                      id={product._id}
                      onClick={addToCartHandler}
                      className=" block py-2 px-5 bg-orange-400 text-white rounded hover:bg-transparent hover:text-orange-400"
                    >
                      Add To Cart
                    </button>
                    <Link to={`productdetails/${product._id}`}>
                      <button className="py-2 px-5 my-2  hover:text-blue-400 rounded bg-transparent text-orange-400">
                        details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
