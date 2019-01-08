import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import TagFilter from './TagFilter';

describe(TagFilter, () => {
  const mockFilterNotes = jest.fn();
  const component = shallow(
    <TagFilter filterNotes={mockFilterNotes}/>
  );

  it('renders and matches our snapshot', () => {
    const component = renderer.create(
      <TagFilter />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('should have filter buttons', () => {
    expect(component.find('button')).toHaveLength(4);
  })

  it('calls passed in filterNotes function when clicked', () => {
    component.find('button.work').simulate('click');
    expect(mockFilterNotes).toBeCalled();
  })
})
