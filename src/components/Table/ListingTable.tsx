import React from 'react';
import { tableColumns } from './TableColumns'; // Import the column definitions
import { TableData, TableRowData } from '../../interfaces/table';


function ListingTable({data}: {data: TableRowData[]}) {
  return (
    <tbody>
      {data.map((currencyData) => (
        <tr key={currencyData.USD.FROMSYMBOL}>
          {tableColumns.map((column, index) => (
            <td key={index} style={{ width: column.width }}>
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default ListingTable;
