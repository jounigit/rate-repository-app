import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { View, StyleSheet, Text } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useParams } from 'react-router-dom'
import { GET_REPOSITORY } from '../graphql/queries';

const Repository = () => {
  let { id } = useParams()
  /**/
  let repository

    const { data, error, loading } = useQuery(
      GET_REPOSITORY,
      {
        variables: { id },
      }
    );

     if (!data) return null;
         if (data) {
             repository = data.repository
         }

    console.log('## REP query:: -loading: ', loading, ' -data: ', data)

  return (
  <>
    <RepositoryItem repository={repository} githubLink={true} />
  </>
  )
};

export default Repository;