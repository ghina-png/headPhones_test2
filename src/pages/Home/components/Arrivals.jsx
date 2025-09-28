import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { useState, useEffect } from "react";
import { getAllFoods } from "./../../../services/productsServices";

import Card from "./../../../components/custom/Card";
import "swiper/css";
import "swiper/css/pagination";

const Arrivals = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFoods() {
      setLoading(true);
      setError(null);
      try {
        const data = await getAllFoods();
        setProducts(data.data.products);
      } catch (err) {
        console.error(err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchFoods();
  }, []);

  if (loading) {
    return <h2>Loading</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="arrivals" style={{ marginTop: 0, paddingTop: 0 }}>
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        pagination={{ clickable: true }}
        style={{ padding: "20px", height: "600px" }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <Card
              product={product}
              image={product.image}
              name={product.name}
              category_name={product.category_name}
              price={product.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Arrivals;