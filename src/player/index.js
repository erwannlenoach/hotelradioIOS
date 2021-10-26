import React, {useEffect, useState} from 'react';
import TrackPlayer from 'react-native-track-player';
import {View, StyleSheet} from 'react-native';
import {faPlay, faPause} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const Player = () => {
  const [displayBtnPlay, setDisplayBtnPlay] = useState(true);
  useEffect(() => {
    setUpTrackPlayer();
    return () => TrackPlayer.destroy();
  });

  let track = {
    url: 'https://radio2.pro-fhi.net/radio/9111/stream.mp3',
    title: 'Hotel Radio',
    artist: 'Hotel Radio',
    album: 'Hotel Radio',
    genre: 'Hip-Hop, Electro',
    date: '2014-05-20T07:00:00+00:00',
    artwork:
      'https://hotelradioparis.com/wp-content/uploads/2021/03/LogoELE.png',
    duration: 402, // Duration in seconds
  };

  TrackPlayer.updateOptions({
    stopWithApp: false,
    capabilities: [TrackPlayer.CAPABILITY_PLAY, TrackPlayer.CAPABILITY_PAUSE],
    compactCapabilities: [
      TrackPlayer.CAPABILITY_PLAY,
      TrackPlayer.CAPABILITY_PAUSE,
    ],
  });

  const setUpTrackPlayer = async () => {
    try {
    await TrackPlayer.setupPlayer();
      await  TrackPlayer.add([track]);
      console.log('Tracks added');
    } catch (e) {
      console.log(e);
    }
  };

  const start =  () => {
    console.log("start")
     setDisplayBtnPlay(true);
    TrackPlayer.play();
    setDisplayBtnPlay(false);
  };

  const stop = async () => {
    console.log("stop")
    TrackPlayer.stop();
    TrackPlayer.destroy();
    setDisplayBtnPlay(true);
  };


  return (
    <View style={styles.container}>
      <View style={styles.buttonDiv}>
        <FontAwesomeIcon
          icon={faPlay}
          size={40}
          style={styles.Btn}
          onPress={start}
          display={displayBtnPlay ? 'flex' : 'none'}
        />
        <FontAwesomeIcon
          icon={faPause}
          size={40}
          style={styles.Btn}
          onPress={stop}
          display={!displayBtnPlay ? 'flex' : 'none'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    position: 'absolute',
  },
  Btn: {
    alignSelf: 'center',
    color: 'white',
    position: 'absolute',
  },
  buttonDiv: {
    height: 100,
    width: 100,
    backgroundColor: 'transparent',
    border: '5px solid',
    borderWidth: 3,
    borderRadius: 100,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Player;
