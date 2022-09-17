import React, { useState, useEffect } from "react";
import { Container, 
				 Text, 
				 FloatingButton, 
				 List, 
				 ListItem,
				 ListSeparator,
				 DropdownButtonStyle,
				 TextInput,
				 View
				} from "../../Styles/index";

import Mapa from '../../Assets/mapa';
import Procurar from '../../Assets/search';
import Filtros from '../../Assets/search_advanced';
import { getAnimais, getAnimal2Byid, getDadosAnimaisByid } from '../../API/Api.ts';
import { ActivityIndicator } from 'react-native';

import DropDownArrowDown from '../../Assets/dropdownarrow';
import DropDownArrowUp from '../../Assets/dropdownarrowup';

import SelectDropdown from 'react-native-select-dropdown';

export default ( { navigation, route } ) => {
  if(route.params){
    //fazer filtragem
		const DadosRota = route.params;
    console.log(DadosRota);
  };

	// registros = [{
	// 	id: 1454532454335,
	// 	CienName: 'Mazama americana',
	// 	Name: 'Veado-mateiro'
	// }, {
	// 	id: 1345456546,
	// 	CienName: 'Mazama americana',
	// 	Name: 'Veado-mateiro'
	// }]
	const [Lista, setLista] = useState([]);
	const [listaFiltrada, setListaFiltrada] = useState([]);

	const [search, setSearch] = useState('');

	const filters = ['Ordem Taxonômica', 'Ordem Alfabética', 'Localização'];

	useEffect(() => {
		if(search !== ''){
			setListaFiltrada(Lista.filter((item) => {
				item.cienName.toLowerCase() == search.toLowerCase();
			}));
		}else{
			setListaFiltrada(Lista);
		}
	}, [search]);

	useEffect(() => {
		setListaFiltrada(Lista);
	}, [Lista]);

	// Fazer requisição para banco de dados
	useEffect(() => {
		getAnimaisFunction();
	}, []);

	const getAnimaisFunction = async () => {
		const animais = await getAnimais();
		setLista(animais);
	};

	return (
		<Container color="bg">
			<View style={{
				flexDirection: 'row',
				width: 300,
				justifyContent: 'center',
				padding: 10,
				paddingLeft: 0,
				marginBotto: -10
			}}>
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
				
				{
					Lista != []
					? <ExploreList Lista={listaFiltrada}  navigation={navigation} />
					: <ActivityIndicator size="small" color="#0000ff" />
				}

				<FloatingButton>
					<Procurar width="48" height="48" />
				</FloatingButton>

			</Container>
		</Container>
	)
}

function ExploreList({ Lista, navigation }){

	const goToAnimalInfoPage = async (item) => {
		console.log('item', item);
		const itemzinho = item;
		const data1 = await getAnimal2Byid(item.id);
    const data2 = await getDadosAnimaisByid(item.id);

		navigation.push('AnimalInfo', {
			screen: 'Informações',
			AnimalData: itemzinho,
			dados1: data1,
			dados2: data2
		})
	};

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
		console.log(props);
		return (
			// Flat List Item
			<ListItem onPress={() => goToAnimalInfoPage(props.item)}>
				<Text size="small" weight="bold" align="left" style={{ fontStyle: 'italic' }}>{props.cienName}</Text>
				<Text size="small" align="left">{props.names.join(', ')}</Text>
			</ListItem >
		);
	};

	const renderItem = ({ item }) => (
		<ItemView
			cienName={item.cienName}
			names={item.names}
			id={item.id}
			item={item}
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