import React, { useEffect } from "react";
import {
	Container,
	Text,
	AnimalInfoImage,
	ScrollView,
	Image
} from "../../../Styles/index";

const animalImage = require('../../../Assets/images/image1.png')

export default ({navigation, route}) => {
	const DadosRota = route.params;
	
	const AnimalData1 = {
		image: DadosRota.image,
		familia: DadosRota.familia,
		Ordem: DadosRota.ordem,
		Nivel: DadosRota.ameaca,
		InfoGeral: DadosRota.info,
		comportamento: DadosRota.comportamento,
		habitos: DadosRota.habitos,
		habitats: DadosRota.habitats
	}

	return (
		<ScrollView color="bg" >
			<Text weight="bold" padding={20} style={{ fontSize: 30 }}>Informações Gerais</Text>

			<AnimalInfoImage imageSource={ AnimalData1.image } height={300}/>
			
			<Container paddingleft={24} paddingright={24}>
				<Container paddingbottom={24}>
					<Text align='left'>Família:  {AnimalData1.familia}</Text>
					<Text align='left'>Ordem:  {AnimalData1.Ordem}</Text>
					<Text align='left'>Nível de ameaça:  {AnimalData1.Nivel}</Text>
				</Container>

				<Text align='left' weight="bold">Informações Gerais: </Text>
				<Text align='left' paddingbottom={20}>Comportamento:  {AnimalData1.comportamento}</Text>
				<Text align='left' paddingbottom={20}>Hábitos alimentares:  {AnimalData1.habitos}</Text>
				<Text align='left' paddingbottom={20}>Habitats:  {AnimalData1.habitats}</Text>

			</Container>
		</ScrollView>
	)
}

