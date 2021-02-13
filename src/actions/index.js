export const addUser = (user) => {
  return {
    type: "ADD_USER",
    payload: user,
  };
};

export const addEmail = (email) => {
  return {
    type: "ADD_EMAIL",
    payload: email,
  };
};

export const addPassword = (password) => {
  return {
    type: "ADD_PASSWORD",
    payload: password,
  };
};
