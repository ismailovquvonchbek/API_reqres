import React from "react";
import "./Hero.scss";
import { Link } from "react-router-dom";



function Hero() {

    const [users, setUsers] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        (async () => {
            const res = await fetch("https://reqres.in/api/users?page=1");
            const data = await res.json();
            if (data?.data) {
                setUsers(data?.data);
                setLoading(false);
            }
        })()
    }, []);


    return (
        <>
            <div className="api">

                <ul className="list">
                    {users?.length > 0 && users.map((user) => (
                        <li key={user.id} className="item">
                            <img
                                src={user.avatar}
                                alt={user.first_name + " " + user.last_name} />

                            <h2>{user.first_name + " " + user.last_name}</h2>
                            <Link key={user.id} to={"/profile/" + user.id}>
                                <button type="button">More...</button>
                            </Link>
                        </li>
                    ))}
                </ul>

                {loading && <p>Loading...</p>}

            </div>
        </>
    )
}

export default Hero;            