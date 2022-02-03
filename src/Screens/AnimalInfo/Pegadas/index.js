import React from "react";
import { Container, 
        Text,
        List,
        Image  } from "../../../Styles/index";


export default () => {
	
    const item = {
		id: 1454532454335,
		CienName: 'Mazama americana',
        Name: 'Veado-mateiro'
	}

    const item2 = {
		id: 1345456546,
		CienName: 'Mazama americana',
        Name: 'Veado-mateiro'
	}

    const nameList = [item, item2]

    const EmptyListMessage = () => {
		return (
			// Quando a lista estiver vazia
            <Text padding="20">Não há nenhum registro cadastrado!</Text>
		);
	};
	
	return (
		<Container color="bg">
			{/* <List
        data={nameList}
				keyExtractor={item => item.id}
				ListEmptyComponent={EmptyListMessage}
            /> */}
		</Container>
	)
}

