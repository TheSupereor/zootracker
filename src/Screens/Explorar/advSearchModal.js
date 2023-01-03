import React, {useState, useEffect} from "react";
import {
	Container,
	Text,
	AnimalInfoImage,
	ScrollView,
	Image,
  TextInput,
  SelectBoxButton,
  BottomButton
} from "../../Styles/index";


export default ({navigation, route}) => {
  var todayDate = new Date();
  var dd = String(todayDate.getDate()).padStart(2, '0');
  var mm = String(todayDate.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = todayDate.getFullYear();
  const today = dd + '/' + mm + '/' + yyyy;

  const [formData, setFormData] = useState({
    especie: '',
    referencia: '',
    data: today,
    ComprimentoPosteriorConjunto: 0,
    LarguraPosteriorConjunto: 0,
    ComprimentoPosteriorAlmofada: 0,
    LarguraPosteriorAlmofada: 0,
    ComprimentoPosteriorDigito: 0,
    LarguraPosteriorDigito: 0,
    ComprimentoAnteriorConjunto: 0,
    LarguraAnteriorConjunto: 0,
    ComprimentoAnteriorAlmofada: 0,
    LarguraAnteriorAlmofada: 0,
    ComprimentoAnteriorDigito: 0,
    LarguraAnteriorDigito: 0,
    garras: false,
    impressao: false,
    formatoDigitos: '',
    numeroDigitos: 0,
    digitoLigadoPalma: false,
    estado: '',
    bioma: '',
    ordemTax: ''
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
          onChangeText={(text) => handleChange('ComprimentoAnteriorAlmofada', text)}
          value={formData.ComprimentoAnteriorAlmofada}
          placeholder="Almofada"
          name='ComprimentoAnteriorAlmofada'
        />
        <TextInput
          onChangeText={(text) => handleChange('LarguraAnteriorAlmofada', text)}
          value={formData.LarguraAnteriorAlmofada}
          placeholder="Almofada"
          name='LarguraAnteriorAlmofada'
        />

        {/* <Text paddingright={20} paddingleft={20} align="left">Pata Anterior:</Text> */}
        <TextInput
          onChangeText={(text) => handleChange('ComprimentoAnteriorConjunto', text)}
          value={formData.ComprimentoAnteriorConjunto}
          placeholder="Conjunto"
          name='ComprimentoAnteriorConjunto'
        />
        <TextInput
          onChangeText={(text) => handleChange('LarguraAnteriorConjunto', text)}
          value={formData.LarguraAnteriorConjunto}
          placeholder="Conjunto"
          name='LarguraAnteriorConjunto'
        />
        
        <TextInput
          onChangeText={(text) => handleChange('ComprimentoAnteriorDigito', text)}
          value={formData.ComprimentoAnteriorDigito}
          placeholder="Dígito"
          name='ComprimentoAnteriorDigito'
        />
        <TextInput
          onChangeText={(text) => handleChange('LarguraAnteriorDigito', text)}
          value={formData.LarguraAnteriorDigito}
          placeholder="Dígito"
          name='LarguraAnteriorDigito'
        />

        <Text paddingright={20} paddingleft={20} align="left">Medições:</Text>
        <Text paddingright={20} paddingleft={20} align="left">Pata Posterior:</Text>
        <TextInput
          onChangeText={(text) => handleChange('ComprimentoAnteriorAlmofada', text)}
          value={formData.ComprimentoPosteriorAlmofada}
          placeholder="Almofada"
          name='ComprimentoAnteriorAlmofada'
        />
        <TextInput
          onChangeText={(text) => handleChange('LarguraAnteriorAlmofada', text)}
          value={formData.LarguraPosteriorAlmofada}
          placeholder="Almofada"
          name='LarguraAnteriorAlmofada'
        />

        {/* <Text paddingright={20} paddingleft={20} align="left">Pata Anterior:</Text> */}
        <TextInput
          onChangeText={(text) => handleChange('ComprimentoPosteriorConjunto', text)}
          value={formData.ComprimentoPosteriorConjunto}
          placeholder="Conjunto"
          name='ComprimentoPosteriorConjunto'
        />
        <TextInput
          onChangeText={(text) => handleChange('LarguraPosteriorConjunto', text)}
          value={formData.LarguraPosteriorConjunto}
          placeholder="Conjunto"
          name='LarguraPosteriorConjunto'
        />
        
        <TextInput
          onChangeText={(text) => handleChange('ComprimentoPosteriorDigito', text)}
          value={formData.ComprimentoPosteriorDigito}
          placeholder="Dígito"
          name='ComprimentoPosteriorDigito'
        />
        <TextInput
          onChangeText={(text) => handleChange('LarguraPosteriorDigito', text)}
          value={formData.LarguraPosteriorDigito}
          placeholder="Dígito"
          name='LarguraPosteriorDigito'
        />

        <Text paddingright={20} paddingleft={20} align="left" size={15}>Impressão da pata:</Text>
        <Container 
         direction="row"
         marginBottom={20}
        >
          <Container direction="row" margin={15}>
            <SelectBoxButton
              selected={formData.impressao}
              onPress={() => handleChange('impressao', true)}
              name='impressao'
            />
            <Text size={14} color='#767577'>Pata</Text>
          </Container>

          <Container direction="row" margin={15}>
            <SelectBoxButton
              selected={!formData.impressao}
              onPress={() => handleChange('impressao', false)}
              name='impressao'
            />
            <Text size={14} color='#767577'>Casco</Text>
          </Container>
        </Container>

        {
          formData.impressao && (
            <>
            <Text paddingright={20} paddingleft={20} align="left" size={14}>Formato dos dígitos:</Text>
            <TextInput
              onChangeText={(text) => handleChange('formatoDigitos', text)}
              value={formData.formatoDigitos}
              placeholder="Formato dos dígitos"
              name='formatoDigitos'
            />

            <Text paddingright={20} paddingleft={20} align="left" size={14}>Número de dígitos:</Text>
            <TextInput
              keyboardType = 'numeric'
              onChangeText={(text) => handleChange('numeroDigitos', parseInt(text.replace(/[^0-9]/g, '')))}
              value={formData.numeroDigitos}
              placeholder="Número de dígitos"
              name='numeroDigitos'
            />

            <Text paddingright={20} paddingleft={20} align="left" size={14}>Dígito ligado a palma:</Text>
            <Container 
            >
              <Container direction="row" margin={6} paddingLeft={20} paddingRight={20}>
                <SelectBoxButton
                  selected={formData.digitoLigadoPalma}
                  onPress={() => handleChange('digitoLigadoPalma', true)}
                  name='digitoLigadoPalma'
                />
                <Text size={14} color='#767577'>Dígito ligado a palma</Text>
              </Container>

              <Container direction="row" margin={6} paddingLeft={20} paddingRight={20}>
                <SelectBoxButton
                  selected={!formData.digitoLigadoPalma}
                  onPress={() => handleChange('digitoLigadoPalma', false)}
                  name='digitoLigadoPalma'
                />
                <Text size={14} color='#767577'>Dígito separado da palma</Text>
              </Container>
            </Container>
            </>
          )
        }
        <Text paddingright={20} paddingleft={20} align="left">Localização:</Text>
        <Text paddingright={20} paddingleft={20} align="left" size={10}>Estado:</Text>
        <TextInput
          onChangeText={(text) => handleChange('medicoesAnteriorAlmofada', text)}
          value={formData.estado}
          placeholder="Estado"
        />

        <Text paddingright={20} paddingleft={20} align="left" size={10}>Bioma:</Text>
        <TextInput
          onChangeText={(text) => handleChange('medicoesAnteriorAlmofada', text)}
          value={formData.bioma}
          placeholder="Bioma"
        />

        <Text paddingright={20} paddingleft={20} align="left" size={10}>Ordem Taxonômica:</Text>
        <TextInput
          onChangeText={(text) => handleChange('medicoesAnteriorAlmofada', text)}
          value={formData.ordemTax}
          placeholder="Ordem Taxonômica"
        />

      {/* {errors.firstName && <Text>This is required.</Text>} */}
      </Container>
    
      <BottomButton onPress={() => sendData()}>
        <Text weight="bold" color="white">Procurar</Text>
      </BottomButton>
		</ScrollView>
	)
}

