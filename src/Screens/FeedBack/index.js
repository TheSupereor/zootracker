import React from "react";
import {
	Container,
	Text,
	ListItem,
	ScrollView,
	Image,
} from "../../Styles/index";

import Mapa from '../../Assets/mapa'
const logoUfc = require('../../Assets/images/brasaoufc.png')

export default ({ navigation }) => {


	return (
		<Container color="bg">
			<ScrollView>
				<ListItem onPress={() => navigation.push('Sobre Nós')}>
					<Text>Sobre nós</Text>
				</ListItem>
				<ListItem onPress={() => navigation.push('Glossario')}>
					<Text>Glossário</Text>
				</ListItem>
				<ListItem onPress={() => navigation.push('Sobre Nós')}>
					<Text>Relatar um problema</Text>
				</ListItem>

				<Container margintop={30} marginBottom={20} paddingleft={16} paddingright={16}>
					<Image source={ logoUfc } style={{
						height: 260,
						width: 150,
						marginBottom: 10
					}}/>
					<Text align='justify' style={{
						padding: 15,
					}}>Um produto do Programa de Pós-Graduação em Sistemática, Uso e Conservação da Biodiversidade (PPGSIS) e da Graduação em Sistemas e Mídias Digitais.</Text>
				</Container>
			</ScrollView>
		</Container>
	)
}

