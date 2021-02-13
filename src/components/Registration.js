import React from "react";
//redux
import { useDispatch } from "react-redux";
import { addUser, addEmail, addPassword } from "../actions/index";
//router
import { useHistory } from "react-router-dom";
// styled components
import styled from "styled-components";
import { Wrapper } from "./FormStyles";

function Registration() {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <h2>Registrera dig för ett konto</h2>
      <form action="">
        <div className="form">
          <p>NAME</p>
          <input
            type="text"
            onChange={(event) => dispatch(addUser(event.target.value))}
          />
          <p>EMAIL</p>
          <input
            type="text"
            onChange={(event) => dispatch(addEmail(event.target.value))}
          />
          <p>PASSWORD</p>
          <input
            className="password"
            type="password"
            onChange={(event) => dispatch(addPassword(event.target.value))}
          />
        </div>
        <button onClick={() => history.push("/account")}>Sign me up!</button>
      </form>
    </Wrapper>
  );
}

// const Wrapper = styled.div`
//   background: white;
//   height: 88%;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 0 1rem;
//   background: pink;

//   h2 {
//     font-size: 26px;
//     font-family: "Titillium Web", sans-serif;
//     margin-top: 60px;
//   }

//   form {
//     margin-top: 47px;
//     width: 100%;
//     height: 54%;
//     display: flex;
//     flex-direction: column;
//     align-items: space-between;
//     justify-content: space-between;
//   }

//   .form {
//     width: 100%;
//   }

//   input {
//     width: 100%;
//     height: 46px;
//     padding: 8px;
//     font-family: "Open Sans", sans-serif;
//     font-size: 18px;
//     margin-bottom: 26px;
//     border: 1px solid rgba(0, 0, 0, 0.6);
//     border-radius: 3px;

//     ::placeholder {
//       color: black;
//       opacity: 1;
//     }
//   }

//   p {
//     font-family: "Open Sans", sans-serif;
//     color: rgba(0, 0, 0, 0.6);
//     font-size: 10px;
//     padding-bottom: 4px;
//     font-weight: 600;
//   }

//   button {
//     height: 72px;
//     width: 100%;
//     border: 2px solid rgba(0, 0, 0, 0.6);
//     border-radius: 3px;
//     background: none;
//     font-size: 18px;
//     font-family: "Open Sans", sans-serif;
//     font-weight: bold;
//   }
// `;

export default Registration;
