import React from 'react';
import PropertyInput from '../src/components/PropertyInput';
import {shallow} from 'enzyme';
import VirtualizedSelect    from 'react-virtualized-select';
import bean from '../src/testJson.json';


test('input', () => {
  const handle = jest.fn();

  const wrapper = shallow(
    <PropertyInput path={"/textInput"} bean={bean} onChange={handle} />
  );

  wrapper.find('input').simulate('change', {target: {value: 'My new value'}});
  expect(handle.mock.calls[0]).toEqual(["/textInput", "My new value"]);

  wrapper.find('input').simulate('change', {target: {value: ''}});
  expect(handle.mock.calls[1]).toEqual(["/textInput", ""]);

  expect(handle.mock.calls.length).toBe(2);
});

test('Select', () => {
  const handle = jest.fn();

  const wrapper = shallow(
    <PropertyInput path={"/select"} bean={bean} onChange={handle} />
  );
  //console.log(wrapper.html())
  wrapper.find(VirtualizedSelect);//.find('#react-select-2--value-item').simulate('change', {target: {value: "vanilla"}});
  //expect(handle.mock.calls[0]).toEqual(["/select", "vanilla"]);

  //expect(handle.mock.calls.length).toBe(1);
});