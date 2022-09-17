import React, { useState, useEffect } from "react";
import { saveFile, shareFile } from "../../../Helpers/SaveShareCsv";

import { Container, 
				 Text, 
				 FloatingButton, 
				 List, 
				 ListItem, 
				 ListSeparator, 
				 BottomButton,
				 } from "../../../Styles/index";
// bd
import { getColetas, exportColetasAsCSV } from '../../../API/Api.ts';

import Mapa from '../../../Assets/mapa.svg';
import Adicionar from '../../../Assets/add_icon.svg';

export default function ({ navigation, route }) {
	const { campId, campo } = route.params;

	const [Lista, setLista] = useState([]);
	const [selectedItems, setSelectedItems] = useState([]);
	const [isSelecting, setIsSelecting] = useState(false);

	useEffect(() => {
		getColetasId();
	}, []);
	
	const getColetasId = async () => {
		const coletas = await getColetas(campId);
		setLista(coletas);
	};

	const ListHeader = () => {
		return(
			<Text size>Campo: {JSON.stringify(campo)}</Text>
		)
	};

	const exportSelected = async () => {
		const res = await exportColetasAsCSV(selectedItems);
		const fileURI = await saveFile(res);
		await shareFile(fileURI);
	};

	return (
		<Container color="bg">

			<Container>
				<ListConstructor 
					Lista={Lista} 
					Header={ListHeader} 
					getColetasId={getColetasId} 
					setSelectedItems={setSelectedItems} 
					selectedItems={selectedItems}
					setIsSelecting={setIsSelecting}
					isSelecting={isSelecting}
				/>
			</Container>

			{
				isSelecting 
				? <BottomButton style={{
						height: 60,
						position: 'absolute',
						bottom: 0,
						zIndex: 1
					}} onPress={() => exportSelected()}>
						<Text color="light">Exportar</Text>
					</BottomButton>
				: <FloatingButton onPress={() => navigation.push('Nova Coleta', { campId, campo } )}>
						<Adicionar width="48" height="48" />
					</FloatingButton>
			}
			
		</Container>
	)
};

function ListConstructor({Lista, Header, getColetasId, setSelectedItems, selectedItems, setIsSelecting, isSelecting}){
	const [isRefreshing, setIsRefreshing] = useState(false);

	const onRefresh = async () => {
		setIsRefreshing(true);
		await getColetasId();
		setIsRefreshing(false);
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
      <ListSeparator/>
    );
  };
	
	const ItemView = ({ item }) => {
    return (
			<ListItem style={
				selectedItems.includes(item.id) && {
					backgroundColor: '#B19B4E',
					borderRadius: 20,
					padding: 10
				}
			} 
			direction="row"
			onPress={isSelecting ? () => handleLongPress({item}) : ''}
			onLongPress={() => handleLongPress({item})}
			>
				<Container flex={3}>
					<Text size="small" weight="bold" align="left">{item.especie}</Text>
					<Text size="small" align="left">{item.referencia}</Text>
				</Container>
				<Container >
					<Text size="small" align='left'>{item.created_at.substring(0, 10)}</Text>
				</Container>
			</ListItem>
    );
  };

	const handleLongPress = ({item}) => {
		selectItems(item);
	};

	useEffect(() => {
		if(selectedItems.length == 0) setIsSelecting(false)
		else setIsSelecting(true);
	}, [selectedItems]);

	const selectItems = item => {
    if (selectedItems.includes(item.id)) {
      const newListItems = selectedItems.filter(listItem => listItem !== item.id);
      return setSelectedItems([...newListItems]);
    }
    setSelectedItems([...selectedItems, item.id]);
  };

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
			renderItem={ItemView}
			ListEmptyComponent={EmptyListMessage}
			extraData={Lista}
			style={List}
			onRefresh={() => onRefresh()}
    	refreshing={isRefreshing}
		/>
	)
}