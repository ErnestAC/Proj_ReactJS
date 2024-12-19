import { FaBeer } from "react-icons/fa";

function ProfileCard({titulo,handle}) {

    return (
    <div>
        <FaBeer />
        <h2>{titulo}</h2>
        <p>{handle}</p>
    </div>
    );
}

export default ProfileCard;
