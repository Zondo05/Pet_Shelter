import React, { useState, useEffect } from 'react'
import PetForm from '../components/PetForm';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

const EditPet = props=> {
    const [pet, setPet] = useState({
        name: '',
        type: '',
        description: '',
        skill_1: '',
        skill_2: '',
        skill_3: ''
    });

    const [errors, setErrors] = useState({});

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



    const submitHandler = e => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/pets/${props.id}`, pet)
            .then(response => {
                if(response.data.errors) {
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

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/pets/${props.id}`)
            .then(response => navigate('/'))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <Link to="/">Back to home</Link>
            <h2>Edit {pet.name}</h2>
            <form onSubmit ={ submitHandler }>
            <PetForm pet={ pet } changeHandler={ changeHandler } errors={ errors } deleteHandler ={deleteHandler} action="edit" />
            </form>
        </div>
    )
}

export default EditPet
