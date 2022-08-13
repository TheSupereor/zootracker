import React from 'react';
import { getHeaderTitle } from '@react-navigation/elements';
import { Container,
         Text,
         SafeAreaView,
         AnimalInfoTabButton
 } from '../../Styles';
import GoBack from '../../Assets/goBack'

// ..{ navigation, route, options, back }

export default({ navigation, route, options, back, data }) => {
  title = getHeaderTitle(options, route.name);
  // console.log(route)

  return (
    <SafeAreaView style={{height: 60, backgroundColor: '#F8F7F2'}}>
      <Container direction="row">
        {
          back && <GoBack onPress={() => navigation.goBack()} width="48" height="48" />
        }
        <Text align='left' weight='200'>{title}</Text>
      </Container>
    </SafeAreaView>
  );
};