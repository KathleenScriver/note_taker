import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Note from './Note';

describe(Note, () => {
  const text = 'Get Groceries';
  const tag = 'personal';
  const createdOn = '12/29'
  const mockRemoveNote = jest.fn();
  const component = shallow(
    <Note text={text} tag={tag} createdOn={createdOn} removeNote={mockRemoveNote}/>
  );

  it('renders and matches our snapshot', () => {
    const component = renderer.create(
      <Note text='Get Groceries' tag='personal' createdOn='12/29'/>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('contains the supplied text and tag', () => {
    expect(component.text()).toContain(text);
    expect(component.text()).toContain(tag);
  })

  it('calls passed in removeNote function when remove button clicked', () => {
    component.find('button.remove').simulate('click');
    expect(mockRemoveNote).toBeCalled();
  })
})
