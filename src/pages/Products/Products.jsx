import Card from "./../../components/custom/Card";
import { useState,useEffect } from 'react';
import {getAllFoods} from  './../../services/productsServices';
import { Link } from "react-router-dom";

import FakeCard from '../../components/custom/FakeCard';


const Products = () => {
  
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
            <div className="container  f-f f-col p2">
               <div className="cards w100 f-cen  g3 p3">
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
    <div className="container  f-f f-col p2">
      <div className="more">
      <Link to="/Product/" className="btn">More</Link>      
      </div>
      <div className="cards w100 f-cen  g3 p3">
       {products.map((product) => (
       <Card  key={product.id} product={product} image={product.image}  name="name" 
       category_name= {product.category_name} price={ product.price} />
  ))}
      </div>


    </div>
  )
}

export default Products
