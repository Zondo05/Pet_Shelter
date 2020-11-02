import React  from 'react'

const PetForm = props => {
    const { pet, changeHandler, errors, action, deleteHandler } = props;



    return (
        < >
            <div className="form-group row">
                {
                    errors.name ?
                    <span className="offset-sm-4 col-sm-8  text-danger">{ errors.name.message }</span>
                    :
                    ''
                }
                <label htmlFor="name" className="col-sm-2">Pet Name: </label>
                <input type="text" name="name" onChange={ changeHandler } className="col-sm-5 form-control" value={ pet.name }/>
            </div>

            <div className="form-group row">
                {
                    errors.type ?
                    <span className="offset-sm-4 col-sm-8  text-danger">{ errors.type.message }</span>
                    :
                    ''
                }
                <label htmlFor="type" className="col-sm-2">Type: </label>
                <input type="text" name="type" onChange={ changeHandler } className="col-sm-5 form-control" value={ pet.type }/>
            </div>

            <div className="form-group row">
                {
                    errors.description ?
                    <span className="offset-sm-4 col-sm-8  text-danger">{ errors.description.message }</span>
                    :
                    ''
                }
                <label htmlFor="description" className="col-sm-2">Description: </label>
                <input type="text" name="description" onChange={ changeHandler } className="col-sm-5 form-control" value={ pet.description }/>
            </div>

            <div className="form-group row">
                                <label htmlFor="skill" className="col-sm-2">Skill 1: </label>
                                <input type="text" name="skill_1" onChange={ changeHandler } className="col-sm-5 form-control" value={ pet.skill_1 } />
            </div>

            <div className="form-group row">
                                <label htmlFor="skill" className="col-sm-2">Skill 2: </label>
                                <input type="text" name="skill_2" onChange={ changeHandler } className="col-sm-5 form-control" value={ pet.skill_2 } />
            </div>

            <div className="form-group row">
                                <label htmlFor="skill" className="col-sm-2">Skill 3: </label>
                                <input type="text" name="skill_3" onChange={ changeHandler } className="col-sm-5 form-control" value={ pet.skill_3 } />
            </div>

            <div className="form-group row">
                {
                    action === "edit" ?
                    <>
                        <button type="button" onClick={ deleteHandler } className="offset-sm-6 col-sm-2 btn btn-danger">Delete</button>
                        <button type="submit" className="col-sm-2 btn btn-primary">Update</button>
                    </>
                    :
                    <>

                        <button type="submit" className="col-sm-2 btn btn-primary">Add Pet</button>
                    </>
                }
            </div>

        </>
    )
}

export default PetForm
