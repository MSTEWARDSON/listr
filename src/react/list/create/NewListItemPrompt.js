import React, { useState } from 'react';
import './NewListItemPrompt.scss';

//TODO add editable state here

const NewListItemPrompt = ({ onNewItem }) => {
  const [ value, setValue ] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    if (value.length < 1) {
      return;
    }
    onNewItem(value);
    setValue('');
  };

  const onTextChange = event => {
    setValue(event.target.value);
  };

  return (
    <form className="NewListItemPrompt" onSubmit={onSubmit}>
      <input className="NewListItemPrompt__input" type="text" value={value} onChange={onTextChange} placeholder="...New item"/>
      <button className="NewlistItemPrompt__submit" type="submit">Submit</button>
    </form>
  );
};

export default NewListItemPrompt;