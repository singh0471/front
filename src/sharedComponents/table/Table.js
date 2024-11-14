import React from 'react';
import './Table.css';
const Table = ({ headers, tableData }) => {
   
  if (tableData.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th >{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((row) => (
          <tr>
            {Object.keys(row).map((key) => (
              <td>{row[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
