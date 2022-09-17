import React, { useState, useEffect } from "react";
import { Container, 
				 Text, 
				 FloatingButton, 
				 List, 
				 ListItem, 
				 ListSeparator, 
				 BottomButton
				 } from "../../../Styles/index";

import Mapa from '../../../Assets/mapa';
import Adicionar from '../../../Assets/add_icon';

// bd
import { getCampos, exportCamposAsCSV } from '../../../API/Api.ts';

//helpers
import { saveFile, shareFile } from "../../../Helpers/SaveShareCsv";

export default function ({ navigation }) {
	const [Lista, setLista] = useState([]);
	const [selectedItems, setSelectedItems] = useState([]);
	const [isSelecting, setIsSelecting] = useState(false);

	useEffect(() => {
		awaitCampos();
	}, [])
	
	const awaitCampos = async () => {
		const campos = await getCampos();
		setLista(campos);
	};

	const exportSelected = async () => {
		const res = await exportCamposAsCSV(selectedItems);
		const fileURI = await saveFile(res);
		await shareFile(fileURI);
	};

	return (
		<Container color="bg">

			<ListConstructor 
				Lista={Lista} 
				navigation={navigation} 
				awaitCampos={awaitCampos}
				setSelectedItems={setSelectedItems} 
				selectedItems={selectedItems}
				setIsSelecting={setIsSelecting}
				isSelecting={isSelecting}
			/>

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
				: <FloatingButton onPress={() => navigation.push('Novo Campo')}>
						<Adicionar width="48" height="48" />
					</FloatingButton>
			}
		</Container>
	)
}

function ListConstructor({Lista, navigation, awaitCampos, setSelectedItems, selectedItems, setIsSelecting, isSelecting}){
	const [isRefreshing, setIsRefreshing] = useState(false);

	const onRefresh = async () => {
		setIsRefreshing(true);
		await awaitCampos();
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
					[selectedItems.includes(item.id) && {
						backgroundColor: '#B19B4E',
						borderRadius: 20,
						padding: 10,
					},
					{
						height: 60
					}]
				} 
				direction="row" 
				onPress={ isSelecting ? () => handleLongPress({item}) : () => navigation.navigate("Coletas de Campo", {
					screen: 'Coletas',
					params: {
						campId: item.id,
						campo: item.local
					}
				})}
				onLongPress={() => handleLongPress({item})}
				>
					<Container flex={3}>
						<Text size="small" weight="bold" align="left">{item.local}</Text>
						<Text size="small" align="left">{item.regiao}</Text>
					</Container>
					<Container >
						<Text size="small" align='left'>{item.data}</Text>
						<Text size="small" align='left'>{item.horario}</Text>
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
			renderItem={ItemView}
			ListEmptyComponent={EmptyListMessage}
			extraData={Lista}
			style={List}
			onRefresh={() => onRefresh()}
    	refreshing={isRefreshing}
		/>
	)
}