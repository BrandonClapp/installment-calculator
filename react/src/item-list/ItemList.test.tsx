import { render, screen } from '@testing-library/react';
import ItemList from './ItemList';

test('ItemList should render all children', () => {
  render(
    <ItemList>
      <div>Child</div>
      <div>Child</div>
      <div>Child</div>
      <div>Child</div>
    </ItemList>
  );

  const children = screen.getAllByText('Child');
  expect(children.length).toEqual(4);
});
