export const store = {
  getStorage: (key) => {
    return JSON.parse(localStorage.getItem(key));
  },

  setStorage: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },

  removeStorage: (key) => {
    localStorage.removeItem(key);
  },
};
