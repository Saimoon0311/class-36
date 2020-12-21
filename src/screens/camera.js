import React, { useState, useEffect,useRef } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

export default function CameraApp() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const camera = useRef(null)
  useEffect(() => {
    (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        const {Library} = await MediaLibrary.requestPermissionsAsync();
        setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  return <Text>No access to camera</Text>;
      if (hasPermission === false) {
  }

  const take_selfee=()=>{
    let photo = await camera.current.takePictureAsync();
    await MediaLibrary.createAssetAsync(photo.uri);

  console.log("photo",photo)
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera ref={camera} flashMode={Camera.Constants.FlashMode.on} style={{ flex: 1 }} type={type}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'flex-start',
              alignItems: 'flex-end',
            }}
            onPress={()=> take_selfee()}
            >
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Take selfee </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}
