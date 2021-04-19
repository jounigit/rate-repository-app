import React, { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

import {Picker} from '@react-native-picker/picker';

export const RepositoryListContainer = ({ repositories, onChange }) => {
   const [selectedLanguage, setSelectedLanguage] = useState("latest");

   //onChange(selectedLanguage);
   useEffect(() => {
    console.log('# Effect: ', selectedLanguage)
         onChange(selectedLanguage)
     }, [selectedLanguage])

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
     data={repositoryNodes}
     keyExtractor={({ id }) => id}
     renderItem={({ item }) => <RepositoryItem repository={item} />}
     ListHeaderComponent={() =>
     <Picker
       selectedValue={selectedLanguage}
        style={{ height: 50 }}
       onValueChange={(itemValue, itemIndex) =>
         setSelectedLanguage(itemValue)
       }>
       <Picker.Item label="Latest repositories" value="latest" />
       <Picker.Item label="Highest rated repositories" value="highest" />
       <Picker.Item label="Lowest rated repositories" value="lowest" />
     </Picker>
     }
    />
  );
};

const RepositoryList = () => {
  const [value, setValue] = useState("latest");
  const { repositories } = useRepositories({value});
console.log('# Order: ', value)
  const getOrder = ({order}) => {
    console.log('#get Order: ', order)
  }

  return <RepositoryListContainer onChange={setValue} repositories={repositories} />;
};

export default RepositoryList;
