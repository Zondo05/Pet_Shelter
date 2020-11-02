import React, { useState, useEffect } from 'react'
import { navigate, Link } from '@reach/router';
import axios from 'axios';

const AllPets = () => {
    const [allPets, setAllPets] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets')
            .then(response => {
                console.log(response.data);
                setAllPets(response.data);
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <div>
                <h3>These Pets are looking for a good home</h3>
                <Link to="/pets/new">Add a pet to the shelter</Link>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th >Name</th>
                                <th scope="col">Type</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            allPets.map((item, i) => {
                                return(
                                        <tr  key={ i }>
                                                <td>{item.name}</td>
                                                <td>{item.type}</td>
                                                <td><button className="col-sm-4 btn btn-secondary" onClick={ () => navigate(`/pets/${item._id}/edit`)} >Edit</button><button className="col-sm-4 btn btn-primary" onClick={ () => navigate(`/pets/${item._id}`)}>Details</button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
        </div>
    )
}

export default AllPets
