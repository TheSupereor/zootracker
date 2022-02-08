import React from 'react';
import { getHeaderTitle } from '@react-navigation/elements';
import { Container,
         Text,
         SafeAreaView,
         AnimalInfoTabButton
 } from '../../Styles';
import GoBack from '../../Assets/goBack'
import Capivara from '../../Assets/logo_capivara'
import Location from '../../Assets/location2x'
import PataVerde from '../../Assets/pata_verde2x'
import PataVermelha from '../../Assets/pata_vermelha'

// ..{ navigation, route, options, back }

export default({ navigation, route, options, back, data }) => {
  title = getHeaderTitle(options, route.name);
  const NomeRota = route.name
  // console.log(navigation)
  // console.log(route)

  return (
    <SafeAreaView style={{height: 200, paddingTop: 10, backgroundColor: '#F8F7F2'}}>
      <Container>
        <Container direction="row">
          <GoBack onPress={() => navigation.navigate('Explorar')} width="48" height="48" />
          <Text align='left' weight='200'>{title}</Text>
        </Container>
        <Container padding={20} paddingleft={50}>
          <Text align='left' weight='200' style={{ fontStyle: 'italic' }}>{data.CienName}</Text>
          <Text align='left' weight='100' size='15px'>{data.Name}</Text>
        </Container>
        <Container direction="row" style={{ justifyContent: 'center' }}>
          <AnimalInfoTabButton 
            onPress={() => navigation.navigate('Informações')}
            selected={NomeRota == 'Informações' ? true : false}
          >
            <Capivara width="36" height="36" />
          </AnimalInfoTabButton>
          <AnimalInfoTabButton 
            onPress={() => navigation.navigate('Localização')}
            selected={NomeRota == 'Localização' ? true : false}
          >
            <Location width="36" height="36" />
          </AnimalInfoTabButton>
          <AnimalInfoTabButton
            onPress={() => navigation.navigate('Anatomia')}
            selected={NomeRota == 'Anatomia' ? true : false}
          >
            <PataVerde width="36" height="36" />
          </AnimalInfoTabButton>
          <AnimalInfoTabButton 
            onPress={() => navigation.navigate('Nomes')}
            selected={NomeRota == 'Nomes' ? true : false}
          >
            <PataVermelha width="36" height="36" />
          </AnimalInfoTabButton>
        </Container>
      </Container>
    </SafeAreaView>
  );
};