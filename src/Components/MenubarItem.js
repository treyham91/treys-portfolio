import React from 'react';
import { Link } from 'react-router-dom';

const MenubarItem = (props) => {
  return (
    <React.Fragment>
      <Link id={props.id} to={props.to}>{props.name}</Link>
    </React.Fragment>
  )
}

export default MenubarItem;