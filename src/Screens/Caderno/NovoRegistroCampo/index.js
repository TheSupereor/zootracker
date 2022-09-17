import React, {useState} from "react";
import { Image, Dimensions, ActivityIndicator } from "react-native";
import * as ImagePicker from 'expo-image-picker';

import {
	Container,
	Text,
	ScrollView,
  TextInput,
  BottomButton
} from "../../../Styles/index";
import { AddCampo, uploadImageCampos, getUrlToImage } from '../../../API/Api.ts';

//import Mapa from '../../Assets/mapa'
const { width } = Dimensions.get("window");

export default ({ navigation, route }) => {
  var todayDate = new Date();
  var dd = String(todayDate.getDate()).padStart(2, '0');
  var mm = String(todayDate.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = todayDate.getFullYear();
  const today = dd + '/' + mm + '/' + yyyy;

  var hours = String(todayDate.getHours())
  var minutes = String(todayDate.getMinutes());
  const timestamp = hours + ':' + minutes;

  const [isComplete, setIsComplete] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    local: '',
    data: today,
    horario: timestamp,
    regiao: '',
    image: ''
  });

  const handleChange = ( name, value ) => {
    setFormData(prevState => ({
        ...prevState,
        [name]: value
    }));
  };

  const sendData = async () => {
    setIsComplete(true);
    const extension = formData.image.substring(formData.image.lastIndexOf('.') + 1);
    const fileName = formData.image.replace(/^.*[\\\/]/, "");
    var ImageFormData = new FormData();
    ImageFormData.append("files", {
      uri: formData.image,
      name: fileName,
      type: `image/${extension}`,
    });

    const path = await uploadImageCampos(fileName, ImageFormData);
    const publicURL = await getUrlToImage(path.Key);
    const constructForm = {
      nome: formData.nome,
      local: formData.local,
      data: formData.data,
      horario: formData.horario,
      regiao: formData.regiao,
      image: publicURL.publicURL
    };
    console.log(constructForm);
    const res = await AddCampo(constructForm);
    console.log(res);
    setIsComplete(false);
    navigation.navigate("Lista de Campos")
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setFormData(prevState => ({
        ...prevState,
        image: result.uri
      }));
    }
  };

	return (
    <ScrollView color="bg">
      <BottomButton style={{ marginBottom: 10, backgroundColor: 'transparent' }} onPress={() => pickImage()}>
        {
          formData.image
          ? <Image source={{ width: width, height: 300, uri:formData.image }}/>
          : <Text paddingright={20} paddingleft={20}>Clique para adicionar uma foto</Text>
        }
      </BottomButton>

      <Container marginbottom={20} marginright={20} marginleft={20}>
        <Text paddingright={20} paddingleft={20} align="left">Nome do campo:</Text>
        <TextInput
          onChangeText={(text) => handleChange('nome', text)}
          value={formData.nome}
          placeholder="Campo"
          name='nome'
        />
      {/* {errors.firstName && <Text>This is required.</Text>} */}

      <Text paddingright={20} paddingleft={20} align="left">Nome do local:</Text>
      <TextInput
        onChangeText={(text) => handleChange('local', text)}
        value={formData.local}
        placeholder="Local"
        name='local'
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

      <Text paddingright={20} paddingleft={20} align="left">Horário:</Text>
      <TextInput
        onChangeText={(text) => handleChange('horario', text)}
        value={formData.horario}
        placeholder="Horário"
        name='horario'
      />
      {/* {errors.firstName && <Text>This is required.</Text>} */}

      <Text paddingright={20} paddingleft={20} align="left">Região:</Text>
      <TextInput
        onChangeText={(text) => handleChange('regiao', text)}
        value={formData.regiao}
        placeholder="Região"
        name='regiao'
      />

      {/* {errors.firstName && <Text>This is required.</Text>} */}
      </Container>
      <BottomButton onPress={() => sendData()}>
        {
          !isComplete
          ? <Text weight="bold" color="white">Salvar</Text>
          : <ActivityIndicator size={'small'} />
        }
      </BottomButton>
    </ScrollView>
	)
}

