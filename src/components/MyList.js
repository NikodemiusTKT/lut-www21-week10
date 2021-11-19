import React from 'react';
import PropTypes from 'prop-types';

function MyList({ header, items, updateItem }) {
  const listItems = items.map((item) => (
    <li
      key={item.id}
      onClick={() => updateItem(item.id)}
      style={{ textDecoration: item.clicked ? 'line-through' : '' }}
    >
      {item.text}
    </li>
  ));
  return (
    <div>
      <h1>{header}</h1>
      <ol>{listItems}</ol>
    </div>
  );
}

MyList.propTypes = {
  updateItem: PropTypes.func,
  header: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
      clicked: PropTypes.bool,
    })
  ),
};

export default MyList;
