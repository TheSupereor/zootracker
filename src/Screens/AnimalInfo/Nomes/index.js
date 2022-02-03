import React from "react";
import { Container, 
        Text,
        Image  } from "../../../Styles/index";


export default () => {
	
	
	return (
		<Container color="bg">
			<Text>Pegada</Text>
            {/* <Image source={require('../../../Assets/images/image 1.png')}/> */}
            <Container>
                <Text weight>Pegada Anterior(PA):</Text>
                <Text weight>Pegada Posterior(PP):</Text>
                <Text weight>Passada: <Text>Pode haver sobreposição parcial ou total das pegadas anterior e posterior. As passadas muitas vezes apresentam os conjuntos dianteiro/traseiro apontados para fora da trilha de pegadas.</Text></Text>
                <Text weight>Fezes: <Text>São cilíndricas, com uma extremidade afilada e outra larga e côncava. O comprimento é de 1,2 cm e o diâmetro de 0,7 cm. A cor é verde escuro. São encontradas em pilhas fecais com dezenas de pelotas, às vezes em latrinas.</Text></Text>
            </Container>
		</Container>
	)
}

