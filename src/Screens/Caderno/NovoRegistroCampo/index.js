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
    nome: '',
    local: '',
    data: today,
    horario: timestamp,
    anotacao: ''
  });

  const handleChange = e => {
    console.log(e);
    const { name, value } = e.target;
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
        <Text paddingright={20} paddingleft={20} align="left">Nome do campo:</Text>
        <TextInput
          onChangeText={handleChange}
          value={formData.nome}
          placeholder="Campo"
          name='nome'
        />
      {/* {errors.firstName && <Text>This is required.</Text>} */}

      <Text paddingright={20} paddingleft={20} align="left">Nome do local:</Text>
      <TextInput
        onChangeText={handleChange}
        value={formData.local}
        placeholder="Local"
        name='local'
      />
      {/* {errors.firstName && <Text>This is required.</Text>} */}

      <Text paddingright={20} paddingleft={20} align="left">Data:</Text>
      <TextInput
        onChangeText={handleChange}
        value={formData.data}
        placeholder="Data"
        name='data'
      />
      {/* {errors.firstName && <Text>This is required.</Text>} */}

      <Text paddingright={20} paddingleft={20} align="left">Horário:</Text>
      <TextInput
        onChangeText={handleChange}
        value={formData.horario}
        placeholder="Horário"
        name='horario'
      />
      {/* {errors.firstName && <Text>This is required.</Text>} */}

      <Text paddingright={20} paddingleft={20} align="left">Anotações:</Text>
      <TextInput
        onChangeText={handleChange}
        value={formData.anotacao}
        placeholder="Anotação"
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

