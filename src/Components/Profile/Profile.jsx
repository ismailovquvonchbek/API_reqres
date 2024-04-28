import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function Profile() {
    const navigate = useNavigate();
    const { user_id } = useParams();
    const [user, setUser] = React.useState();


    React.useEffect(() => {
        fetch("https://reqres.in/api/users/" + user_id)
            .then((res) => res.json())
            .then((data) => {
                if (data?.data) {
                    setUser(data?.data);
                }
            })
    }, [user_id]);

    return (
        <>
            <div className="profile">
                {user ? (
                    <div className="profile__info">
                        <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
                        <h2>{`${user.first_name} ${user.last_name}`}</h2>
                        <a href={'mailto:' + user.email}>{user.email}</a>
                        <button className="btn" onClick={() => navigate(-1)}>  Orqaga </button>
                    </div>
                ) : (
                    <p>Ma'lumotlar yuklanmoqda...</p>
                )}
            </div>
        </>
    );
}

export default Profile;
