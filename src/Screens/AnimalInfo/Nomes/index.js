import React, {useState} from "react";
import {
	Container,
	Text,
	ScrollView,
	List, 
	ListItem,
	ListSeparator,
} from "../../../Styles/index";

const animalImage = require('../../../Assets/images/image1.png')

export default ({ navigation, route }) => {
	const DadosRota = route.params;

	const [Lista, setLista] = useState(DadosRota.names);

	return (
		<>
		<Container color="bg">
			<Text weight="bold" padding={20}>Nomes</Text>

			<ExploreList Lista={Lista}/>
		</Container>
		</>
	)
}

function ExploreList({ Lista }){

	const EmptyListMessage = () => {
		return (
			// Quando a lista estiver vazia
			<Container>
				<Text padding="20">Não há nenhum registro cadastrado!</Text>
			</Container>
		);
	};

	const ItemView = ( props ) => {
		return (
			// Flat List Item
			<ListItem >
				<Text size="small" weight="bold" align="left" style={{ fontStyle: 'italic', color:'red' }}>{props}</Text>
				{/* <Text size="small" align="left" style={{ color:'red' }}>{props.Name}</Text> */}
			</ListItem >
		);
	};

	const renderItem = ({ item }) => (
		<ItemView
			CienName={item}
			// Name={item.Name}
			// id={item.id}
		/>
	)

	return(
		<List
			data={Lista}
			keyExtractor={(item, index) => index}
			renderItem={renderItem}
			ListEmptyComponent={EmptyListMessage}
			extraData={Lista}
			style={List}
		/>
	)
}