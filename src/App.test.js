import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('has a "press me" button', () => {
  const wrapper = shallow(<App />)
  const text = wrapper.find('button').text()
  expect(text).toEqual('USE THE FORCE press me!')
})
