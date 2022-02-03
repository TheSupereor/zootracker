import React from 'react';
import { getHeaderTitle } from '@react-navigation/elements';
import { Container,
         Text,
         SafeAreaView
 } from '../../Styles';
import GoBack from '../../Assets/goBack'

// ..{ navigation, route, options, back }

export default({ navigation, route, options, back }) => {
  title = getHeaderTitle(options, route.name);
  console.log(navigation, route, options, back)

  return (
    <SafeAreaView style={{height: 100}}>
      <Container direction="row">
        <GoBack onPress={navigation.goBack} width="24" height="24" />
        <Text>{title}</Text>
      </Container>
    </SafeAreaView>
  );
};