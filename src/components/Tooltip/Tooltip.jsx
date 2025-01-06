import React, { useState } from 'react';

const Tooltip = ({ message, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          style={{
            position: 'absolute',
            bottom: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#12867F',
            color: 'white',
            padding: '8px',
            borderRadius: '3px',
            fontSize: '13px',
            whiteSpace: 'nowrap',
            fontFamily: '"Patua One", serif',
            marginBottom: '16px',
          }}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
