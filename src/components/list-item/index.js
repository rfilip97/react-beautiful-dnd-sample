import React from 'react';

import { Draggable } from 'react-beautiful-dnd';

export function ListItem({ id, index, text }) {
  return (
    <Draggable index={index} draggableId={id} key={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div
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
            {text}
          </div>
        </div>
      )}
    </Draggable>
  );
}
