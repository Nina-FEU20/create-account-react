import styled from "styled-components";

export const Wrapper = styled.div`
  background: white;
  height: 88%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;

  h2 {
    font-size: 26px;
    font-family: "Titillium Web", sans-serif;
    margin-top: 60px;
  }

  form {
    margin-top: 47px;
    width: 100%;
    height: 54%;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: space-between;
  }

  .form {
    width: 100%;
  }

  input {
    width: 100%;
    height: 46px;
    padding: 8px;
    font-family: "Open Sans", sans-serif;
    font-size: 18px;
    margin-bottom: 26px;
    border-radius: 3px;
    border: ${(props) =>
      props.isChanged ? `0` : `1px solid rgba(0, 0, 0, 0.6)`};
    pointer-events: ${(props) => (props.isChanged ? "none" : "auto")};

    ::placeholder {
      color: black;
      opacity: 1;
    }
  }

  .password,
  .password::placeholder {
    -webkit-text-security: disc;
    letter-spacing: 4px;
  }

  p {
    font-family: "Open Sans", sans-serif;
    color: rgba(0, 0, 0, 0.6);
    font-size: 10px;
    padding-bottom: 4px;
    font-weight: 600;
  }

  button {
    height: 72px;
    width: 100%;
    border: 2px solid rgba(0, 0, 0, 0.6);
    border-radius: 3px;
    background: none;
    font-size: 18px;
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
  }
`;
