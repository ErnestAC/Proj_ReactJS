// not code import ItemCount from "./ItemCount";

import ItemCount from "./ItemCount";

function ItemCard({ titulo, handle, imagen, description, stock, initial }) {

  return (
    <div className="column is-3">
      <div className="card">
        <div className="card-img">
          <figure className="image is-3by2">
            <img src={(imagen)} alt={description} />
          </figure>
        </div>

        <div className="card-content">
          <div className="media-content">
            <h2 className="title is-4">{titulo}</h2>
            <p className="subtitle is-5">{handle}</p>
            <p className="content">{description}</p>
            <p className="subtitle is-7"> {stock} available in stock. </p>
          </div>
        </div>
        <ItemCount stock={stock} initial={initial} />
        
      </div>
    </div>
  );
}

export default ItemCard;