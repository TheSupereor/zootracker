import React from "react";
import {
	Container,
	Text,
	Image,
	AnimalInfoImage,
	ScrollView
} from "../../../Styles/index";
const animalImage = require('../../../Assets/images/image2.png')

export default ({ navigation, route }) => {
	//console.log({navigation, route});
	const DadosRota = route.params;

	return (
		<ScrollView color="bg" >
			<Text weight="bold" padding={20} paddingbottom={24}>Localização</Text>

			<AnimalInfoImage imageSource={animalImage} height={260}/>

			<Container padding={20} paddingbottom={30}>
				<Text>Amplamente distribuída em todo o território nacional</Text>
			</Container>
		</ScrollView>
	)
}

