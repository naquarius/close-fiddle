import { memo } from 'react';

interface ListItem {
  name: string;
  color: string;
  isSelected: boolean;
  onToggle: (name: string) => void;
}

export const ListItem = memo(function ListItem({
  name,
  color,
  isSelected,
  onToggle,
}: ListItem) {
  return (
    <li
      key={name}
      className={`List__item List__item--${color} ${
        isSelected ? 'List__item--selected' : ''
      }`}
      onClick={() => onToggle(name)}
    >
      {name}
    </li>
  );
});
