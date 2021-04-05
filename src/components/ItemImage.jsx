import React from 'react';
import { View, Image, StyleSheet} from "react-native";

const styles = StyleSheet.create({
  stretch: {
    width: 50,
    height: 50,
    resizeMode: 'stretch',
  },
});

const ItemImage = ({ image }) => (
  <View>
          <Image
            style={styles.stretch}
            source={{uri: image}}
          />
  </View>
);

export default ItemImage;