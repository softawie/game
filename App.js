import React from 'react';
import { View } from 'react-native';
import Main from './src/main';
import {AppLoading} from 'expo'
import { Audio } from 'expo-av';

export default 
class AppContainer extends React.Component {
  state = {
    assetsLoaded: false,
  }

 async componentDidMount(){
    const soundObject = new Audio.Sound();
try {
  await soundObject.loadAsync(require('./assets/sounds/tetris.mp3'),{ shouldPlay: true }
  );
  this.setState({assetsLoaded: true});
  await soundObject.playAsync();
  // Your sound is playing!

  // Don't forget to unload the sound from memory
  // when you are done using the Sound object
  await soundObject.unloadAsync();
} catch (error) {
  // An error occurred!
}
  }

  render() {
    if (!this.state.assetsLoaded) {
      return <AppLoading />;
    }

    return (
      <View style={{flex: 1}}>
        <Main />
      </View>
    );
  }
}

