import { FaBeer } from "react-icons/fa";

function ProfileCard({titulo,handle,imagen}) {

    return (
        <div className="card">
            <div className="card-img">
                <figure className="image is-1by1">
                    <img src={imagen} alt="logo"/>
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <h2 className="title is-4">{titulo}</h2>
                    <p className="subtitle is-6">{handle}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;
