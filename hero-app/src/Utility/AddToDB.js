const getStoredApp = () => {
  const storedAppSTR = localStorage.getItem("Install");
  if (storedAppSTR) {
    return JSON.parse(storedAppSTR);
  } else {
    return [];
  }
};

const addToStoredDB = (id) => {
  const storedAppData = getStoredApp();
  if (!storedAppData.includes(id)) {
    storedAppData.push(id);
    localStorage.setItem("Install", JSON.stringify(storedAppData));
  }
};

const removeFromStoredDB = (id) => {
  const storedAppData = getStoredApp();
  const updatedData = storedAppData.filter(appId => appId !== id);
  localStorage.setItem("Install", JSON.stringify(updatedData));
};

export { addToStoredDB, getStoredApp, removeFromStoredDB };
