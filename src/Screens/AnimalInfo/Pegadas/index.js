import React from "react";
import { FlatList } from "react-native-gesture-handler";
import {
	Container,
	Text,
	Image,
	ScrollView,
	AnimalInfoImage,
	View
} from "../../../Styles/index";


export default ({navigation, route}) => {
	const DadosRota = route.params;
	const vestigiosImages = DadosRota.vestigiosImages;
	//faz a requisição para os dados do 
	
	return (
		<ScrollView color="bg" height={600} padding={20}>
			<Text weight="bold" padding={20}  style={{ fontSize: 30 }}>Vestígios</Text>

			<Container>
				{
					vestigiosImages != [] 
					? <FlatList
							data={vestigiosImages}
							renderItem={({item}) => {
								return (
									<AnimalInfoImage imageSource={item} height={280} />
								)}
							}
							centerContent
							horizontal
							showsHorizontalScrollIndicator
							key={(item, index) => index}
							style={{
								marginTop: 10,
							}}
						/>
					: <AnimalInfoImage imageSource={DadosRota.image} height={400} />
				}
			</Container>

			<Container paddingtop={10}>
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

