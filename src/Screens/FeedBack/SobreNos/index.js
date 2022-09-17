import React from "react";
import {
	Container,
	Text,
	ListItem,
	ScrollView,
	Image
} from "../../../Styles/index";

const logoUfc = require('../../../Assets/images/brasaoufc.png')

export default () => {


	return (
		<Container color="bg">
			<ScrollView >
				<Container paddingtop={15}>	
					<Image source={logoUfc} style={{
							height: 260,
							width: 150,
							marginBottom: 10
					}}/>
				</Container>
				<Container paddingleft={16} paddingright={16}>
					<Text align='justify' paddingbottom={20} paddingtop={20}>Esse projeto faz parte do Programa de Pós- Graduação em Sistemática, Uso e Conservação da Biodiversidade (PPGSIS), do Centro de Ciências e vinculado ao Departamento de Biologia da Universidade Federal do Ceará -UFC. Além da disciplina Projeto Integrado I da graduação em Sistemas e Mídias Digitais.</Text>
					<Text align='left' paddingbottom={20}><Text weight="bold">Idealização e conteúdo: </Text>Mestranda Karol</Text>
					<Text align='left' paddingbottom={20}><Text weight="bold">Professor Orientador: </Text>PhD. Hugo Fernandes-Ferreira.</Text>
					<Text align='left' paddingbottom={20}><Text weight="bold">Orientadora: </Text>Inga Saboia.</Text>

					<Text align='left' paddingbottom={20}><Text weight="bold">Desenvolvedores: </Text>
						Ana Eloise,
						Brunno Raphael,
						Levy Cristian,
						Narciso Ferreira,
						Thais Gomes
						</Text>
				</Container>
			</ScrollView>
		</Container>
	)
}

