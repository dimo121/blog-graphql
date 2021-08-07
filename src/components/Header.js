import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { NavLink } from 'react-router-dom';
import img from './react-logo.png';
import jwt from 'jsonwebtoken';
import { jwtSecret } from '../config/config';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import { CREATE_USER, LOGIN_USER } from '../apollo/protocol';
import SignInDisplay from './SignInDisplay';

const Header = (props) => {
  const [loginMod, setLogin] = useState(undefined);
  const [registerMod, setRegister] = useState(undefined);
  const [loggedIn, setUser] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [newUser, user] = useMutation(CREATE_USER);
  const [loginUser, user2] = useMutation(LOGIN_USER);

  useEffect(() => {
    const token = localStorage.getItem('jwtoken');

    if (token) {
      jwt.verify(token, jwtSecret, (err, decoded) => {
        if (err) {
          setUser('');
          localStorage.clear();
        } else setUser(decoded.id);
      });
    }
  }, []);

  const clearModal = () => {
    setLogin(undefined);
    setRegister(undefined);
  };

  const buttonOption = () => {
    if (loggedIn) {
      setUser('');

      localStorage.clear();

      props.history.push('/');
    } else {
      setLogin(true);
    }
  };

  const registerModal = () => {
    setLogin(undefined);
    setRegister(true);
  };

  const onSubmission = () => {
    if (registerMod) {
      newUser({
        variables: {
          createUserInput: {
            username: name,
            email,
            password,
          },
        },
      })
        .then((response) => {
          localStorage.setItem('jwtoken', response.data.createUser.tokens);
          setError(undefined);
          setUser(response.data.createUser.id);
          clearModal();
        })
        .catch((err) => {
          console.log(err);
          setError('Email already has a registered account');
        });
    } else if (loginMod) {
      loginUser({
        variables: {
          loginInput: {
            email,
            password,
          },
        },
      })
        .then((response) => {
          localStorage.setItem('jwtoken', response.data.login.tokens);
          setError(undefined);
          setUser(response.data.login.id);
          clearModal();
        })
        .catch((err) => {
          console.log(err);
          setError('Wrong email and password combination');
        });
    }
  };

  return (
    <header className="header-container">
      <div className="header-title">
        <span>
          <p>
            <img
              className="header-logo"
              src={img}
              alt="React logo"
              style={{ height: '35px', width: '40px', marginTop: '20px' }}
            />
          </p>
        </span>
        <span>
          <h1>ReactJS blog !</h1>
        </span>
      </div>
      <div>
        <ul className="nav-container">
          <li>
            <NavLink className="nav-links" to="/" exact={true}>
              Dashboard
            </NavLink>
          </li>
          <li>
            {loggedIn && (
              <NavLink className="nav-links" to="/createblog">
                Create blog
              </NavLink>
            )}
          </li>
          <li>
            {loggedIn && (
              <NavLink className="nav-links" to={`/myblogs`}>
                My blogs
              </NavLink>
            )}
          </li>
          <li>
            {loggedIn && <SignInDisplay id={loggedIn} />}
            <button onClick={buttonOption}>
              {loggedIn ? 'Sign Out' : 'Sign In'}
            </button>
          </li>
        </ul>
      </div>
      <LoginModal
        selectedOption={loginMod}
        clearModal={clearModal}
        registerModal={registerModal}
        setEmail={setEmail}
        setPassword={setPassword}
        onSubmission={onSubmission}
        error={error}
      />
      <RegisterModal
        selectedOption={registerMod}
        clearModal={clearModal}
        setEmail={setEmail}
        setPassword={setPassword}
        setName={setName}
        onSubmission={onSubmission}
        error={error}
      />
    </header>
  );
};

export default Header;
