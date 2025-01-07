// import ItemCount from "./ItemCount";

import ItemCount from "./ItemCount";

function ProfileCard({titulo,handle,imagen,description,stock,initial}) {

    return (
      <div className="card">
        <div className="card-img">
          <figure className="image is-16by9">
            <img src={imagen} alt="logo" />
          </figure>
        </div>

        <div className="card-content">
          <div className="media-content">
            <h2 className="title is-5">{titulo}</h2>
            <p className="subtitle is-6">{handle}</p>
            <p className="subtitle is-6">{description}</p>
          </div>
        </div>
        <ItemCount stock={stock} initial={initial} />
      </div>
    );
}

export default ProfileCard;
