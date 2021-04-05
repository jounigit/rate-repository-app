import React from 'react';
import { View, StyleSheet } from "react-native";
import Text from './Text'

const styles = StyleSheet.create({
  flexContainer: {
      display: 'flex',
      flexDirection: "row",
      justifyContent: "space-between",
      textAlign: 'center',
      paddingTop: 20,
  }
});

const format = (num) => {
    const formatNum = num / 1000
    return formatNum.toFixed(1)+'k'
}

const ItemStatics = ({ stargazersCount, forksCount, reviewCount, ratingAverage }) => (

  <View style={styles.flexContainer}>
      <View>
            <Text fontWeight="bold" style={{marginBottom: 15}}>
                {format(stargazersCount)}
            </Text>
            <Text>'Stars'</Text>
      </View>
      <View>
            <Text fontWeight="bold" style={{marginBottom: 15}}>
                {format(forksCount)}
            </Text>
            <Text>'Forks'</Text>
      </View>
      <View>
            <Text fontWeight="bold" style={{marginBottom: 15}}>
                {reviewCount}
            </Text>
            <Text>'Reviews'</Text>
      </View>
      <View>
            <Text fontWeight="bold" style={{marginBottom: 15}}>
                {ratingAverage}
            </Text>
            <Text>'Rating'</Text>
      </View>
  </View>

);

export default ItemStatics;