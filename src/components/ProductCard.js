import React from "react";
import { BiListPlus, BiTrash } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addToCart, removeFromCart } from '../redux/actionCreators/productActions';
// import { ADD_TO_CART } from './../redux/actionTypes/actionTypes';

const ProductCard = ({ product }) => {


  const dispatch = useDispatch();

  const { pathname } = useLocation();

  return (
    <div className='shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900 relative'>
      <div className='h-52 w-52 mx-auto'>
        <img src={ product.image } alt={ product.model } />
      </div>
      <h1 className='font-bold text-center'>{ product.model }</h1>
      <p className='text-center font-semibold mb-3'>Rating: { product.rating }</p>
      <div className='absolute'>
        { pathname.includes("cart") && (<button className='text-white text-bold px-5 bg-gray-400 py-1 rounded-full'
        >Total: { product.quantity }
        </button>
        ) }
      </div>

      <div className=' flex-1'>
        <ul className='space-y-2'>
          { product.keyFeature.map((feature, idx) => {
            return <li key={ idx } className='text-sm '>{ feature }</li>;
          }) }
        </ul>
      </div>

      <div className='flex gap-2 mt-5'>
        {
          pathname.includes("cart") && (
            <button
              className='bg-red-500 rounded-full w-full flex justify-center items-center gap-1 py-2 px-2 text-white text-bold'
              onClick={ () => dispatch(removeFromCart(product)) }>
              <BiTrash />
              <span>Remove</span>
            </button>

          )
        }
        {
          !pathname.includes("cart") && (
            <>
              <button className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'
                onClick={ () => dispatch(addToCart(product)) }
              >
                Add to cart
              </button>
              <button
                title='Add to wishlist'
                className='bg-indigo-500  py-1 px-2 rounded-full'
              >
                <BiListPlus className='text-white' />
              </button>
            </>
          )
        }
      </div>
    </div>
  );
};

export default ProductCard;
