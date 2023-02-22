import React from 'react';

import { DragDropContext, Droppable } from 'react-beautiful-dnd';

export function List({ children, handleOnDragEvent }) {
  return (
    <DragDropContext onDragEnd={handleOnDragEvent}>
      <Droppable droppableId='items'>
        {(provided) => (
          <div
            style={{
              border: '1px solid gray',
              backgroundColor: 'gray',
              height: '100%',
              width: '50%',
              transform: 'none',
            }}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {children}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
