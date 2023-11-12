
// import { FC, useEffect, useState } from 'react';
// import { Link, Navigate, useParams } from 'react-router-dom';
// import Product from '../../features/products/types/Product';
// import { useAppSelector } from '../../app/hooks';
// import MyButton from '../myButtom/MyButton';

// import styles from './ProductItem.module.css';

// const ProductItem: FC = () => {
//   const { id } = useParams();

//   const initialValue: Product = {
//     id: 0,
//     title: '',
//     description: '',
//     price: 0,
//     brand: '',
//     category: '',
//     image: '',
//   };

//   const [product, setProduct] = useState<Product>(initialValue);

//   async function loadProduct(): Promise<void> {
//     const res = await fetch(`https://dummyjson.com/products/${id}`);
//     const data = await res.json();
//     setProduct(data);
//   }

//   useEffect(() => {
//     loadProduct();
//   }, []);

//   const { user } = useAppSelector((state) => state.auth);

//   if (!user) {
//     return <Navigate to="/" />;
//   }

//   return (
//     <div className={styles.productItemContainer}>
//       <h1>{product.title}</h1>
//       <img className={styles.productImage} src={product.thumbnail} alt="" />
//       <p>{product.description}</p>
//       <Link to="../products">
//         <MyButton text="Back to products" />
//       </Link>
//     </div>
//   );
// };

// export default ProductItem;


import { FC, useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Product from '../../features/products/types/Product';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import MyButton from '../myButtom/MyButton';

import styles from './ProductItem.module.css';
import { addToCart } from '../../features/productKorb/cartSlice';

const ProductItem: FC = () => {
  const { id } = useParams();

  const initialValue: Product = {
    id: 0,
    title: '',
    description: '',
    price: 0,
    brand: '',
    category: '',
    image: '',
  };

  const [product, setProduct] = useState<Product>(initialValue);

  async function loadProduct(): Promise<void> {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();
    setProduct(data);
  }

  useEffect(() => {
    loadProduct();
  }, []);

  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div className={styles.productItemContainer}>
      <h1>{product.title}</h1>
      <img className={styles.productImage} src={product.thumbnail} alt="" />
      <p>{product.description}</p>
      <MyButton
        text="Add to Cart"
        onClick={() => dispatch(addToCart(product))}
      />
      <Link to="../products">
        <MyButton text="Back to products" />
      </Link>
    </div>
  );
};

export default ProductItem;


