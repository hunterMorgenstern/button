import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { configure, mount, render } from 'enzyme';
import Display from '../src/client/components/Display';

configure({ adapter: new Adapter() });

describe('Display', () => {
  it('should display text on click', () => {
    const component = mount(<Display />);

    const textBox = component.find('.hide');

    expect(textBox.text()).toBe('');

    component.find('.main-button').simulate('click');

    expect(textBox.text()).toBe('You pass butter.  - Rick Sanchez');

    component.unmount();
  });

  it('title is button', () => {
    const component = render(<Display />);

    const title = component.find('.title');

    expect(title.text()).toBe('Button');
  });

  it('GitHub link', () => {
    const component = render(<Display />);

    const title = component.find('.footer-link');

    expect(title.text()).toBe('GitHub');
  });
});
