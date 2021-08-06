import React from 'react';
import Modal from 'react-modal';

const RegisterModal = (props) => {
  const onUserChange = (e) => {
    const userName = e.target.value;
    props.setName(userName);
  };

  const onEmailChange = (e) => {
    const email = e.target.value;
    props.setEmail(email);
  };

  const onPasswordChange = (e) => {
    const password = e.target.value;
    props.setPassword(password);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.onSubmission();
  };

  return (
    <Modal
      isOpen={!!props.selectedOption}
      contentLabel="Register modal"
      onRequestClose={props.clearModal}
      closeTimeoutMS={200}
      ariaHideApp={false}
      className="modal" //causes default styles to be disabled
    >
      <h3 className="modal-title">Please enter your details:</h3>
      <form onSubmit={onSubmit}>
        <label htmlFor="firstName">Username:</label>
        <br />
        <input
          type="text"
          id="userName"
          name="userName"
          placeholder="..."
          onChange={onUserChange}
        ></input>
        <br />
        <br />
        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="text"
          id="email"
          name="email"
          placeholder="..."
          onChange={onEmailChange}
        ></input>
        <br />
        {props.error && <h6 className="modal-error">{props.error}</h6>}
        <br />
        <label htmlFor="pass">Password:</label>
        <br />
        <input
          type="text"
          id="password"
          name="password"
          placeholder="..."
          onChange={onPasswordChange}
        ></input>
        <br />
        <br />
        <button className="modal-button" onClick={props.clearModal}>
          Cancel
        </button>
        <input className="modal-button" type="submit" value="Enter" />
      </form>
    </Modal>
  );
};

export default RegisterModal;
