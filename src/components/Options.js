import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
    <button onClick={props.handleDeleteOptions}>Remove All</button>
    {
      props.options.map((option, index) => (
        <Option
          optionText={option}
          key={index}
          handleDeleteOption = {props.handleDeleteOption}
        />
      ))
    }
  </div>
);

  export default Options;