import React from "react";
import {
	Container,
	Text,
	Image,
	ScrollView,
	AnimalInfoImage
} from "../../../Styles/index";

const animalImage = require('../../../Assets/images/image1.png')

export default ({navigation, route}) => {
	const DadosRota = route.params;
	//faz a requisição para os dados do 
	
	return (
		<ScrollView color="bg">
			<Text weight="bold" padding={20} paddingbottom={24}>Pegada</Text>

			<AnimalInfoImage imageSource={DadosRota.image} height={400} />

			<Container>
				<Text align='left' weight="bold" paddingbottom={20}>
					Pegada Anterior(PA):
						<Text weight='normal'>
							{DadosRota.pegadaAnterior}
						</Text>
					</Text>
				<Text align='left' weight="bold" paddingbottom={20}
				>Pegada Posterior(PP): 
					<Text weight='normal'>
						{DadosRota.pegadaPosterior}
					</Text>
				</Text>
				<Text align='left' weight="bold" paddingbottom={20}>
					Passada: 
					<Text weight='normal'>
						{DadosRota.passada}
					</Text>
				</Text>
				<Text align='left' weight="bold" paddingbottom={20}>
					Fezes: 
					<Text weight='normal'>
						{DadosRota.fezes}
					</Text>
				</Text>
			</Container>
		</ScrollView>
	)
}

