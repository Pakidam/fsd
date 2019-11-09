import React, { useState } from "react";
import Search from "./components/Search";
import AddContact from "./components/AddContact";
import DisplayNumbers from "./components/DisplayNumbers";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: 74567 },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchName, setSearchName] = useState("");
  const [displaySearch, setDisplaySearch] = useState([]);

  const displayPersons = () =>
    persons.map((element, index) => (
      <div key={index}>
        {element.name} {element.number}
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
      setPersons(persons.concat(newPerson));
    }
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
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
