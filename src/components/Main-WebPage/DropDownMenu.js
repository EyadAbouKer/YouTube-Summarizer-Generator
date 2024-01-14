import React from "react";
import './DropDownMenu.css'

function DropDownMenu(props) {

  let state = {
    selectedOption: props.selectedIndex
  }

  let handleChange = ({ target }) => {
    this.setState({
      selectedOption: target.value,
    });
  }

  return (
    <select
      value={state.selectedOption}
      onChange={handleChange}
      cssClass='e-rounded-menu'
      className="stylized-drop-down"
    >
      {props.items.map(({value, label}, index) => <option value={value}>{label}</option>)}
    </select>
  );
}

export default DropDownMenu;
