import React  from 'react';
import { default as ReactSelect } from 'react-select';


const Select = ({ placeholder, options, value, onChange, isMulti }) => {
  return (
  <ReactSelect
    placeholder={placeholder}
    options={options}
    value={value}
    onChange={onChange}
    isMulti={isMulti}
    className={'react-select-wrapper'}
    classNamePrefix={'select2-selection'}
  />
  );
};

export default Select;