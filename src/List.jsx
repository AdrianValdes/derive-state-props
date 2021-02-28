import { useEffect, useState } from 'react';

export function List({ list, onUpdateName }) {
  return (
    <ul>
      {list.map((item) => (
        <Item key={item.id} item={item} onUpdateName={onUpdateName} />
      ))}
    </ul>
  );
}

function Item({ item, onUpdateName }) {
  const [name, setName] = useState(item.name);

  function handleNameChange(event) {
    setName(event.target.value);
  }

  useEffect(() => {
    setName(item.name);
  }, [item]);

  return (
    <li>
      <span>
        {item.name}
        <input type='text' value={name} onChange={handleNameChange} />
        <button type='button' onClick={() => onUpdateName(item.id, name)}>
          Update
        </button>
      </span>
    </li>
  );
}
