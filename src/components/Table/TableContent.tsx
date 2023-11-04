import React, { useEffect, useState } from 'react';
import { tableColumns } from './TableColumns';
import ListingTable from './ListingTable';
import { TableData } from '../../interfaces/table';
import { getTableData } from '../../services/data.service';

function TableContent() {
  const [cryptoData, setCryptoData] = useState<TableData[]>([]);

  const fetchData = async () => {
    try {
      const data = await getTableData();
      setCryptoData(data);
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
    <div className="table-content">
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
        <ListingTable data={cryptoData} />
      </table>
    </div>
  );
};

export default TableContent;
