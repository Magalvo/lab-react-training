import React from 'react';

const NumbersTable = ({ limit }) => {
  const numbers = [];

  for (let i = 1; i <= limit; i++) {
    const numberClassName = i % 2 === 0 ? 'even' : '';

    numbers.push(
      <div key={i} className={`number ${numberClassName}`}>
        {i}
      </div>
    );
  }

  return (
    <div
      className="numbers-table"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {numbers}
    </div>
  );
};

export default NumbersTable;
