import { mount, shallow } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import Page from './Page';
configure({ adapter: new Adapter() });

it('renders without crashing', () => {
    shallow(<Page><div></div></Page>)
});

it('requires render with children', () => {
    const children = <p></p>;
    const wrapper = shallow(<Page>{children}</Page>);
    expect(wrapper.contains(children)).toEqual(true);
});

it('requires contain children props', () => {
    const children = <p>this is children</p>;
    const wrapper = mount(<Page>{children}</Page>);
    expect(wrapper.props().children).toEqual(children);
});