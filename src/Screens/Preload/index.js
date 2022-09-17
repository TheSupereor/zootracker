import React from "react";
import { Container } from "../../Styles/index";
import { LoadingIcon } from "./styles";

import NetInfo from "@react-native-community/netinfo";
import { useNavigation } from "@react-navigation/native";

import Capivara2 from '../../Assets/logo_capivara.svg'


export default () => {

    const navigation = useNavigation();

    NetInfo.fetch().then(state => {
        //enviar o estado para o context

        //ir para a aplicação
        navigation.reset({
            routes:[{name:'MainTab'}]
        })
    })
    
    return(
        <Container color='bg'>
            <Capivara2 width="100%" height="160"/>
            <LoadingIcon size="large" color="#013E39"/>
        </Container>
    )
}

