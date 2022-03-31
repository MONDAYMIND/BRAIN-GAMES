const generateRandomNumber = (max, min = 1) => {
  const randomNumber = Math.floor(min + (Math.random() * (max + 1 - min)));
  return randomNumber;
};

export default generateRandomNumber;
