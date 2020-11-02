import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate, Link} from '@reach/router';


const OnePet = props => {
    const [pet, setPet] = useState({
        name: '',
        type: '',
        description: '',
        skills_1:'',
        skill_2:'',
        skill_3:'',
    });

    useEffect( () => {
        axios.get(`http://localhost:8000/api/pets/${props.id}`)
            .then(response => {
                if(response.data == null) {
                    navigate('/');
                }
                setPet(response.data);
            })
            .catch(err => console.log(err));
    }, [props.id])


    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/pets/${props.id}`)
            .then(response => navigate('/'))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <Link to="/">Back to home</Link>

            <h2>Details about {pet.name}</h2>
                <div>
                    <p>Pet type: {pet.type}</p>
                    <p>Description: {pet.description}</p>
                    <p>Skills: {pet.skill_1}, {pet.skill_2}, {pet.skill_3}</p>
                </div>
                <div className="col-sm-12">
                    <form className="row" >
                        <div >
                            <div className="col-sm-9 ">
                                <div className="form-group row">
                                <button type="button" onClick={ deleteHandler }className="offset-sm-6 col-sm-15 btn btn-danger">Adopt</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
    )
}

export default OnePet
