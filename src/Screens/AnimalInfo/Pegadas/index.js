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

			<AnimalInfoImage imageSource={animalImage} height={400} />

			<Container>
				<Text align='left' weight="bold" paddingbottom={20}>
					Pegada Anterior(PA):
						<Text weight='normal'>
							Pode haver sobreposição parcial ou total das pegadas anterior e posterior. As passadas muitas vezes apresentam os conjuntos dianteiro/traseiro apontados para fora da trilha de pegadas.
						</Text>
					</Text>
				<Text align='left' weight="bold" paddingbottom={20}
				>Pegada Posterior(PP): 
					<Text weight='normal'>
						Pode haver sobreposição parcial ou total das pegadas anterior e posterior. As passadas muitas vezes apresentam os conjuntos dianteiro/traseiro apontados para fora da trilha de pegadas.
					</Text>
				</Text>
				<Text align='left' weight="bold" paddingbottom={20}>
					Passada: 
					<Text weight='normal'>
						Pode haver sobreposição parcial ou total das pegadas anterior e posterior. As passadas muitas vezes apresentam os conjuntos dianteiro/traseiro apontados para fora da trilha de pegadas.
					</Text>
				</Text>
				<Text align='left' weight="bold" paddingbottom={20}>
					Fezes: 
					<Text weight='normal'>
						São cilíndricas, com uma extremidade afilada e outra larga e côncava. O comprimento é de 1,2 cm e o diâmetro de 0,7 cm. A cor é verde escuro. São encontradas em pilhas fecais com dezenas de pelotas, às vezes em latrinas.
					</Text>
				</Text>
			</Container>
		</ScrollView>
	)
}

