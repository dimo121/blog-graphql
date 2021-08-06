import React from 'react';
import Modal from 'react-modal';

const LoginModal = (props) => {
  const onChangeEmail = (e) => {
    const email = e.target.value;
    props.setEmail(email);
  };

  const onChangePass = (e) => {
    const pass = e.target.value;
    props.setPassword(pass);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.onSubmission();
  };

  return (
    <Modal
      isOpen={!!props.selectedOption}
      contentLabel="Login modal"
      onRequestClose={props.clearModal}
      closeTimeoutMS={0}
      ariaHideApp={false}
      className="modal"
    >
      <h3 className="modal-title">Enter login details</h3>
      <form onSubmit={onSubmit}>
        <label htmlFor="firstName">Email:</label>
        <br />
        <input
          type="text"
          id="userEmail"
          name="userEmail"
          placeholder="email"
          style={{ fontSize: '12px', height: '1.5rem', width: '22rem' }}
          onChange={onChangeEmail}
        ></input>
        <br />
        <br />
        <label htmlFor="familyName">Password:</label>
        <br />
        <input
          type="text"
          id="password"
          name="password"
          placeholder="password"
          style={{ fontSize: '12px', height: '1.5rem', width: '22rem' }}
          onChange={onChangePass}
        ></input>
        <br />
        {props.error && (
          <div className="modal-error">
            <h6>{props.error}</h6>
          </div>
        )}
        <br />
        <button className="modal-button" onClick={props.clearModal}>
          Cancel
        </button>
        <input className="modal-button" type="submit" value="Enter" />
      </form>
      <div>
        <h6>If you are not a member please register</h6>
        <button className="modal-button" onClick={props.registerModal}>
          Register
        </button>
      </div>
    </Modal>
  );
};

export default LoginModal;
