import React from 'react';

export function List({ children }) {
  return (
    <div style={{ border: '1px solid gray', backgroundColor: 'gray' }}>
      {children}
    </div>
  );
}
