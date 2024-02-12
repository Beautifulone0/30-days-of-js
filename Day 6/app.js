
//Develop a small script which generate any number of characters random id

function generateRandomId(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomId += characters.charAt(randomIndex);
    }
  
    return randomId;
  }
  
  // Example usage with a specific length
  console.log(generateRandomId(12)); // Generates a 12-character random ID
  