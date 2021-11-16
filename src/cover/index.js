import React, {useState, useEffect} from 'react';
import {View, Image, StyleSheet, Text, SafeAreaView} from 'react-native';

const Cover = () => {
  const [url, setUrl] = useState(null);
  const [title, setTitle] = useState(null);

  useEffect(() => {
    myFetch();
    console.log(url);
  }, []);

  async function myFetch() {
    const cheerio = require('react-native-cheerio');

    let response = await fetch('https://hotelradioparis.com/');
    let text = await response.text();
    const $ = cheerio.load(text);
    let images = $.html('[class="proradio-slider__i wp-post-image"]');
    let src = $(images).attr('src');
    let srcTitle = $.html(
      '[class="proradio-customplayer__showtitle proradio-cutme-t"]',
    );
    let title = $(srcTitle).text();
    setTitle(title);
    setUrl(src);
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: url,
        }}
        opacity={0.9}
      />
      <SafeAreaView style={styles.textView}>
        <Text style={styles.text}>{title}</Text>
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
   position: 'absolute',
  bottom: 30,
  textAlign: 'center',
  
  },
  text: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'capitalize'
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
