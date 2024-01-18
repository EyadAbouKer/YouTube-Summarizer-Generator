import React, {useState} from "react";
import './DropDownMenu.css'

function DropDownMenu({items, selected, setSelected}) {

  return (
    <select
      value={selected}
      onChange={setSelected}
      cssClass='e-rounded-menu'
      className="stylized-drop-down"
    >
      {items.map(({value, label}, index) => <option id={index} value={value}>{label}</option>)}
    </select>
  );
}

export default DropDownMenu;
