import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import AllPets from './views/AllPets';
import EditPet from './views/EditPet';
import NewPet from './views/NewPet';
import OnePet from './views/OnePet';

function App() {

  return (
    <div className="container">
      <h1>Pet Shelter</h1>

      <Router>
        <AllPets path="/" />
        <EditPet path="/pets/:id/edit" />
        <OnePet path="/pets/:id" />
        <NewPet path="/pets/new" />
      </Router>
    </div>
  );
}

export default App;
