import React from 'react';

const Debug = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      background: 'red',
      color: 'white',
      padding: '10px',
      zIndex: 9999
    }}>
      DEBUG: App is rendering!
    </div>
  );
};

export default Debug;
