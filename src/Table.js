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
{'game' : ' 7 Wonders Duel ', 'category' : ' Bronze '},
{'game' : ' A Guerra dos Tronos ', 'category' : ' Prata '},
{'game' : ' Agricola ', 'category' : ' Prata '},
{'game' : ' Alhambra ', 'category' : ' Bronze '},
{'game' : ' Arcadia Quest ', 'category' : ' Ouro '},
{'game' : ' Azul ', 'category' : ' Prata '},
{'game' : ' Barenpark ', 'category' : ' Bronze '},
{'game' : ' Battlecon ', 'category' : ' Bronze '},
{'game' : ' Blood Rage ', 'category' : ' Ouro '},
{'game' : ' Brass ', 'category' : ' Prata '},
{'game' : ' Carcassonne ', 'category' : ' Bronze '},
{'game' : ' Carcassonne Plus (jogo + 11 expansões) ', 'category' : ' Ouro '},
{'game' : ' Catan  ', 'category' : ' Prata '},
{'game' : ' Citadels ', 'category' : ' Bronze '},
{'game' : ' Civilization ', 'category' : ' Prata '},
{'game' : ' Codenames: Disney ', 'category' : ' Bronze '},
{'game' : ' Codenames: Marvel ', 'category' : ' Bronze '},
{'game' : ' Codigo Secreto Imagens ', 'category' : ' Bronze '},
{'game' : ' Coimbra ', 'category' : ' Prata '},
{'game' : ' Coup ', 'category' : ' Bronze '},
{'game' : ' CV ', 'category' : ' Bronze '},
{'game' : ' Cyclades ', 'category' : ' Prata '},
{'game' : ' Dead Man\'s Draw ', 'category' : ' Bronze '},
{'game' : ' Dead of Winter ', 'category' : ' Prata '},
{'game' : ' Dice Forge ', 'category' : ' Prata '},
{'game' : ' Dixit ', 'category' : ' Bronze '},
{'game' : ' Dixit: Journey (expansão) ', 'category' : ' Bronze '},
{'game' : ' Dixit: Quest (expansão) ', 'category' : ' Bronze '},
{'game' : ' Down Force ', 'category' : ' Bronze '},
{'game' : ' Dungeon Saga ', 'category' : ' Ouro '},
{'game' : ' Eldritch Horror  ', 'category' : ' Prata '},
{'game' : ' Fallout ', 'category' : ' Prata '},
{'game' : ' Feudum ', 'category' : ' Prata '},
{'game' : ' Five Tribes (inglês) ', 'category' : ' Prata '},
{'game' : ' Flick \'em Up ', 'category' : ' Bronze '},
{'game' : ' Formula D (inglês) ', 'category' : ' Ouro '},
{'game' : ' Genial ', 'category' : ' Prata '},
{'game' : ' Hansa Teutônica (inglês) ', 'category' : ' Prata '},
{'game' : ' Harbour ', 'category' : ' Bronze '},
{'game' : ' Ilha dos Dinossauros ', 'category' : ' Ouro '},
{'game' : ' Ilha Proibida ', 'category' : ' Bronze '},
{'game' : ' Imperial Settlers ', 'category' : ' Prata '},
{'game' : ' Istanbul ', 'category' : ' Bronze '},
{'game' : ' Jamaica ', 'category' : ' Prata '},
{'game' : ' K2 ', 'category' : ' Prata '},
{'game' : ' Kemet ', 'category' : ' Ouro '},
{'game' : ' King of New York ', 'category' : ' Bronze '},
{'game' : ' King of Tokyo ', 'category' : ' Bronze '},
{'game' : ' Las Vegas (inglês) ', 'category' : ' Prata '},
{'game' : ' Le Havre ', 'category' : ' Prata '},
{'game' : ' Lords of Xidit ', 'category' : ' Prata '},
{'game' : ' Mage Knight (inglês) ', 'category' : ' Ouro '},
{'game' : ' Manhattan Project ', 'category' : ' Prata '},
{'game' : ' Marco Polo ', 'category' : ' Prata '},
{'game' : ' Mission: Red Planet (inglês) ', 'category' : ' Prata '},
{'game' : ' Munchkin Zombies  ', 'category' : ' Bronze '},
{'game' : ' Mysterium ', 'category' : ' Prata '},
{'game' : ' Oh my Goods ', 'category' : ' Bronze '},
{'game' : ' Orleans ', 'category' : ' Prata '},
{'game' : ' Parade ', 'category' : ' Bronze '},
{'game' : ' Planet Steam (inglês) ', 'category' : ' Prata '},
{'game' : ' Port Royal ', 'category' : ' Bronze '},
{'game' : ' Potion Explosion ', 'category' : ' Prata '},
{'game' : ' Puerto Rico ', 'category' : ' Prata '},
{'game' : ' Quarriors Quarmageddon ', 'category' : ' Bronze '},
{'game' : ' Race for the Galaxy ', 'category' : ' Bronze '},
{'game' : ' Robinson Crusoe ', 'category' : ' Ouro '},
{'game' : ' Rock Roll Manager ', 'category' : ' Bronze '},
{'game' : ' Room 25 (+expansão) ', 'category' : ' Prata '},
{'game' : ' Root ', 'category' : ' Prata '},
{'game' : ' Russian Railroads (inglês) ', 'category' : ' Diamante '},
{'game' : ' Saboteur ', 'category' : ' Bronze '},
{'game' : ' Sagrada ', 'category' : ' Prata '},
{'game' : ' Sheriff of Nottingham ', 'category' : ' Bronze '},
{'game' : ' Smash Up ', 'category' : ' Bronze '},
{'game' : ' Sons of Anarchy (inglês) ', 'category' : ' Prata '},
{'game' : ' Splendor ', 'category' : ' Prata '},
{'game' : ' Star Wars: Orla Exterior ', 'category' : ' Prata '},
{'game' : ' Stone Age ', 'category' : ' Prata '},
{'game' : ' Suburbia ', 'category' : ' Prata '},
{'game' : ' Survive ', 'category' : ' Prata '},
{'game' : ' Sword & Sorcery ', 'category' : ' Ouro '},
{'game' : ' Takenoko ', 'category' : ' Prata '},
{'game' : ' Terra Mystica ', 'category' : ' Ouro '},
{'game' : ' Terraforming Mars ', 'category' : ' Ouro '},
{'game' : ' The Castle of Burgundy ', 'category' : ' Bronze '},
{'game' : ' The Grizzled: Armistício ', 'category' : ' Prata '},
{'game' : ' The Resistance ', 'category' : ' Bronze '},
{'game' : ' Ticket to Ride ', 'category' : ' Prata '},
{'game' : ' Ticket to Ride: Europa ', 'category' : ' Prata '},
{'game' : ' Ticket to Ride: Países Nórdicos ', 'category' : ' Prata '},
{'game' : ' Ticket to Ride: Trilhos e Velas ', 'category' : ' Ouro '},
{'game' : ' Tiranos de Umbreterna ', 'category' : ' Ouro '},
{'game' : ' Tokaido ', 'category' : ' Prata '},
{'game' : ' Trajan ', 'category' : ' Prata '},
{'game' : ' Tsuro ', 'category' : ' Bronze '},
{'game' : ' U-Boot ', 'category' : ' Diamante '},
{'game' : ' Ubongo ', 'category' : ' Prata '},
{'game' : ' Ultimate Warriorz ', 'category' : ' Bronze '},
{'game' : ' Whistle Stop (inglês) ', 'category' : ' Prata '},
{'game' : ' Wingspan ', 'category' : ' Prata '},
{'game' : ' XCom ', 'category' : ' Prata '},
{'game' : ' Zombicide ', 'category' : ' Ouro '},
{'game' : ' Zombicide: Black Plague (inglês) ', 'category' : ' Ouro '},
{'game' : ' Zombicide: Invader ', 'category' : ' Ouro '},
{'game' : ' Zombicide: Prison Outbreak ', 'category' : ' Ouro '},
{'game' : ' Time Stories (inglês) ', 'category' : ' Ouro '},
{'game' : ' Mombasa ', 'category' : ' Prata '},
{'game' : ' Mexica ', 'category' : ' Prata '},
{'game' : ' Colt Express ', 'category' : ' Prata '},
{'game' : ' Pandemic ', 'category' : ' Prata '},
{'game' : ' Twilight Struggle ', 'category' : ' Prata '},
{'game' : ' Alquimistas ', 'category' : ' Ouro '},
{'game' : ' Village ', 'category' : ' Prata '},
{'game' : ' On Mars ', 'category' : ' Diamante '},
{'game' : ' The Gallerist ', 'category' : ' Diamante '},
{'game' : ' Vinhos  ', 'category' : ' Diamante '},
{'game' : ' Lisboa ', 'category' : ' Diamante '},
{'game' : ' Yokohama ', 'category' : ' Ouro '},
{'game' : ' Madeira ', 'category' : ' Ouro '},
{'game' : ' Space Alert ', 'category' : ' Prata '},
{'game' : ' The Godfather ', 'category' : ' Ouro '},
{'game' : ' Jaipur ', 'category' : ' Bronze '},
    ],
  });

  return (<App/>,
  <MDBDataTableV5 hover entriesOptions={[10, 50, 100]} 
                entries={150} pagesAmount={1} searchLabel="Pesquisar" data={datatable} striped small searchTop searchBottom={false}  />);
}