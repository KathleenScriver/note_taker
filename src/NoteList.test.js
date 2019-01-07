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
})
