import React, { useState } from "react";
import { Container, 
				 Text, 
				 FloatingButton, 
				 List, 
				 ListItem, 
				 ListSeparator, 
				 View, 
				 ScrollView,
				 } from "../../../Styles/index";

import Mapa from '../../../Assets/mapa.svg'
import Adicionar from '../../../Assets/add_icon.svg'

export default function ({ navigation, route }) {
	const { campId, campo } = route.params;
	
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
	const [Lista, setLista] = useState(registros);

	const ListHeader = () => {
		return(
			<Text size>{JSON.stringify(campo)}</Text>
		)
	};

	return (
		<Container color="bg">

			<ListConstructor Lista={Lista} Header={ListHeader} />

			<FloatingButton onPress={() => navigation.push('Nova Coleta')}>
				<Adicionar width="48" height="48" />
			</FloatingButton>
		</Container>
	)
}

function ListConstructor({Lista, Header}){

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

	const ItemView = ({especie, referencia, Data}) => {
    	return (
			<ListItem direction="row">
				<Container flex={3}>
					<Text size="small" weight="bold" align="left">{especie}</Text>
					<Text size="small" align="left">{referencia}</Text>
				</Container>
				<Container >
					<Text size="small" align='left'>{Data}</Text>
				</Container>
			</ListItem>
    );
  };

	const renderItem = ({ item }) => (
     <ItemView especie={item.especie} referencia={item.referencia} Data={item.Data} />
  );

	return(
		<List
			data={Lista}
			keyExtractor={(item) => item.id}
			ItemSeparatorComponent={ItemSeparatorView}
			ListHeaderComponent={Header}
			ListHeaderComponentStyle={{
				paddingVertical: 10,
				marginTop: 5
			}}
			renderItem={renderItem}
			ListEmptyComponent={EmptyListMessage}
			extraData={Lista}
			style={List}
		/>
	)
}