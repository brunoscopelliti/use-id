const letters = "abcdefghijklmonpqrstuvwxyz";
const digits = "0123456789";

const alphabet = letters + letters.toUpperCase() + digits;

const getRandomChar =
  (chars) => {
    return chars.charAt(
      Math.floor(Math.random() * chars.length)
    );
  };

/**
 * Generate an alphanumeric id
 * of the given length.
 * The longer the id, more likely it's it will be unique.
 * The id is guardanteed to start with a letter.
 * @name makeId
 * @param {number} length
 * @returns makeId
 */
const makeId =
  (length) => {
    let id = getRandomChar(letters);
    while (id.length < length) {
      id += getRandomChar(alphabet);
    }
    return id;
  };

export default makeId;
