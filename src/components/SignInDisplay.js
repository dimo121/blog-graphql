import React from "react";
import { FIND_USER } from "../apollo/protocol";
import { useQuery } from "@apollo/react-hooks";

const SignInDisplay = (props) => {
  const { data, loading, error } = useQuery(FIND_USER, {
    variables: {
      userId: props.id,
    },
  });

  if (error) {
    return <p className="nav-signin">Admin</p>;
  }

  if (loading) {
    return <p className="nav-signin">Loading...</p>;
  }

  return (
    <div className="nav-signin">
      {data && <p>Logged in as: {data.user.username.split(" ")[0]}</p>}
    </div>
  );
};

export default SignInDisplay;
