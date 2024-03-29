import React, {useState} from "react";
import { useForm, Controller } from "react-hook-form";

import {
	Container,
	Text,
	ScrollView,
  AnimalInfoImage,
  TextInput,
  BottomButton
} from "../../../Styles/index";

//import Mapa from '../../Assets/mapa'
const animalImage = require('../../../Assets/images/image1.png')

export default () => {
  var todayDate = new Date();
  var dd = String(todayDate.getDate()).padStart(2, '0');
  var mm = String(todayDate.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = todayDate.getFullYear();
  const today = dd + '/' + mm + '/' + yyyy;

  var hours = String(todayDate.getHours())
  var minutes = String(todayDate.getMinutes());
  const timestamp = hours + ':' + minutes;

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
    console.log(formData)
  }

	return (
    <ScrollView color="bg">
      <Container>
        <AnimalInfoImage imageSource={ animalImage } height={400}/>
      </Container>

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
        <Text weight="bold" color="white">Salvar</Text>
      </BottomButton>
    </ScrollView>
	)
}

