import React from 'react';

import { DragDropContext } from 'react-beautiful-dnd';

export function List({ children }) {
  return (
    <DragDropContext>
      <div style={{ border: '1px solid gray', backgroundColor: 'gray' }}>
        {children}
      </div>
    </DragDropContext>
  );
}
