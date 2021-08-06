import React from 'react';
import { FIND_USER } from '../apollo/protocol';
import jwt from 'jsonwebtoken';
import { config } from '../config/config';
import { useQuery } from '@apollo/react-hooks';

const SignInDisplay = () => {
  const token = localStorage.getItem('jwtoken');

  const decoded = jwt.verify(token, config.jwtSecret);

  const { data, loading, error } = useQuery(FIND_USER, {
    variables: {
      userId: decoded.id,
    },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>error</p>;
  }

  return (
    <div className="nav-signin">
      <p>Logged in as: {data.user.username}</p>
    </div>
  );
};

export default SignInDisplay;
