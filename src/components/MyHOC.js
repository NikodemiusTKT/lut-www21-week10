import React from 'react';

const MyHOC = (component, props) => {
  return <div class="wrapper">{component({ ...props })}</div>;
};
export default MyHOC;
