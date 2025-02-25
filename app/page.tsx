/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useCallback, useState } from 'react';
import { ListItem } from './components/ListItem';

type ItemTile = {
  name: string;
  color: string;
};

type ListProps = {
  items: ItemTile[];
};

const List = ({ items }: ListProps) => {
  const [selectedItems, setSelectedItems] = useState(new Set());

  // Toggle selection for an item
  const toggleItem = useCallback((itemName: string) => {
    setSelectedItems((prevSelected) => {
      const newSelected = new Set(prevSelected);
      if (newSelected.has(itemName)) {
        newSelected.delete(itemName);
      } else {
        newSelected.add(itemName);
      }
      return newSelected;
    });
  }, []);

  return (
    <>
      <h1>Selected:</h1>
      <h3>
        {selectedItems.size > 0 ? Array.from(selectedItems).join(', ') : 'None'}
      </h3>
      <ul className="List">
        {items.map(({ name, color }) => (
          <ListItem
            key={name}
            color={color}
            name={name}
            onToggle={toggleItem}
            isSelected={selectedItems.has(name)}
          />
        ))}
      </ul>
    </>
  );
};

// ---------------------------------------
// Do NOT change anything below this line.
// NOTE: NO LOGIC CHANGES BUT NEED TO TYPE THIS FOR TS TO WORK
// ---------------------------------------

const sizes = ['tiny', 'small', 'medium', 'large', 'huge'];
const colors = [
  'navy',
  'blue',
  'aqua',
  'teal',
  'olive',
  'green',
  'lime',
  'yellow',
  'orange',
  'red',
  'maroon',
  'fuchsia',
  'purple',
  'silver',
  'gray',
  'black',
];
const fruits = [
  'apple',
  'banana',
  'watermelon',
  'orange',
  'peach',
  'tangerine',
  'pear',
  'kiwi',
  'mango',
  'pineapple',
];

const items = sizes.reduce(
  (items, size) => [
    ...items,
    ...fruits.reduce(
      (acc, fruit) => [
        ...acc,
        ...colors.reduce(
          (acc, color) => [
            ...acc,
            {
              name: `${size} ${color} ${fruit}`,
              color,
            },
          ],
          [] as any[]
        ),
      ],
      [] as any[]
    ),
  ],
  [] as ItemTile[]
);

export default function Page() {
  return <List items={items} />;
}
