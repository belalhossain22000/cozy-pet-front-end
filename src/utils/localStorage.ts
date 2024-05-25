

export const setUserIntoLocalStorage=(token:string)=>{
localStorage.setItem("accessToken",token)
}

export const getFromLocalStorage = (key: string) => {
    if (!key || typeof window === "undefined") {
      return "";
    }
    return localStorage.getItem(key);
  };

  export const removeUserFromLocalStorage=()=>{
    localStorage.removeItem("accessToken")
  }