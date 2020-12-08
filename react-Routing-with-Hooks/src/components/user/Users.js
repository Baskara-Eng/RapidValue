import React, {useEffect, useState} from "react";
import Axios from "axios";
import {Link} from 'react-router-dom';

let Users = () => {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        let dataURL = `https://jsonplaceholder.typicode.com/users`;
        Axios.get(dataURL).then((response) => {
            setUsers(response.data);
        }).catch((err) => {
            console.error(err);
        });
    }, []);

    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3">Employees Info</p>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae deserunt doloremque excepturi inventore ipsa magni molestias officia, officiis possimus quasi, quidem repellat sit vero? Debitis expedita ipsum maiores mollitia repellat.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {
                            users.length > 0 ?
                                <React.Fragment>
                                    <table className="table table-hover text-center table-striped table-light">
                                        <thead className="bg-dark text-white">
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Username</th>
                                            <th>Email</th>
                                            <th>City</th>
                                            <th>Company Name</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            users.map((user) => {
                                                return (
                                                    <tr key={user.id}>
                                                        <td>{user.id}</td>
                                                        <td>{user.name}                                                       
                                                        </td>
                                                        <td>
                                                            <Link to={`/users/${user.id}`} className="text-primary font-weight-bold">{user.username}</Link>
                                                        </td>
                                                        <td>{user.email}</td>
                                                        <td>{user.address.city}</td>
                                                        <td>{user.company.name}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                        </tbody>
                                    </table>
                                </React.Fragment> : null
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default Users;
