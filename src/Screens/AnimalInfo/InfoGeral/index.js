import React from "react";
import {
	Container,
	Text,
	AnimalInfoImage,
	ScrollView,
	Image
} from "../../../Styles/index";

const animalImage = require('../../../Assets/images/image1.png')

export default ( props ) => {
	//console.log(props)
	//console.log(props.route.params)
	// const AnimalData = navigation.getParams()
	// console.log(AnimalData)
	// navigation.setOptions({title: AnimalData})

	const AnimalData1 = {
		Familia: 'Cervidae',
		Ordem: 'Artiodactyla',
		Nivel: 'Pouco preocupante(IUCN)',
		InfoGeral: 'Possuem comprimento total do corpo de aproximadamente 114 cm e peso variando de 17 a 23 kg.',
		Comportamento: 'São observados solitários, mas também vistos em pares, predominantes noturnos e crepusculares',
		HabitAlim: 'Sua alimentação é composta basicamente por frutos, flores, fungos, gramíneas, leguminosas e outros tipos de arbustos e ervas',
		Habitats: 'Habitando formações vegetais abertas e densas, sendo mais flexível quanto à área de uso do que M. Americana.'
	}

	return (
		<ScrollView color="bg" >
			<Text weight padding={20} paddingbottom={24}>Informações Gerais</Text>

			{/* <Image source={require('../../../Assets/images/image1.png')} /> */}
			<AnimalInfoImage imageSource={ animalImage } />
			
			<Container paddingleft={24} paddingright={24}>
				<Container paddingbottom={24}>
					<Text align='left'>Família: {AnimalData1.Familia}</Text>
					<Text align='left'>Ordem: {AnimalData1.Ordem}</Text>
					<Text align='left'>Nível de ameaça: {AnimalData1.Nivel}</Text>
				</Container>

				<Text align='left' weight>Informações Gerais: </Text>
				<Text align='left' paddingbottom={20}>Comportamento: {AnimalData1.Comportamento}</Text>
				<Text align='left' paddingbottom={20}>Hábitos alimentares: {AnimalData1.HabitAlim}</Text>
				<Text align='left' paddingbottom={20}>Habitats: {AnimalData1.Habitats}</Text>

			</Container>
		</ScrollView>
	)
}

