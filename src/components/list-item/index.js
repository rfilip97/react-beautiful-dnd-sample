import React from 'react';

import { Draggable } from 'react-beautiful-dnd';

export function ListItem({ id, index, text }) {
  return (
    <Draggable key={id} index={index} draggableId={id}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          style={{
            border: '1px solid black',
            margin: '1rem',
            backgroundColor: 'white',
            display: 'flex',
            height: '50px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <div> {text}</div>
        </div>
      )}
    </Draggable>
  );
}
