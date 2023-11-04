import React from 'react';
import { tableColumns } from './TableColumns'; // Import the column definitions
import { TableData } from '../../interfaces/table';


function ListingTable({data}: {data: TableData[]}) {
  return (
    <tbody>
      {data.map((item) => (
        <tr key={item.symbol.currency.FROMSYMBOL}>
          {tableColumns.map((column, index) => (
            <td key={index} style={{ width: column.width }}>
                {/* //here */}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default ListingTable;
