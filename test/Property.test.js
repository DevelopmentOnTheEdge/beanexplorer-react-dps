import React from 'react';
import Property from '../src/components/Property';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

const item = "/testName";
const itemName = item.substring(item.lastIndexOf("/")+1);
const itemValue = "testValue";

it('simple property', () => {
	const itemMeta = {"displayName": "Combo Box",
									"type": "comboBox",
									"canBeNull": true,
									"options": [{"value":"bar","text":"foo"}, {"value":"bar2","text":"foo 2"}]};

	const component = renderer.create(
    <Property meta={itemMeta} name={itemName} value={itemValue} path={item}
    													  key={itemName} />
  );
  let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

it('call callback after click', () => {
	const itemMeta = {
		"type": "checkBox",
	};

	const handle = jest.fn();

  const wrapper = shallow(
    <Property meta={itemMeta} name={itemName} value={itemValue} path={item}
        													  key={itemName} onChange={handle} />
  );

  wrapper.find('input').simulate('change');

  expect(handle.mock.calls.length).toBe(1);
  //TODO
  //expect(myMock.mock.calls[0]).toEqual(["/testName", true]);
});

it('call callback after set text', () => {
	const itemMeta = {};
	const itemValue = "testValue";

	const handle = jest.fn();

  const wrapper = shallow(
    <Property meta={itemMeta} name={itemName} value={itemValue} path={item}
        													  key={itemName} onChange={handle} />
  );

	wrapper.find('input').simulate('change', {target: {value: 'My new value'}});

  expect(handle.mock.calls.length).toBe(1);
  expect(handle.mock.calls[0]).toEqual(["/testName", "My new value"]);
});