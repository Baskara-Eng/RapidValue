import React, {useEffect, useState} from "react";
import {useParams , Link} from 'react-router-dom';
import Axios from "axios";

let UserDetails = () => {
    let [userId , setUserId] = useState((useParams().id));
    let [selectedUser , setSelectedUser] = useState({});

    useEffect(() => {
        let dataURL = 'https://jsonplaceholder.typicode.com/users';
        Axios.get(dataURL).then((response) => {
            
            let users = response.data; 
          
            let singleUser = users.find((user) => {
                
                return  user.id === Number(userId);
                
            });
           setSelectedUser(singleUser);
        }).catch((err) => {
            console.error(err);
        });
    },[userId]);

    return( 
        <React.Fragment>
           <div className="container mt-3">
               <div className="row">
                   <div className="col">
                       <p className="h3">User Details</p>
                       <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias, animi atque consequatur culpa distinctio eius expedita hic illo illum magni maxime nemo nobis officia officiis porro soluta tempora, totam.</p>
                   </div>
               </div>
               <div className="row">
                   <div className="col">
                          {
                           Object.keys(selectedUser).length !== 0 ?
                               <React.Fragment>
                                   <div className="card">
                                         <div className="card-body">
                                           <div className="row align-items-center">
                                               
                                               <div className="col-md-8">
                                                   <ul className="list-group">
                                                         <li className="list-group-item list-group-item-dark">
                                                           Id : {selectedUser.id}
                                                       </li>
                                                       <li className="list-group-item list-group-item-dark">
                                                           Name : {selectedUser.name}
                                                       </li>
                                                       <li className="list-group-item list-group-item-dark">
                                                           Username : {selectedUser.username}
                                                       </li>
                                                       <li className="list-group-item list-group-item-dark">
                                                           email : {selectedUser.email}
                                                       </li>
                                                       <li className="list-group-item list-group-item-dark">
                                                           City : {selectedUser.address.city}
                                                       </li>
                                                       <li className="list-group-item list-group-item-dark">
                                                           Company Name : {selectedUser.company.name}
                                                       </li>
                                                       
                                                   </ul>
                                               </div>
                                           </div>
                                       </div>
                                       <div className="card-footer">
                                           <Link to="/users" className="btn btn-dark btn-sm">Back</Link>
                                       </div>
                                   </div>
                               </React.Fragment> : null
                       }
                   </div>
               </div>
           </div>
        </React.Fragment>
    )
};
export default UserDetails ;
