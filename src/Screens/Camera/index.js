import React, { useState, useEffect, useRef } from 'react';
import { 
	StyleSheet, 
	View, 
	TouchableOpacity, 
	LoadingView, 
	PermissionsAndroid, 
	Platform, 
	Button,
	SafeAreaView,
	Image,
	StatusBar,
	Dimensions
 } from 'react-native';
import { Container, Text } from "../../Styles/index";
import { Camera } from 'expo-camera';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';

import CameraButton from '../../Assets/cameraButton';

const width = Dimensions.get('screen').width;

export default function CameraScreen({ navigation }) {
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>Requisitando Permissões...</Text>
  } else if (!hasCameraPermission) {
    return <Text>Câmera não autorizada, por favor, altere nas configurações do seu aparelho.</Text>
  }

  const takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
		savePhotoAuto(newPhoto);
  };

	const savePhotoAuto = (Foto) => {
		Foto ? 
		MediaLibrary.saveToLibraryAsync(Foto.uri).then(() => {
			setPhoto(undefined);
			alert('Foto salva na galeria!')
		}) :
		alert('Sem foto para salvar');
	};

  // if (photo) {
  //   let sharePic = () => {
  //     shareAsync(photo.uri).then(() => {
  //       setPhoto(undefined);
  //     });
  //   };

  //   let savePhoto = () => {
  //     MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
  //       setPhoto(undefined);
  //     });
  //   };

	// 	return (
  //     <SafeAreaView style={{
	// 			flex: 1,
	// 			alignItems: 'center',
	// 			justifyContent: 'center',
	// 		}}>
  //       <Image style={{
	// 				alignSelf: 'stretch',
	// 				flex: 1,
	// 				flexDirection: 'row'
	// 			}} source={{ uri: "data:image/jpg;base64," + photo.base64 }} />
  //       <Button title="Compartilhar" onPress={sharePic} />
  //       {hasMediaLibraryPermission ? <Button title="Salvar" onPress={savePhoto} /> : undefined}
  //       <Button title="Descartar" onPress={() => setPhoto(undefined)} />
  //     </SafeAreaView>
  //   );
  // }

  return (
		<>
    {
      hasCameraPermission && hasMediaLibraryPermission &&
        <Camera style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }} ref={cameraRef}>
          <View style={{
            backgroundColor: '#fff',
          }}>
          </View>
          <StatusBar style="auto" />
          <TouchableOpacity style={{
            position: 'absolute',
            zIndex: 100,
            left: (width/2 - 40),
            bottom: 20
          }} onPress={() => takePic()}>
            <CameraButton width="80" height="80" fill="none"/>
          </TouchableOpacity>
        </Camera>
    }
		</>
  );
}