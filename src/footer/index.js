import React from "react";
import { StyleSheet, View, Linking} from "react-native";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

library.add(fab);

const Footer = () => {

  return (
   
      <View style={styles.footerView}>
        <FontAwesomeIcon icon={["fab", "instagram"]} style={styles.icons} size={50} onPress={() => Linking.openURL('https://www.instagram.com/hotelradioparis/?hl=fr')} />
        <FontAwesomeIcon icon={["fab", "tiktok"]} style={styles.icons} size={50} onPress={() => Linking.openURL('https://www.tiktok.com/@hotelradioparis?')}/>
        <FontAwesomeIcon icon={["fab", "soundcloud"]} style={styles.icons} size={50}  onPress={() => Linking.openURL('https://soundcloud.com/hotel-radio-paris')} />
        <FontAwesomeIcon icon={["fab", "mixcloud"]} style={styles.icons} size={50}  onPress={() => Linking.openURL('https://www.mixcloud.com/hotelradioparis/stream/')} />
        <FontAwesomeIcon icon={faShoppingCart} style={styles.icons} size={50}   onPress={() => Linking.openURL('https://hotelradioparis.bigcartel.com/')}  />
      </View>
  );
}

const styles = StyleSheet.create({
  icons: {
    color: "white",
  },
  footerView: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
    
  
});

export default Footer