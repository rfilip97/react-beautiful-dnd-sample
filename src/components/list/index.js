import React from 'react';

import { DragDropContext, Droppable } from 'react-beautiful-dnd';

export function List({ children }) {
  return (
    <DragDropContext>
      <Droppable droppableId='listContainer'>
        {(provided) => (
          <div
            style={{ border: '1px solid gray', backgroundColor: 'gray' }}
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
