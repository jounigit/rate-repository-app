import React from 'react';
import { View } from "react-native";
import Text from './Text'

const ItemName = ({ fullName }) => (

    <Text fontWeight="bold" fontSize="subheading">{fullName}</Text>

);

export default ItemName;