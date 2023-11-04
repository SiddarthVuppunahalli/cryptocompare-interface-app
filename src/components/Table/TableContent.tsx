import React, { useEffect, useState } from 'react';
import { tableColumns } from './TableColumns';
import ListingTable from './ListingTable';
import { TableData, TableRowData } from '../../interfaces/table';
import { getTableData } from '../../services/data.service';

function TableContent() {
  const [tableData, setTableData] = useState<TableRowData[]>([]);
 
  const fetchData = async () => {
    try {
      const response = await getTableData();
      const displayData = response?.DISPLAY;
      const dataArray: TableRowData[] = Object.values(displayData);
      setTableData(dataArray);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();

    const refreshInterval = setInterval(() => {
      fetchData();
    }, 60000); // 60000 milliseconds = 1 minute

    return () => {
      clearInterval(refreshInterval);
    };
  }, []);

  return (
    <div className="table-content" >
      <table className="crypto-table">
        <thead>
          <tr>
            {tableColumns.map((column, index) => (
              <th key={index} style={{ width: column.width }}>
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <ListingTable data={tableData} />
      </table>
    </div>
  );
};

export default TableContent;
