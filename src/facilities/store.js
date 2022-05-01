export const store = {
  getStorage: (key) => {
    const storageItem = localStorage.getItem(key);
    return storageItem ? JSON.parse(storageItem) : null;
  },

  setStorage: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },

  removeStorage: (key) => {
    localStorage.removeItem(key);
  },
};
