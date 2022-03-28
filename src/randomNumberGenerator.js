const generateRandomNumber = (max) => {
  const randomNumber = Math.floor(Math.random() * (max + 1));
  return randomNumber;
};

export default generateRandomNumber;
