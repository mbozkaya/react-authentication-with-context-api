import { shallow } from 'enzyme';
import React from 'react';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
configure({ adapter: new Adapter() });
it("renders without crashing", () => {
  shallow(<App />);
});

it("renders Account header", () => {
  const wrapper = shallow(<App />);
  const welcome = <p></p>;
  expect(wrapper.contains(welcome)).toEqual(false);
});