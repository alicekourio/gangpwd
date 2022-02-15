const getPassword = (lengthPasword, isNumber) => {
  let result = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let charactersWithNumber = '0123456789';

  if (isNumber == 'true') {
    characters = characters + charactersWithNumber;
  }

  let charactersLength = characters.length;
  for (let i = 0; i < lengthPasword; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

module.exports = getPassword;
