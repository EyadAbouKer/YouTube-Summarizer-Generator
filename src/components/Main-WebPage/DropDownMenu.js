import React from "react";

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
      style={{background: 'transparent', color: '#868686', fontWeight: '600', borderRadius: '10px', padding: '4px'}}
      cssClass='e-rounded-menu'
    >
      {props.items.map(({value, label}, index) => <option value={value}>{label}</option>)}
    </select>
  );
}

export default DropDownMenu;
