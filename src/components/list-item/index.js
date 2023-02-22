import React from 'react';

export function ListItem({ id, text }) {
  return (
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
      <div> {text}</div>
    </div>
  );
}
