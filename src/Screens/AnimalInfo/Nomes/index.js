import React, {useState} from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
	Container,
	Text,
	ScrollView,
	List, 
	ListItem,
	ListSeparator,
} from "../../../Styles/index";
import { getAnimal2Byid, getAnimalByName } from '../../../API/Api.ts';


export default ({ navigation, route }) => {
	const DadosRota = route.params;

	const [Lista, setLista] = useState(DadosRota.names);

	return (
		<Container color="bg">
			<ExploreList Lista={Lista}/>
		</Container>
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
			<ListItem onPress={() => goToAnimalInfoPage(props.item)}>
				<Text size="small" weight="bold" align="left" style={{ fontStyle: 'italic', color:'red' }}>{props.item}</Text>
				{/* <Text size="small" align="left" style={{ color:'red' }}>{props.Name}</Text> */}
			</ListItem >
		);
	};

	const goToAnimalInfoPage = async (name) => {
		const data1 = await getAnimalByName(name);
    const data2 = await getAnimal2Byid(data1.id);

		navigation.push('AnimalInfo', {
			screen: 'Informações',
			dados1: data1,
			dados2: data2
		})
	}

	return(
		<List
			data={Lista}
			keyExtractor={(item, index) => index}
			renderItem={ItemView}
			ListEmptyComponent={EmptyListMessage}
			ListHeaderComponent={(
				<Text weight="bold" padding={20} style={{ fontSize: 30 }}>Nomes</Text>
			)}
			extraData={Lista}
			style={List}
		/>
	)
}