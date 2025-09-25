import Button from "../common/Button";
import { FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

import './../../assets/styles/card.css'

const Card = ({image,name,price,category_name}) => {
  return (
    <div className="card f-cen f-col">
      <div className="image">
        <img src={image} alt="image" />
        <Button type="button" text="add to card" className="btn-card" />
        <span className="heart f-cen"><FaRegHeart /></span>
        <span className="new" > new </span>
      </div>
      <div className="f-f text f-col w100 p0-5">
        <span className="txt-main"><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></span>
        <span>{name}</span>
        <span>{category_name}</span>
        <span className="txt-main" >${price}</span>
      </div>
    </div>
  )
}

export default Card
