import React, { useState } from "react";
import { Container, 
				 Text, 
				 FloatingButton, 
				 List, 
				 ListItem, 
				 ListSeparator, 
				 View, 
				 } from "../../Styles/index";

import Mapa from '../../Assets/mapa'
import Adicionar from '../../Assets/add_icon'

export default function ({ navigation }) {
	
	item = {
		id: 1454532454335,
		especie: "capivara",
		referencia: "Quixadá",
		Data: "08/12/2021",
	}
	item2 = {
		id: 12131234213,
		especie: "capivara",
		referencia: "Quixadá",
		Data: "08/12/2021",
	}

	registros = [item, item2]
	const [Lista, setLista] = useState(registros)

	

	return (
		<Container color="bg">

			<ListConstructor Lista={Lista} />

			<FloatingButton onPress={() => console.log('a')}>
				<Adicionar width="48" height="48" />
			</FloatingButton>
		</Container>
	)
}

function ListConstructor({Lista}){

	const EmptyListMessage = () => {
		return (
			// Quando a lista estiver vazia
			<Container>
				{/* Image + text */}
				<Mapa width="64" height="64" fill="#FFFFFF" />
				<Text padding="20">Não há nenhum registro cadastrado!</Text>
			</Container>
		);
	};

	const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <ListSeparator/>
    );
  };

	const ItemView = ({Local, Regiao, Data}) => {
    	return (
			<ListItem direction="row">
				<Container flex={3}>
					<Text size="small" weight="bold" align="left">{Local}</Text>
					<Text size="small" align="left">{Regiao}</Text>
				</Container>
				<Container >
					<Text size="small" align='left'>{Data}</Text>
				</Container>
			</ListItem>
    );
  };

	const renderItem = ({ item }) => (
     <ItemView Local={item.Local} Regiao={item.Regiao} Data={item.Data} />
  );

	return(
		<List
			data={Lista}
			keyExtractor={(item) => item.id}
			ItemSeparatorComponent={ItemSeparatorView}
			renderItem={renderItem}
			ListEmptyComponent={EmptyListMessage}
			extraData={Lista}
			style={List}
		/>
	)
}