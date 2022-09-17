import React, {useState, useEffect} from "react";
import { Image, Dimensions, ActivityIndicator } from "react-native";
import * as ImagePicker from 'expo-image-picker';

import {
	Container,
	Text,
	ScrollView,
  TextInput,
  BottomButton,
  SelectBoxButton,
} from "../../../Styles/index";

import { AddColeta, uploadImageColetas, getUrlToImage } from '../../../API/Api.ts';

//import Mapa from '../../Assets/mapa'

const { width } = Dimensions.get("window");

export default ({ navigation, route }) => {
  const { campId, campo } = route.params;
  console.log("DadosRota", route.params);

  var todayDate = new Date();
  var dd = String(todayDate.getDate()).padStart(2, '0');
  var mm = String(todayDate.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = todayDate.getFullYear();
  const today = dd + '/' + mm + '/' + yyyy;

  const [isComplete, setIsComplete] = useState(false);

  const [formData, setFormData] = useState({
    campo_id: campId,
    especie: '',
    referencia: '',
    horario: today,
    medicoesPosteriorConjunto: '',
    medicoesPosteriorAlmofada: '',
    medicoesPosteriorDigito: '',
    medicoesAnteriorConjunto: '',
    medicoesAnteriorAlmofada: '',
    medicoesAnteriorDigito: '',
    garras: false,
    coletor: '',
    anotacao: '',
    image: null,
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

    const path = await uploadImageColetas(fileName, ImageFormData);
    const publicURL = await getUrlToImage(path.Key);
    const data = {
      campo_id: campId,
      image: publicURL.publicURL,
      especie: formData.especie,
      referencia: formData.referencia,
      horario: formData.horario,
      medicoesPosteriorConjunto: parseFloat(formData.medicoesPosteriorConjunto),
      medicoesPosteriorAlmofada: parseFloat(formData.medicoesPosteriorAlmofada),
      medicoesPosteriorDigito: parseFloat(formData.medicoesPosteriorDigito),
      medicoesAnteriorConjunto: parseFloat(formData.medicoesAnteriorConjunto),
      medicoesAnteriorAlmofada: parseFloat(formData.medicoesAnteriorAlmofada),
      medicoesAnteriorDigito: parseFloat(formData.medicoesAnteriorDigito),
      garras: formData.garras,
      coletor: formData.coletor,
      anotacao: formData.anotacao,
    };

    const coleta = await AddColeta(data);
    console.log(coleta);
    setIsComplete(false);
    navigation.navigate("Coletas de Campo", {
      screen: 'Coletas',
      params: {
        campId: campId,
        campo: campo
      }
    })
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
          : <Text>Clique para adicionar uma foto</Text>
        }
      </BottomButton>

      <Container marginbottom={20} marginright={20} marginleft={20} marginTop={30}>
        <Text paddingright={20} paddingleft={20} align="left" size={15}>Espécie:</Text>
        <TextInput
          onChangeText={(text) => handleChange('especie', text)}
          value={formData.especie}
          placeholder="Espécie"
          name='especie'
        />
      {/* {errors.firstName && <Text>This is required.</Text>} */}

        <Text paddingright={20} paddingleft={20} align="left" size={15}>Ponto de referência:</Text>
        <TextInput
          onChangeText={(text) => handleChange('referencia', text)}
          value={formData.referencia}
          placeholder="Referência"
          name='referencia'
        />
      {/* {errors.firstName && <Text>This is required.</Text>} */}

        <Text paddingright={20} paddingleft={20} align="left" size={15}>Data:</Text>
        <TextInput
          onChangeText={(text) => handleChange('data', text)}
          value={formData.horario}
          placeholder="Data"
          name='data'
        />
        {/* {errors.firstName && <Text>This is required.</Text>} */}

        <Text paddingright={20} paddingleft={20} align="left">Medições:</Text>
        <Text paddingright={20} paddingleft={20} align="left" size={15}>Pata Anterior:</Text>
        <TextInput
          onChangeText={(text) => handleChange('medicoesAnteriorAlmofada', text)}
          value={formData.medicoesAnteriorAlmofada}
          placeholder="Almofada"
          keyboardType='numeric'
          name='medicoesAnteriorAlmofada'
        />

        {/* <Text paddingright={20} paddingleft={20} align="left">Pata Anterior:</Text> */}
        <TextInput
          onChangeText={(text) => handleChange('medicoesAnteriorConjunto', text)}
          value={formData.medicoesAnteriorConjunto}
          placeholder="Conjunto"
          keyboardType='numeric'
          name='medicoesAnteriorConjunto'
        />
        
        <TextInput
          onChangeText={(text) => handleChange('medicoesAnteriorDigito', text)}
          value={formData.medicoesAnteriorDigito}
          placeholder="Dígito"
          keyboardType='numeric'
          name='medicoesAnteriorDigito'
        />

        <Text paddingright={20} paddingleft={20} align="left" size={15}>Pata Posterior:</Text>
        <TextInput
          onChangeText={(text) => handleChange('medicoesPosteriorAlmofada', text)}
          value={formData.medicoesPosteriorAlmofada}
          placeholder="Almofada"
          keyboardType='numeric'
          name='medicoesPosteriorAlmofada'
        />

        {/* <Text paddingright={20} paddingleft={20} align="left">Pata Anterior:</Text> */}
        <TextInput
          onChangeText={(text) => handleChange('medicoesPosteriorConjunto', text)}
          value={formData.medicoesPosteriorConjunto}
          placeholder="Conjunto"
          keyboardType='numeric'
          name='medicoesPosteriorConjunto'
        />
        
        <TextInput
          onChangeText={(text) => handleChange('medicoesPosteriorDigito', text)}
          value={formData.medicoesPosteriorDigito}
          placeholder="Dígito"
          keyboardType='numeric'
          name='medicoesPosteriorDigito'
        />

        <Text paddingright={20} paddingleft={20} align="left" size={15}>Presença de garra:</Text>
        <Container 
         direction="row"
         marginBottom={20}
        >
          <Container direction="row" margin={15} padding={10} justify='flex-start'>
            <SelectBoxButton
              selected={formData.garras}
              onPress={() => handleChange('garras', true)}
              name='garras'
            />
            <Text size={14} color='#767577'>Presença</Text>
          </Container>

          <Container direction="row" margin={15} padding={10} justify='flex-start'>
            <SelectBoxButton
              selected={!formData.garras}
              onPress={() => handleChange('garras', false)}
              name='garras'
            />
            <Text size={14} color='#767577'>Ausência</Text>
          </Container>
        </Container>

        <Text paddingright={20} paddingleft={20} align="left" size={14}>Coletor:</Text>
        <TextInput
          onChangeText={(text) => handleChange('coletor', text)}
          value={formData.coletor}
          placeholder="Coletor"
          name='coletor'
        />

        <Text paddingright={20} paddingleft={20} align="left" size={14}>Anotações:</Text>
        <TextInput
          onChangeText={(text) => handleChange('anotacao', text)}
          value={formData.anotacao}
          placeholder="Anotações"
          name='anotacao'
        />
      {/* {errors.firstName && <Text>This is required.</Text>} */}
      </Container>
    
      <BottomButton onPress={async () => await sendData()}>
        {
          !isComplete 
          ? <Text weight="bold" color="white">Salvar</Text>
          : <ActivityIndicator size={'small'} />
        }
      </BottomButton>
    </ScrollView>
	)
}

