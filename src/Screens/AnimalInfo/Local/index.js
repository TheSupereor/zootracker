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
			<AnimalInfoImage imageSource={DadosRota.regionImage} height={300}/>

			<Container margin={20} paddingbottom={30}>
				{/* <Text>{DadosRota.estado || ''}</Text> */}
				<Text paddingbottom={24} align="left">{DadosRota.localizacao}</Text>
			</Container>
		</ScrollView>
	)
}

