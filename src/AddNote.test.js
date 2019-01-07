import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import AddNote from './AddNote';

describe(AddNote, () => {
  const mockAddNote = jest.fn();
  const component = shallow(
    <AddNote addNote={mockAddNote}/>
  );

  it('renders and matches our snapshot', () => {
    const component = renderer.create(
      <AddNote />
    )
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('contains input form', () => {
    expect(component.find('textarea')).toHaveLength(1);
    expect(component.find('button')).toHaveLength(1);
    expect(component.find('select')).toHaveLength(1);
  })

  it('calls passed in addNote function when add button clicked', () => {
    component.find('button').simulate('click');
    expect(mockAddNote).toBeCalled();
  });

  it('updates form when keys are pressed', () => {
    const updateKey = 'test';
    component.instance().updateNoteText({ target: { value: updateKey } })
    expect(component.state('noteText')).toEqual(updateKey);
  });

  it('blanks out the noteText when the button is clicked', () => {
    const updateKey = 'test';
    component.instance().updateNoteText({ target: { value: updateKey }});
    expect(component.state('noteText')).toEqual(updateKey);
    component.find('button').simulate('click');
    expect(component.state('noteText')).toHaveLength(0);
  });
})
