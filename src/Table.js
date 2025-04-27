import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import App from './App';

export default function Basic() {
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: 'Jogo',
        field: 'game',
        width: 200,
        sort: 'asc',
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'Categoria',
        field: 'category',
        width: 100,
      },
    ],
    rows: [
      {'game' : ' 7 Wonders ', 'category' : ' Prata '},
      {'game' : ' Jaipur ', 'category' : ' Bronze '},
    ],
  });

  return (<App/>,
  <MDBDataTableV5 hover entriesOptions={[200, 100, 50]} 
                entries={200} 
                pagesAmount={6} 
                searchLabel="Pesquisar" 
                data={datatable} 
                striped 
                small 
                searchTop searchBottom={false} 
                order={['game', 'asc']} />);
}