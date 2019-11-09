import React from "react";

const AddContact = ({
  onSubmit,
  valueName,
  onChangeName,
  valueNumber,
  onChangeNumber
}) => {
  return (
    <form onSubmit={onSubmit}>
      <h2>add a new contact</h2>
      <div>
        name: <input value={valueName} onChange={onChangeName} />
      </div>
      <div>
        number: <input value={valueNumber} onChange={onChangeNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default AddContact;
