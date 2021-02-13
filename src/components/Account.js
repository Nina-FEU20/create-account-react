import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser, addEmail, addPassword } from "../actions/index";
import { Wrapper } from "./FormStyles";

function Account() {
  const userInfo = useSelector((state) => state);
  const [isChanged, setIsChanged] = useState(true);
  const [buttonText, setButtonText] = useState("Ändra");
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    isChanged ? setButtonText("Spara") : setButtonText("Ändra");
    setIsChanged(!isChanged);
  }

  return (
    <Wrapper isChanged={isChanged}>
      <h2>Ditt Konto</h2>
      <form>
        <div className="form">
          <p>NAME</p>
          <input
            type="text"
            placeholder={userInfo.user}
            onChange={(event) => dispatch(addUser(event.target.value))}
          />
          <p>EMAIL</p>
          <input
            type="text"
            placeholder={userInfo.email}
            onChange={(event) => dispatch(addEmail(event.target.value))}
          />
          <p>PASSWORD</p>
          <input
            className="password"
            type="password"
            placeholder={userInfo.password}
            onChange={(event) => dispatch(addPassword(event.target.value))}
          />
        </div>
        <button onClick={handleClick}>{buttonText}</button>
      </form>
    </Wrapper>
  );
}

export default Account;
