/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";

function User({ person }) {
    const { name, username, email, phone, website, address, company } = person;
    const { street, city } = address;

    return (
        <section className="user">
            <h1 className="title">{name}</h1>
            <div>
                <div className="contactSection">
                    <h3>Contact:</h3>
                    <div className="contactBody">
                        <div className="contactBody1">
                            <p>UserName: {username}</p>
                            <p>Phone: {phone}</p>
                        </div>
                        <div className="contactBody2">
                            <p>E-mail: {email}</p>
                            <p>Website: {website}</p>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="companySection">
                    <h3>Company:</h3>
                    <div className="companyBody">
                        <p>Name: {company.name}</p>
                        <p>BS: {company.bs}</p>
                    </div>
                </div>
                <hr/>
                <div className="addressSection">
                    <h3>Address:</h3>
                    <div className="addressBody">
                        <p>City: {city}</p>
                        <p>Street: {street}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function UserList() {
    const [users, setUsers] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [error, setError] = useState(null);

    function getData() {
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
            setUsers(response.data);
        })
        .catch(function (error) {
            setError(error);
        });
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="list">
            {users.map((info, idx) => (
                <User key={idx} person={info} />
            ))}
        </div>
    );
}

export default UserList;
