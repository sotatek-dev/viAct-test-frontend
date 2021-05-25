import './Table.style';
import {
  DataGrid,
  GridColDef,
  GridPageChangeParams,
} from '@material-ui/data-grid';
import { News } from '../../common/interface';
import { useStyles } from './Table.style';
import { Button } from '@material-ui/core';

interface Props {
  data: News[];
  onPaginationChange: (data: GridPageChangeParams) => void;
  [propName: string]: {};
}

const Table = ({ data, onPaginationChange, ...rest }: Props) => {
  const classes = useStyles();
  const columns: GridColDef[] = [
    {
      field: 'image',
      headerName: 'Image',
      renderCell: (params) => {
        return (
          <img
            className={classes.coverImage}
            src={params.getValue(params.id, 'urlToImage')?.toString()}
          />
        );
      },
      width: 120,
      sortable: false
    },
    { field: 'source', headerName: 'Source', width: 180, sortable: false },
    { field: 'author', headerName: 'Author', width: 120 },
    { field: 'title', headerName: 'Title', flex: 1 },
    { field: 'publishedAt', headerName: 'Publish Date', width: 200},
    {
      field: 'url',
      headerName: 'Url',
      width: 150,
      renderCell: (params) => {
        return (
          <Button variant="contained" color="primary" onClick={() => window.open(params.getValue(params.id, 'url')?.toString(), '_blank')}>
            View
          </Button>
        );
      },
      sortable: false
    },
  ];

  return (
    <DataGrid
      rows={data}
      columns={columns}
      sortingOrder={['asc', 'desc']}
      pagination
      pageSize={10}
      rowCount={100}
      autoHeight
      paginationMode="server"
      onPageChange={(data) => {
        onPaginationChange(data);
      }}
      {...rest}
    />
  );
};

export default Table;
