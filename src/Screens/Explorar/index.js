import React, { useState, useEffect } from "react";
import { Container, 
				 Text, 
				 FloatingButton, 
				 List, 
				 ListItem,
				 ListSeparator,
				 DropdownButtonStyle,
				 TextInput
				} from "../../Styles/index";

import Mapa from '../../Assets/mapa'
import Procurar from '../../Assets/search'
import Filtros from '../../Assets/search_advanced'

import DropDownArrowDown from '../../Assets/dropdownarrow'
import DropDownArrowUp from '../../Assets/dropdownarrowup'

import SelectDropdown from 'react-native-select-dropdown'

export default ( { navigation } ) => {
	console.log('Teste');
	const DadosRota = route.params;
  if(DadosRota){
    //fazer filtragem
    console.log(DadosRota);
  };

	registros = [{
		id: 1454532454335,
		CienName: 'Mazama americana',
		Name: 'Veado-mateiro'
	}, {
		id: 1345456546,
		CienName: 'Mazama americana',
		Name: 'Veado-mateiro'
	}]
	const [Lista, setLista] = useState(registros);
	const [listaFiltrada, setListaFiltrada] = useState(registros);

	const [search, setSearch] = useState('');

	const filters = ['Ordem Taxonômica', 'Ordem Alfabética', 'Localização'];

	useEffect(() => {
		if(search !== ''){
			setListaFiltrada(Lista.filter((item) => {
				item.Name.toLowerCase() == search.toLowerCase();
			}));
		}else{
			setListaFiltrada(registros);
		}
	}, [search]);

	// Fazer requisição para banco de dados
	

	return (
		<Container color="bg">
			<View>
				<TextInput 
					onChangeText={text => setSearch(text)}
					placeholder="Pesquise por nome"
					name='nome'
				/>
				<Filtros width="36" height="36" onPress={() => {
					DadosRota ? setListaFiltrada(Lista) : navigation.navigate('AdvSearch')
				}}/>
			</View>

			<SelectDropdown
				data={ filters }
				defaultButtonText="Ordenar"
				onSelect={(selectedItem, index) => {
					console.log(selectedItem, index)
				}}
				buttonTextAfterSelection={(selectedItem, index) => {
					// text represented after item is selected
					// if data array is an array of objects then return selectedItem.property to render after item is selected
					return selectedItem
				}}
				rowTextForSelection={(item, index) => {
					// text represented for each item in dropdown
					// if data array is an array of objects then return item.property to represent item in dropdown
					return item
				}}
				renderDropdownIcon={(isOpened) => {
					return (
							isOpened ? <DropDownArrowUp width="36" height="36" /> : <DropDownArrowDown width="36" height="36" />
					);
				}}
				buttonStyle={{
					backgroundColor: "transparent",
					marginTop: 10,
					width: '80%',
					height: 30,
					borderWidth: 1,
					borderColor: "#B4A982"
				}}
				dropdownStyle={{
					backgroundColor: "#EEEBDB",
					marginTop: -26,
					width: '80%',
					justifyContent: 'center'
				}}
        rowStyle={{
					backgroundColor: "#EEEBDB",
					borderBottomColor: "#B4A982"
				}}
        //rowTextStyle={DropdownButtonStyle}
			/>
			<Container>
				
				<ExploreList Lista={listaFiltrada}  navigation={navigation} />

				<FloatingButton>
					<Procurar width="48" height="48" />
				</FloatingButton>

			</Container>
		</Container>
	)
}

function ExploreList({ Lista, navigation }){

	const [actualAnimal, setActualAnimal] = useState('');

	useEffect(() => {
		//console.log(actualAnimal)
		if(actualAnimal != ''){
			navigation.push('AnimalInfo', {
				screen: 'Informações',
				AnimalData: actualAnimal 
			})
		}
	}, [actualAnimal]);
	

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
			<ListSeparator />
		);
	};

	const ItemView = ( props ) => {
		return (
			// Flat List Item
			<ListItem onPress={() => setActualAnimal(props.id)}>
				<Text size="small" weight="bold" align="left" style={{ fontStyle: 'italic' }}>{props.CienName}</Text>
				<Text size="small" align="left">{props.Name}</Text>
			</ListItem >
		);
	};

	const renderItem = ({ item }) => (
		<ItemView
			CienName={item.CienName}
			Name={item.Name}
			id={item.id}
		/>
	)

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