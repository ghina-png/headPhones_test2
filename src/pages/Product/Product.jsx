import Card from "../../components/custom/Card"
import P from './../../assets/images/p1.png'
const Product = () => {
  return (
    <div className="container f-cen ">
      <Card image={P} name="Sony WH-1000XM5" category_name="Over-Ear Headphones"  price="350" />
    </div>
  )
}

export default Product
