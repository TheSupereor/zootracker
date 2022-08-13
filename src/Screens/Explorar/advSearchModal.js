import React from "react";
import {
	Container,
	Text,
	AnimalInfoImage,
	ScrollView,
	Image
} from "../../Styles/index";


export default ({navigation, route}) => {

  const [formData, setFormData] = useState({
    especie: '',
    referencia: '',
    data: today,
    medicoesPosteriorConjunto: '',
    medicoesPosteriorAlmofada: '',
    medicoesPosteriorDigito: '',
    medicoesAnteriorConjunto: '',
    medicoesAnteriorAlmofada: '',
    medicoesAnteriorDigito: '',
    garras: false,
    coletor: '',
    anotacao: ''
  });

  const handleChange = ( name, value ) => {
    setFormData(prevState => ({
        ...prevState,
        [name]: value
    }));
  };

  const sendData = () => {
    console.log(formData);
    // enviar pra rota com parametros
    navigation.navigate("Explorar", formData );
  }

	return (
    <ScrollView color="bg">
      <Container marginbottom={20} marginright={20} marginleft={20}>
        <Text paddingright={20} paddingleft={20} align="left">Espécie:</Text>
        <TextInput
          onChangeText={(text) => handleChange('especie', text)}
          value={formData.especie}
          placeholder="Espécie"
          name='especie'
        />
      {/* {errors.firstName && <Text>This is required.</Text>} */}

        <Text paddingright={20} paddingleft={20} align="left">Ponto de referência:</Text>
        <TextInput
          onChangeText={(text) => handleChange('referencia', text)}
          value={formData.referencia}
          placeholder="Referência"
          name='referencia'
        />
      {/* {errors.firstName && <Text>This is required.</Text>} */}

        <Text paddingright={20} paddingleft={20} align="left">Data:</Text>
        <TextInput
          onChangeText={(text) => handleChange('data', text)}
          value={formData.data}
          placeholder="Data"
          name='data'
        />
        {/* {errors.firstName && <Text>This is required.</Text>} */}

        <Text paddingright={20} paddingleft={20} align="left">Medições:</Text>
        <Text paddingright={20} paddingleft={20} align="left">Pata Anterior:</Text>
        <TextInput
          onChangeText={(text) => handleChange('medicoesAnteriorAlmofada', text)}
          value={formData.medicoesAnteriorAlmofada}
          placeholder="Almofada"
          name='medicoesAnteriorAlmofada'
        />

        {/* <Text paddingright={20} paddingleft={20} align="left">Pata Anterior:</Text> */}
        <TextInput
          onChangeText={(text) => handleChange('medicoesAnteriorConjunto', text)}
          value={formData.medicoesAnteriorConjunto}
          placeholder="Conjunto"
          name='medicoesAnteriorConjunto'
        />
        
        <TextInput
          onChangeText={(text) => handleChange('medicoesAnteriorDigito', text)}
          value={formData.medicoesAnteriorDigito}
          placeholder="Dígito"
          name='medicoesAnteriorDigito'
        />

        <Text paddingright={20} paddingleft={20} align="left">Medições:</Text>
        <Text paddingright={20} paddingleft={20} align="left">Pata Posterior:</Text>
        <TextInput
          onChangeText={(text) => handleChange('medicoesAnteriorAlmofada', text)}
          value={formData.medicoesPosteriorAlmofada}
          placeholder="Almofada"
          name='medicoesAnteriorAlmofada'
        />

        {/* <Text paddingright={20} paddingleft={20} align="left">Pata Anterior:</Text> */}
        <TextInput
          onChangeText={(text) => handleChange('medicoesPosteriorConjunto', text)}
          value={formData.medicoesPosteriorConjunto}
          placeholder="Conjunto"
          name='medicoesPosteriorConjunto'
        />
        
        <TextInput
          onChangeText={(text) => handleChange('medicoesPosteriorDigito', text)}
          value={formData.medicoesPosteriorDigito}
          placeholder="Dígito"
          name='medicoesPosteriorDigito'
        />

        <Text paddingright={20} paddingleft={20} align="left">Anotações:</Text>
        <TextInput
          onChangeText={(text) => handleChange('anotacao', text)}
          value={formData.anotacao}
          placeholder="Anotações"
          name='anotacao'
        />
      {/* {errors.firstName && <Text>This is required.</Text>} */}
      </Container>
    
      <BottomButton onPress={() => sendData()}>
        <Text weight="bold" color="white">Procurar</Text>
      </BottomButton>
		</ScrollView>
	)
}

