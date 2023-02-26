export const getLocalData = (key) => {
  if (!ISSERVER) {
    let data = localStorage.getItem(key);
    try {
      if (data) {
        return JSON.parse(data);
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  } else {
    return null;
  }
};

export const ISSERVER = typeof window == "undefined";