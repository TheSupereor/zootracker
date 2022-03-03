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

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      nome: '',
      local: '',
      data: today,
      horario: timestamp,
      anotacao: ''
    }
  });
  const onSubmit = data => console.log(data);


	return (
    <ScrollView color="bg">
      <Container>
        <AnimalInfoImage imageSource={ animalImage } height={400}/>
      </Container>

      <Container marginbottom={20} marginright={20} marginleft={20}>
        <Text paddingright={20} paddingleft={20} align="left">Nome do campo:</Text>
        <Controller
        control={control}
        rules={{
         required: {
           value: true,
           message: 'Precisa de um nome!'
         },
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            onChangeText={onChange}
            value={value}
            placeholder="Campo"
          />
        )}
        name="nome"
      />
      {/* {errors.firstName && <Text>This is required.</Text>} */}

      <Text paddingright={20} paddingleft={20} align="left">Nome do local:</Text>
        <Controller
        control={control}
        rules={{
         required: {
           value: true,
           message: 'Precisa de um nome!'
         },
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            onChangeText={onChange}
            value={value}
            placeholder="Local"
          />
        )}
        name="local"
      />
      {/* {errors.firstName && <Text>This is required.</Text>} */}

      <Text paddingright={20} paddingleft={20} align="left">Data:</Text>
        <Controller
        control={control}
        rules={{
         required: {
           value: true,
           message: 'Precisa de uma data!'
         },
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            onChangeText={onChange}
            value={value}
            placeholder="data"
            maxLength={10}
          />
        )}
        name="data"
      />
      {/* {errors.firstName && <Text>This is required.</Text>} */}

      <Text paddingright={20} paddingleft={20} align="left">Horário:</Text>
        <Controller
        control={control}
        rules={{
         required: {
           value: true,
           message: 'Precisa de um horário!'
         },
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            onChangeText={onChange}
            value={value}
            placeholder="Horário"
            maxLength={5}
          />
        )}
        name="horario"
      />
      {/* {errors.firstName && <Text>This is required.</Text>} */}

      <Text paddingright={20} paddingleft={20} align="left">Anotações:</Text>
        <Controller
        control={control}
        rules={{
         required: false,
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            onChangeText={onChange}
            value={value}
            placeholder="Anotações"
            multiline 
          />
        )}
        name="anotacao"
      />
      {/* {errors.firstName && <Text>This is required.</Text>} */}
      </Container>
      <BottomButton>
        <Text weight="bold" color="white">Salvar</Text>
      </BottomButton>
    </ScrollView>
	)
}

