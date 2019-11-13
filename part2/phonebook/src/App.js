import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import AddContact from "./components/AddContact";
import DisplayNumbers from "./components/DisplayNumbers";
import personService from "./services/persons";
import Notification from "./components/Notification";
const url = "http://localhost:3001/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchName, setSearchName] = useState("");
  const [displaySearch, setDisplaySearch] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios.get(url).then(response => {
      setPersons(response.data);
    });
  }, []);

  const deleteContact = id => {
    const updatedList = persons.filter(n => n.id !== id);

    personService.remove(id).then(returnedPerson => {
      setPersons(updatedList);
    });
  };

  const displayPersons = () =>
    persons.map(element => (
      <div key={element.id}>
        {element.name} {element.number}{" "}
        <button onClick={() => deleteContact(element.id)}>delete</button>
      </div>
    ));

  const handleNameChange = event => {
    setNewName(event.target.value);
  };

  const handleNumberChange = event => {
    setNewNumber(event.target.value);
  };

  const handleSearchName = event => {
    setSearchName(event.target.value);
  };

  const searchPerson = event => {
    event.preventDefault();
    const searchResult = persons.filter(item => item.name.includes(searchName));
    const result = searchResult.map(elem => (
      <div>
        {elem.name} {elem.number}
      </div>
    ));
    setDisplaySearch(result);
  };

  const addPerson = event => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber
    };

    if (persons.some(person => person.name === newPerson.name)) {
      alert(`${newPerson.name} is already added to phonebook`);
    } else {
      personService.add(newPerson).then(person => {
        setPersons(persons.concat(newPerson));
        setErrorMessage(` Added ${newPerson.name}`);
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      });
    }
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      {errorMessage !== null && <Notification message={errorMessage} />}
      <Search
        onSubmit={searchPerson}
        value={searchName}
        onChange={handleSearchName}
        displaySearch={displaySearch}
      />
      <AddContact
        onSubmit={addPerson}
        valueName={newName}
        onChangeName={handleNameChange}
        valueNumber={newNumber}
        onChangeNumber={handleNumberChange}
      />
      <DisplayNumbers display={displayPersons()} />
    </div>
  );
};

export default App;
