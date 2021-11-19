import React, { useState } from 'react';
import MyList from './MyList';

export default function MyContainer() {
  const [items, setItems] = useState([
    { id: '1', text: 'This is an item', clicked: false },
    { id: '2', text: 'Also this', clicked: false },
  ]);
  const [textValue, setTextValue] = useState('');

  const handleChange = (event) => {
    setTextValue(event.target.value);
  };

  const addItemHandler = (e) => {
    e.preventDefault();
    if (textValue)
      setItems((prevItems) => {
        return [...prevItems, { id: prevItems.length + 1, text: textValue, clicked: false }];
      });
  };
  const updateItem = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, clicked: !item.clicked };
        } else return item;
      })
    );
  };
  return (
    <div>
      <MyList updateItem={updateItem} header="Really epic list component" items={items} />
      <textarea
        value={textValue}
        onChange={handleChange}
        name="itemText"
        id="itemText"
        cols="30"
        rows="2"
      ></textarea>
      <br />
      <button onClick={addItemHandler}>Add Item</button>
    </div>
  );
}
