import { Link } from "react-router";

const ProductCard = ({ product }) => {
  const { id, title, price, description, category, image, rating } = product;

  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100">
        <Link className="card text-decoration-none" to={`/products/${id}`}>
          <img
            src={image}
            className="card-img-top p-3"
            alt={title}
            style={{ height: "200px", objectFit: "contain" }} />
          <div className="card-body">
            <h4 className="card-title" style={{fontSize:"1rem"}}>{title.slice(0, 64)}</h4>
            <h5 className="card-subtitle md-2 text-body-secondary">{category} - {rating.rate} ⭐ {rating.count} </h5>
            <h6 className="card-title">${price}</h6>
            <p className="card-text">{description.slice(0, 128)}....</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;

