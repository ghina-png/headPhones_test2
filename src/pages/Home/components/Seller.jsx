import Card from "../../../components/custom/Card";

import { useState,useEffect } from 'react';
import {getAllFoods} from  './../../../services/productsServices';
import FakeCard from  './../../../components/custom/FakeCard';

import './../../../assets/styles/seller.css'

const Seller = () => {


  const [products,setProducts]=useState([]);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(null);

  useEffect(() =>{
    async function fetchFoods() {
      setLoading(true);
      setError(null);
      try{
        const data = await getAllFoods();
        setProducts(data.data.products);
      }
      catch(err){
        console.error(err.message);
        setError(err.message);
      }
      finally{
        setLoading(false);
      }
    }

    fetchFoods();
  },[]);

   if(loading){
        return (
           <div className="seller f-f f-col  ">
            <div className="cards w100 f-ard g3 ">
                 <FakeCard  />          
               <FakeCard  />          
               <FakeCard  />          
               <FakeCard  />          
               <FakeCard  />          
               <FakeCard  /> 
               <FakeCard  /> 
               <FakeCard  /> 
               <FakeCard  /> 
               <FakeCard  /> 
            </div>  
           </div>
        );
    }

     if(error){
        return (
           error
        );
    }


  return (
   <div className="seller f-f f-col  ">
    <h1>Best Seller</h1>
    <div className="cards w100 f-ard g3 ">
       {products.map((product) => (
       <Card product={product} image={product.image}  name="name" category_name="category_name" price="price" />
  ))}


    </div>
   </div>
  );
};

export default Seller;
