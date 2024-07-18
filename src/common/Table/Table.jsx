// components/common/Table.js
import React from 'react';

const Table = ({ columns, data, actions }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider"
              >
                {column.header}
              </th>
            ))}
            {actions && <th className="px-6 py-3 border-b-2 border-gray-300">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-gray-100">
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="px-6 py-4 border-b border-gray-200 text-gray-800">
                  {column.accessor === 'profilePhoto' ? (
                    <img src={item[column.accessor]} alt="Profile" className="w-10 h-10 rounded-full" />
                  ) : (
                    item[column.accessor]
                  )}
                </td>
              ))}
              {actions && (
                <td className="px-6 py-4 border-b border-gray-200">
                  {actions(item)}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
