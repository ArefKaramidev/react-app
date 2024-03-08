import { useState } from "react";
import Apple from "../functional/Apple_delivers-apple-watch-series-6_09152020_big.jpg.large.jpg";
const Product = () => {
  const [price, setState] = useState(299);
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>ahgff</h1>
      <div className=" bg-gray-700 py-14 px-8 inline-block ml-4 rounded-lg ">
        <div>
          <div className=" flex-col justify-center align-item-center text-left">
            <img src={Apple} alt="" className="rounded-md py-1 w-96 h-96" />

            <span className="text-white">productName</span>
        
            <div>
              <p className="text-white py-2">price : {price}$</p>
              <div className="flex justify-between align-items-center text-white w-24 h-9 bg-slate-500 rounded-lg mb-2.5">
                <button
                  onClick={() => {
                    countMiness(count, setCount, price, setState);
                  }}
                  className="bg-slate-600 h-[100%] px-2.5 rounded-tl-lg rounded-bl-lg"
                >
                  -
                </button>
                <span>{count}</span>
                <button
                  onClick={() => {
                    countPlus(count, setCount, price, setState);
                  }}
                  className="bg-slate-600 h-[100%] px-2.5 rounded-tr-lg rounded-br-lg"
                >
                  +
                </button>
              </div>
            </div>
            <button className=" bg-gray-500 text-white w-64 py-1 rounded-xl absolute">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

function countMiness(count, setCount, price, setState) {
  setCount((count -= 1));
  setState((price -= 299));
}

function countPlus(count, setCount, price, setState) {
  setCount(count + 1);
  setState((price += 299));
}

export default Product;
