import { useMutation } from '@apollo/client';

import { DELETE_REVIEW } from '../graphql/mutations';

const useDeleteReview = () => {
  const [mutate, result] = useMutation(DELETE_REVIEW);

  const deleteReview = async (id) => {
        const { data, errors } = await mutate({ variables: { id } });
        console.log('#Delete review:', id);

        if (data && data.deleteReview) { console.log('Deleted:'); }


  };

  return [deleteReview, result];
};

export default useDeleteReview;