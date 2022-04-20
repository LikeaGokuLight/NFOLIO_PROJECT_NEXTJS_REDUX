import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {styled} from '@mui/material/styles';
import Link from "next/link";
import {LoadingCollection} from "../my_loading/MyLoading";
import {useSelector, useDispatch} from "react-redux";
import {loadTableData, setLoadingFalse} from "../../redux/actions/tableAction";

// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px
// sx={{ backgroundColor: Theme.palette.secondary.dark }}



const StyledTableCell = styled(TableCell)(({theme}) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    borderLeft: '1px solid #313438',
    borderBottom: '0.1px solid #313438',
  }
}));

const StyledTableCellBody = styled(TableCell)(({}) => ({
  backgroundColor: '#313438',
  border: 'none',
  color: 'white',
}));

const StyledTablePagination = styled(TablePagination)(({}) => ({
  backgroundColor: '#313438',
  border: 'none',
  color: 'white',
}));

const columns = [
  {id: 'collection', label: 'Collection', minWidth: 100},
  {id: 'tokenID', label: 'Token ID', minWidth: 70, align: 'right'},
  {
    id: 'boughtFor',
    label: 'Bought For',
    minWidth: 130,
    align: 'right',
  },
  {
    id: 'soldFor',
    label: 'Sold For',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'totGas',
    label: 'Tot Gas',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'profit',
    label: 'Profit',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'roi',
    label: 'ROI',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'transaction',
    label: 'Transaction',
    maxWidth: 20,
    align: 'right',
  },
];


const PaginationTable = ({}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const { table_data, is_loading } = useSelector( (state) => state.table );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTableData());
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{width: '100%'}}>
      <TableContainer sx={{minHeight: 50}}>
        <Table sx={{maxWidth: '1280px'}} stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{minWidth: column.minWidth}}
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {
              is_loading
                ? (
                  <TableRow hover role="checkbox" tabIndex={-1}>
                    {
                      [1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => <StyledTableCellBody key={i}>
                        <LoadingCollection/>
                      </StyledTableCellBody>)
                    }
                  </TableRow>
                )
                : (
                  table_data
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.tokenID}>
                          {columns.map((column) => {
                            const value = row[column.id];

                            if (column.label === 'Collection') {
                              return (
                                <StyledTableCellBody key={column.id} align={column.align} style={{color: '#a1e4b5'}}>
                                  <div style={{
                                    width: '200px',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    color: '#a1e4b5'
                                  }}>
                                    {column.format && typeof value === 'number'
                                      ? column.format(value)
                                      : value}
                                  </div>
                                </StyledTableCellBody>
                              )
                            } else if (column.label === 'Token ID') {
                              return (
                                <StyledTableCellBody key={column.id} align={column.align} style={{color: '#a1e4b5'}}>

                                  <div style={{
                                    width: '70px',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    float: "right"
                                  }}>
                                    <Link href={`https://opensea.io/assets/${row.address}/${row.tokenID}`}>
                                      <a target={'_blank'} style={{color: '#a1e4b5'}}>
                                        #{row.tokenID}
                                      </a>
                                    </Link>
                                  </div>

                                </StyledTableCellBody>
                              )
                            } else if (column.label === 'Bought For') {
                              return (
                                <StyledTableCellBody key={column.id} align={column.align}>
                                  <div style={{
                                    width: '70px',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    float: 'right'
                                  }}>
                                    {row.boughtFor}
                                  </div>
                                </StyledTableCellBody>
                              )
                            } else if (column.label === 'ROI') {
                              return (
                                <StyledTableCellBody key={column.id} align={column.align}>
                                  <div style={{
                                    width: '70px',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    float: "right",
                                  }}>

                                    {column.format && typeof value === 'number'
                                      ? column.format(value).toString().slice(0, 7)
                                      : value.toString().slice(0, 7)}%

                                  </div>
                                </StyledTableCellBody>
                              )
                            } else if (column.label === 'Transaction') {
                              return (
                                <StyledTableCellBody key={column.id} align={column.align} style={{color: '#a1e4b5'}}>

                                  <div style={{
                                    width: '200px',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    float: "right"
                                  }}>
                                    <Link href={`https://etherscan.io/tx/${row.transaction}`}>
                                      <a target={'_blank'} style={{color: '#a1e4b5'}}>
                                        {row.transaction}
                                      </a>
                                    </Link>
                                  </div>

                                </StyledTableCellBody>
                              )
                            }

                            return (
                              <StyledTableCellBody key={column.id} align={column.align}>
                                {column.format && typeof value === 'number'
                                  ? column.format(value)
                                  : value}
                              </StyledTableCellBody>
                            );
                          })}
                        </TableRow>
                      );
                    })
                )
            }
          </TableBody>
        </Table>
      </TableContainer>
      <StyledTablePagination
        rowsPerPageOptions={[10, 20]}
        component="div"
        count={table_data?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default PaginationTable;

