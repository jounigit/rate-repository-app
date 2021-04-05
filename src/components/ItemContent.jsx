import React from 'react';
import { View, StyleSheet, Button } from "react-native";
import ItemName from './ItemName'
import ItemDescription from './ItemDescription'
import ItemImage from './ItemImage'
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  flexContainerA: {
      display: 'flex',
      flexDirection: "row",
      //height: 100,
      padding: 0,
  },
   flexContainerB: {
        flex: 1,
        //flexDirection: "column",
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        marginLeft: 20
        //justifyContent: "space-between"
   },
   flexItem: {
     flexGrow: 0,
     marginBottom: 10,
   },
  flexItemA: {
    flex: 1,
  },
});

const ItemContent = ({ image, fullName, description, language }) => (
  <View style={styles.flexContainerA}>

      <View >
          <ItemImage image={image} />
      </View>

      <View style={styles.flexContainerB}>

        <View style={styles.flexItem}>
            <ItemName fullName={fullName} />
        </View>
        <View style={styles.flexItem}>
            <ItemDescription description={description} />
        </View>
        <View style={styles.flexItemA}>
            <Button title={language} color = {theme.colors.primary} />
        </View>

      </View>



  </View>
);

export default ItemContent;