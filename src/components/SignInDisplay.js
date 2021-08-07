import React from 'react';
import { FIND_USER } from '../apollo/protocol';
import { useQuery } from '@apollo/react-hooks';

const SignInDisplay = (props) => {
  console.log(props);
  const { data, loading, error } = useQuery(FIND_USER, {
    variables: {
      userId: props.id,
    },
  });

  if (error) {
    console.log(error);
    return <p className="nav-signin"></p>;
  }

  if (loading) {
    return <p className="nav-signin">Loading...</p>;
  }

  return (
    <div className="nav-signin">
      {error ? <p></p> : <p>Logged in as: {data.user.username}</p>}
    </div>
  );
};

export default SignInDisplay;
