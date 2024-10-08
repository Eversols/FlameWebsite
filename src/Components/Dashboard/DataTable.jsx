import { Avatar, Button, Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import avatar from "../../Assets/images/avatar.svg";



const headCells = [
    {
        id: 'displayName',
        numeric: false,
        disablePadding: true,
        label: 'Users',
    },
    {
        id: 'referral_points',
        numeric: true,
        disablePadding: false,
        label: 'Points Available',
    },
    {
        id: 'fat',
        numeric: true,
        disablePadding: false,
        label: 'Equivalent',
    },
    {
        id: 'carbs',
        numeric: true,
        disablePadding: false,
        label: 'Redeem',
    }
];


function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

const DataTable = ({ data, redeem, setDialog }) => {
    const [selected, setSelected] = useState([]);
    const [rows, setRows] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('calories');
    const visibleRows = useMemo(
        () =>
            stableSort(rows, getComparator(order, orderBy)).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage,
            ),
        [order, orderBy, page, rowsPerPage, rows],
    );

    useEffect(() => {
        if (data.length > 0) {
            setRows(data)
        }
    }, [data])

    const isSelected = (id) => selected.indexOf(id) !== -1;
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.id);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };


    return (
        <Paper sx={{ width: '100%', height: '100%', px: '42px' }}>
            {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
            <TableContainer>
                <Table
                    sx={{ minWidth: 750 }}
                    aria-labelledby="tableTitle"
                // size={dense ? 'small' : 'medium'}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell padding="checkbox">
                                {/* <Checkbox
                                    color="primary"
                                    indeterminate={selected.length}
                                    checked={rows.length}
                                    onChange={handleSelectAllClick}
                                    inputProps={{
                                        'aria-label': 'select all desserts',
                                    }}
                                /> */}
                            </TableCell>
                            {headCells.map((headCell) => (
                                <TableCell
                                    key={headCell.id}
                                    align={headCell.numeric ? 'right' : 'left'}
                                    padding={headCell.disablePadding ? 'none' : 'normal'}
                                // sortDirection={orderBy === headCell.id ? order : false}
                                >
                                    <TableSortLabel
                                    // active={orderBy === headCell.id}
                                    // direction={orderBy === headCell.id ? order : 'asc'}
                                    // onClick={createSortHandler(headCell.id)}
                                    >
                                        {headCell.label}
                                        {/* {orderBy === headCell.id ? (
                                            <Box component="span" sx={visuallyHidden}>
                                                {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                            </Box>
                                        ) : null} */}
                                    </TableSortLabel>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {visibleRows.length > 0 && visibleRows.map((row, index) => {
                            const isItemSelected = isSelected(row.id);
                            const labelId = `enhanced-table-checkbox-${index}`;

                            return (
                                <TableRow
                                    hover
                                    onClick={(event) => handleClick(event, row.id)}
                                    role="checkbox"
                                    aria-checked={isItemSelected}
                                    tabIndex={-1}
                                    key={row.id}
                                    selected={isItemSelected}
                                    sx={{ cursor: 'pointer' }}
                                >
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            color="primary"
                                            checked={isItemSelected}
                                            inputProps={{
                                                'aria-labelledby': labelId,
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell
                                        component="th"
                                        id={labelId}
                                        scope="row"
                                        padding="1"
                                        sx={{ display: "flex", gap: "12px", justifyContent: "center", alignItems: "center" }}
                                    >
                                        <Avatar src={row?.profileImage ? row?.profileImage : avatar} />
                                        {row.displayName}
                                    </TableCell>
                                    <TableCell align="right">{row.referral_points}</TableCell>
                                    <TableCell align="right">{row.equivalent_points}</TableCell>
                                    <TableCell align="right">
                                        <Button
                                            onClick={() => setDialog({ open: true, title: `Are you sure you want to Redeem ${row.referral_points} points`, action: ()=> redeem(row.id, row.referral_points) })}
                                            disabled={Number(row.referral_points) <= 0}
                                            variant="contained"
                                            type="submit"
                                            sx={{
                                                width: '40%',
                                                height: '44px',
                                                backgroundColor: '#FB1F43',
                                                color: '#ffffff',
                                                fontWeight: 600,
                                                borderRadius: '10px',
                                                fontFamily: 'Inter, Montserrat, sans-serif',
                                                '&:hover': {
                                                    backgroundColor: '#dc697c',
                                                },
                                            }}
                                        >
                                            Redeem
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                        {emptyRows > 0 && (
                            <TableRow
                                style={{
                                    height: (53) * emptyRows,
                                }}
                            >
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    )
}

export default DataTable