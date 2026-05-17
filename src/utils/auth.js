export const authorize = () => {
  return new Promise((resolve) => {
    resolve({ token: "fake-jwt-token" });
  });
};

export const register = () => {
  return new Promise((resolve) => {
    resolve({ message: "Registration successful" });
  });
};

export const checkToken = () => {
  return new Promise((resolve) => {
    resolve({
      data: {
        name: "Fake User",
        email: "fake@example.com",
        _id: "fake-id",
      },
    });
  });
};
