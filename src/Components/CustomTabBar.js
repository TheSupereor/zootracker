import React from "react";
import styled from "styled-components/native";


import Caderno from '../Assets/caderno.svg'
import Camera from '../Assets/camera.svg'
import Explorar from '../Assets/explorar.svg'
import Feedback from '../Assets/feedback.svg'

const TabArea = styled.View`
    height: 60px;
    background-color: #F8F7F2;
    flex-direction: row;
`;

const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const TabTitle = styled.Text`
    font-size: 10px;
    color: #707070;
`;

export default ({state, navigation}) => {
    //state recebe qual tela está ativa

    const goTo = (screenName) => {
        navigation.navigate(screenName)
    }
    
    return(
        <TabArea>
            <TabItem onPress={() => goTo('CadernoStack')}>
                <Caderno 
                style={{opacity: state.index === 0 ? 1 : 0.5}} 
                width="32" height="32" fill="#FFFFFF" />
                {
                    state.index === 0  && 
                      <TabTitle>Caderno</TabTitle>
                }
            </TabItem>
            <TabItem onPress={() => goTo('Câmera')}>
                <Camera style={{opacity: state.index === 1 ? 1 : 0.5}} width="32" height="32" fill="#FFFFFF"/>
                {
                    state.index === 1  && 
                      <TabTitle>Câmera</TabTitle>
                }
            </TabItem>
            <TabItem onPress={() => goTo('ExploreStack')}>
                <Explorar style={{opacity: state.index === 2 ? 1 : 0.5}} width="32" height="32" fill="#FFFFFF"/>
                {
                    state.index === 2  && 
                      <TabTitle>Explorar</TabTitle>
                }
            </TabItem>
            <TabItem onPress={() => goTo('FeedbackStack')}>
                <Feedback style={{opacity: state.index === 3 ? 1 : 0.5}} width="32" height="32" fill="#FFFFFF"/>
                {
                    state.index === 3  && 
                      <TabTitle>Feedback</TabTitle>
                }
            </TabItem>
        </TabArea>
    )
}
