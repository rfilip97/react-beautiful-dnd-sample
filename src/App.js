import { useState } from 'react';

import { List } from './components/list';
import { ListItem } from './components/list-item';

function App() {
  const items = [
    { id: '1', text: 'First option' },
    { id: '2', text: 'Second option' },
    { id: '4', text: 'Fourth option' },
    { id: '5', text: 'Fifth option' },
    { id: '6', text: 'Sixth option' },
    { id: '7', text: 'Seventh option' },
  ];

  const [listItems, setListItems] = useState(items);

  const handleOnDragEvent = (result) => {
    if (!result.destination) return;

    const items = Array.from(listItems);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setListItems(items);
  };

  return (
    <div className='App'>
      <List handleOnDragEvent={handleOnDragEvent}>
        {listItems.map((item, index) => (
          <ListItem key={item.id} id={item.id} index={index} text={item.text} />
        ))}
      </List>
    </div>
  );
}

export default App;
