import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import NoteList from './NoteList';
import AddNote from './AddNote';
import Note from './Note';

describe(NoteList, () => {
  const component = shallow(
    <NoteList />
  );

  it('renders and matches our snapshot', () => {
    const component = renderer.create(
      <NoteList />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('contains an AddNote subcomponent', () => {
    expect(component.find(AddNote)).toHaveLength(1);
  })

  it('contains same number of Note components as notes', () => {
    const notesComponents = component.find(Note).length;
    const notes = component.state('notes').length;
    expect(notesComponents).toEqual(notes);
  });

  it('adds note when add note function called', () => {
    const before = component.find(Note).length;
    component.instance().addNote('Test');
    component.update();
    const after = component.find(Note).length;
    expect(after).toBeGreaterThan(before);
  });

  it('removes note when remove note function called', () => {
    const before = component.find(Note).length;
    const removeThisOne = component.state('notes')[0];
    component.instance().removeNote(removeThisOne);
    component.update();
    const after = component.find(Note).length;
    expect(after).toBeLessThan(before);
  })
})
