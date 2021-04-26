import { useMutation } from '@apollo/client';
import { useHistory } from "react-router-dom";

import { CREATE_REVIEW } from '../graphql/mutations';

const useReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);
    const history = useHistory();

  const createReview = async ({ownerName, repositoryName, rating, text}) => {
        rating = parseInt(rating)
       const review = { ownerName, repositoryName, rating, text };

        const { data, errors } = await mutate({ variables: { review } });

        if (data && data.createReview) {
            const id = data.createReview.repositoryId;
            history.push(`/repository/${id}`);
         }

        errors && history.push("/");

  };

  return [createReview, result];
};

export default useReview;