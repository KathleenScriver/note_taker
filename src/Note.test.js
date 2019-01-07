import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Note from './Note';

describe(Note, () => {
  const name = 'Get Groceries';
  const mockRemoveNote = jest.fn();
  const component = shallow(
    <Note name={name} removeNote={mockRemoveNote}/>
  );

  it('renders and matches our snapshot', () => {
    const component = renderer.create(
      <Note name='Get Groceries'/>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('contains the supplied name', () => {
    expect(component.text()).toContain(name)
  })

  it('calls passed in removeNote function when remove button clicked', () => {
    component.find('button.remove').simulate('click');
    expect(mockRemoveNote).toBeCalled();
  })
})
