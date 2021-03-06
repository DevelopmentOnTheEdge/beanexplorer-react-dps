import React from 'react';
import PropTypes from 'prop-types';
import Async from 'react-select/async';
import BasePropertyInput from "./BasePropertyInput";
import {arraysEqual} from "../utils";
import SelectPropertyInput from "./SelectPropertyInput";

export default class AsyncSelectPropertyInput extends SelectPropertyInput {
  constructor(props) {
    super(props);
    this.state = {selectedOptions: []};
    this.loadOptions = this.loadOptions.bind(this);
  }

  componentDidMount() {
    const value = this.getValue();
    if (value !== "") {
      this.setState({selectedOptions: this.getOptions().filter(option => option.value === value)});
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const rawValue = SelectPropertyInput.getRawValue(this.state.selectedOptions);
    if (Array.isArray(nextProps.value)) {
      if (!arraysEqual(rawValue, nextProps.value))
        this.setState({value: nextProps.value});
    } else {
      if (rawValue !== nextProps.value)
        this.setState({value: nextProps.value});
    }
  }

  getSelect(selectAttr, meta, extraAttrsMap) {
    return <Async
      {...selectAttr}
      value={this.state.selectedOptions}
      loadOptions={this.loadOptions}
      defaultOptions={this.getOptions()}
      filterOption={(options, filter, currentValues) => {
        // Do no filtering, just return all options
        return options;
      }}
    />;
  }

  loadOptions(input, callback) {
    //todo check in big data
    const meta = this.getMeta();
    const extraAttrsMap = BasePropertyInput.getExtraAttrsMap(meta);
    this.props.selectLoadOptions( Object.assign({input: input}, extraAttrsMap), callback)
  }
}

AsyncSelectPropertyInput.propTypes = {
  selectLoadOptions: PropTypes.func,
};
