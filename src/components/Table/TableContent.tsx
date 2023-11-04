import React, { useEffect, useState } from 'react';
import { TableColumns } from './TableColumns';
import ListingTable from './ListingTable';
import { TableData, TableRowData } from '../../interfaces/table';
import { getTableData } from '../../services/data.service';
import * as T from '../../styles/table.style';

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
    <React.Fragment >
      <T.TableWrap>
        <T.HeaderCell>
            {TableColumns.map((column, index) => (
              <T.TableCell key={index} style={{ width: column.width }}>
                {column.header}
              </T.TableCell>
            ))}
        </T.HeaderCell>
        <ListingTable data={tableData} />
      </T.TableWrap>
    </React.Fragment>
  );
};

export default TableContent;
