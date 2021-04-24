import React, { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

import {Picker} from '@react-native-picker/picker';

const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
 });

 const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({
    repositories,
    onEndReach,
    setValue,
    value
}) => {
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
           selectedValue={value}
            style={{ height: 50 }}
           onValueChange={(itemValue, itemIndex) =>
             setValue(itemValue)
           }>
           <Picker.Item label="Latest repositories" value="latest" />
           <Picker.Item label="Highest rated repositories" value="highest" />
           <Picker.Item label="Lowest rated repositories" value="lowest" />
         </Picker>
     }
     ItemSeparatorComponent={ItemSeparator}
     onEndReached={onEndReach}
     onEndReachedThreshold={0.5}
    />
  );
};

const RepositoryList = () => {
  const [value, setValue] = useState("latest");
  const [selectedOrder, setSelectedOrder] = useState("latest");
  const [variables, setVariables] = useState({orderBy:"CREATED_AT", orderDirection:"DESC"});

  console.log('# List: ', value)
  useEffect(() => {
     if (value==="latest") {
        setVariables({orderBy:"CREATED_AT", orderDirection:"DESC"});
     }
     if (value==="lowest") {
        setVariables({orderBy:"RATING_AVERAGE",orderDirection:"ASC"});
     }
    if (value==="highest") {
        setVariables({orderBy:"RATING_AVERAGE", orderDirection:"DESC"});
     }
  }, [value])


  const { repositories, fetchMore } = useRepositories({
    first: 5,
    ...variables
  });

  const onEndReach = () => {
    console.log('You have reached the end of the list');
    fetchMore();
  };

  return (
    <RepositoryListContainer
      repositories={repositories}
      onEndReach={onEndReach}
      setValue={setValue}
      value={value}
    />
  );
};

export default RepositoryList;

/*
         <Picker
           selectedValue={selectedOrder}
            style={{ height: 50 }}
           onValueChange={(itemValue, itemIndex) =>
             setSelectedOrder(itemValue)
           }>
           <Picker.Item label="Latest repositories" value="latest" />
           <Picker.Item label="Highest rated repositories" value="highest" />
           <Picker.Item label="Lowest rated repositories" value="lowest" />
         </Picker>
---------------------------
  useEffect(() => {
     if (value==="latest") {
        setVariables({first: 6, orderBy:"CREATED_AT", orderDirection:"DESC"});
         //refetch({first: 4, orderBy:"CREATED_AT", orderDirection:"DESC"});
     }
     if (value==="lowest") {
        setVariables({first: 6, orderBy:"RATING_AVERAGE",orderDirection:"ASC"});
        // refetch({first: 6, orderBy:"RATING_AVERAGE",orderDirection:"ASC"});
     }
    if (value==="highest") {
        setVariables({first: 6, orderBy:"RATING_AVERAGE", orderDirection:"DESC"});
         //refetch({orderBy:"RATING_AVERAGE", orderDirection:"DESC"});
     }
  }, [value])
*/