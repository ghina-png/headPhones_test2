import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination} from 'swiper/modules';

import { useState,useEffect } from 'react';
import {getAllFoods} from  './../../../services/productsServices';

import Card from './../../../components/custom/Card'
 import 'swiper/css';
//  import './css/Pagination';

const Arrivals = () => {

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
          <h2>Loading</h2>
        );
    }

     if(error){
        return (
           error
        );
    }


  return (
    <div className='arrivals'>
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        }}
      ></Swiper>
        {products.map((product, index) => (
     <SwiperSlide key={index}>
       <Card product={product} image={product.image}  name="name" category_name="category_name" price="price" />
     </SwiperSlide>
  ))}
    </div>
  )
}

export default Arrivals
