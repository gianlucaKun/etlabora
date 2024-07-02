
import './Card.css';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartShopping, faWrench } from '@fortawesome/free-solid-svg-icons';

const Card = ({ product }) => {


  return (
    <div className="containerCard">
      <div className="containerTitle">
        <h2>{product.title}</h2>
      </div>
      <div className="containerImg">
        <img src={product.imgUrl} alt={product.title} />
      </div>
      <div className="containerInfo">
      <Link to={{ pathname: `/edit/${product.id}`, state: { product } }} className="cardButton">
          <FontAwesomeIcon icon={faWrench} />
        </Link>
        <p>{product.price}€</p>
        <button className="cardButton loveButton" onClick={() => {}}>
          <FontAwesomeIcon icon={faHeart} />
        </button>
        <button className="cardButton cartButton">
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
      </div>
    </div>
  );
};

export default Card;
