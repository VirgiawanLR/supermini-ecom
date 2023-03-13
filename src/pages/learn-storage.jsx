import React from "react";
import Cookies from "js-cookie";

function LearnStorage() {
  const addLocalStorage = () => {
    alert("Success add Local storage");
    localStorage.setItem("userToken", "kjfbaldjfhodihf");
    //this line of code will set a "userToken" variable name with value of "kjfbaldjfhodihf"
    //and store in browser local storage, we can check it on the browser's developer mode
    //click the "application" tab and u can filter the name userToken
  };
  const rmvLocalStorage = () => {
    alert("Success remove Local storage");
    localStorage.removeItem("userToken");
    //this line of code will delete "userToken" variables and it's value from the local storage
  };

  //the difference between local and session storage:
  //local -> will always be there unless the browser is closed
  //session -> will always be there unless the session/specific browser tab is closed
  const addSessionStorage = () => {
    alert("Success add Local storage");
    sessionStorage.setItem("userToken", "kjfbaldjfhodihf");
    //this line of code will set a "userToken" variable name with value of "kjfbaldjfhodihf"
    //and store in browser session storage, we can check it on the browser's developer mode
    //click the "application" tab and u can filter the name userToken
  };
  const rmvSessionStorage = () => {
    alert("Success remove Local storage");
    sessionStorage.removeItem("userToken");
    //this line of code will delete "userToken" variables and it's value from the session storage
  };

  const addCookie = () => {
    Cookies.set("userToken", "kjfbaldjfhodihf", { expires: 2, path: "" });
  };
  const rmvCookie = () => {
    Cookies.remove("userToken", { path: "" });
  };

  return (
    <div className=" grid grid-cols-3 m-auto w-3/4 bg-slate-700 text-white">
      <div className="">
        <p>Local Storage</p>
        <button
          onClick={addLocalStorage}
          className=" px-3 py-2 my-2 text-xs font-semibold rounded-full bg-sky-500
        hover:text-slate-700 hover:bg-sky-200"
        >
          Add Local Storage
        </button>
        <button
          onClick={rmvLocalStorage}
          className=" px-3 py-2 mb-2 mx-2 text-xs font-semibold rounded-full bg-red-500
        hover:text-slate-700 hover:bg-red-200"
        >
          Remove Local Storage
        </button>
      </div>
      <div className="">
        <p>Session Storage</p>
        <button
          onClick={addSessionStorage}
          className=" px-3 py-2 my-2 text-xs font-semibold rounded-full bg-sky-500
        hover:text-slate-700 hover:bg-sky-200"
        >
          Add Session Storage
        </button>
        <button
          onClick={rmvSessionStorage}
          className=" px-3 py-2 mb-2 ml-2 text-xs font-semibold rounded-full bg-red-500
        hover:text-slate-700 hover:bg-red-200"
        >
          Remove Session Storage
        </button>
      </div>
      <div className="">
        <p>Cookie Storage</p>
        <button
          onClick={addCookie}
          className=" px-3 py-2 my-2 text-xs font-semibold rounded-full bg-sky-500
        hover:text-slate-700 hover:bg-sky-200"
        >
          Add Cookie
        </button>
        <button
          onClick={rmvCookie}
          className=" px-3 py-2 mb-2 ml-2 text-xs font-semibold rounded-full bg-red-500
        hover:text-slate-700 hover:bg-red-200"
        >
          Remove Cookie
        </button>
      </div>
    </div>
  );
}

export default LearnStorage;
