import React, {useState, useEffect} from 'react';
import {View, Image, StyleSheet, Text, SafeAreaView, Button} from 'react-native';

const Cover = () => {
  const [url, setUrl] = useState(null);
  const [title, setTitle] = useState(null);
  const [time, setTime] = useState(null);

  useEffect(() => {
    myFetch();
  }, []);

  async function myFetch() {
    const cheerio = require('react-native-cheerio');

    let response = await fetch('https://hotelradioparis.com/');
    let text = await response.text();
    const $ = cheerio.load(text);
    let images = $.html('[class="proradio-slider__i wp-post-image"]');
    let src = $(images).attr('src');
    let titleHTML = $.html(
      '[class="proradio-customplayer__showtitle proradio-cutme-t"]',
    );
    let title = $(titleHTML).text().trim();
    let timeHTML = $.html(
      '[class="proradio-customplayer__time proradio-itemmetas"]',
    );
    
    let time = $(timeHTML).text().trim().replace('access_time', '')
    console.log(time)

    setUrl(src);
    setTitle(title);
    setTime(time);
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: url,
        }}
        opacity={0.7}
      />
      <SafeAreaView style={styles.textView}>
        <Text style={styles.text}>NOW ON AIR</Text>
        <Text style={styles.textTitle}>{title}</Text>
        <Text style={styles.textTime}>{time}</Text>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1,
    borderStyle: 'solid',
  },
 
  textView: {
flex: 1,
  flexDirection: 'column',
    right: 0,
    position: 'absolute',
    bottom: 10,
    left: 0,
    textAlign: 'left',
    marginLeft: 10,

  },
  text: {
    color: 'white',
    fontSize: 10, 
  },
  textTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'capitalize'  
  },
  textTime: {
    color: 'white',
    fontSize: 10,
  },


  image: {
    width: 300,
    flex: 3,
    justifyContent: 'center',
    margin: 0,
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1,
    borderStyle: 'solid',
  },
});

export default Cover;
