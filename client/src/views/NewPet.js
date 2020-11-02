import React, { useState } from 'react'
import PetForm from '../components/PetForm';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

const NewPet = () => {
    const [pet, setPet] = useState({
        name: '',
        type: '',
        description: '',
        skill_1: '',
        skill_2: '',
        skill_3: ''
    });


    const [errors, setErrors] = useState({});

    const submitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pets/new', pet)
            .then(response => {
                if(response.data.errors) {
                    console.log(response.data.errors);
                    setErrors(response.data.errors);
                }
                else {
                    navigate('/');
                }
        })
        .catch(err => console.log(err))
    }

    const changeHandler = e => {
        setPet({
            ...pet,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div>
            <Link to="/">Back to home</Link>
            <h2>Know a pet needing a home?</h2>
            <form onSubmit ={ submitHandler }>
                <PetForm pet={ pet } changeHandler={ changeHandler } errors={ errors } action="create" />
            </form>
        </div>
    )
}

export default NewPet
