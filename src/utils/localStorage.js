export const saveToLocalStorage = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.log("Error saving lists to local storage: ", error)
        alert("Error saving lists to local storage: ", error);
    }
}


export const loadFromLocalStorage = (key) => {
    try {
        const savedData = localStorage.getItem(key);
        return savedData ? JSON.parse(savedData) : null;
    } catch (error) {
        console.log("Error loading lists from local storage: ", error)
        alert("Error loading lists from local storage: ", error);
    }
}