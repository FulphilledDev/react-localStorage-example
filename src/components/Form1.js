// import { useState, useEffect } from "react";
// ^^ added to hook file 'useLocalStorage' so we dont need it in this form1 file any more
import { useLocalStorage } from "../useLocalStorage";

const Form1 = () => {
    //  Step 1: Setting state of input in form
    //  const [name, setName] = useState("");

    //  Step 3: Changing intial state to get data from localStorage
    //  Now we change the initial state to a function that accesses local storage, retrieves the saved value, and uses that as default
    // const [name, setName] = useState(() => {
    //     // getting stored value from local storage
    //     const saved = localStorage.getItem("name");
    //     const initialValue = JSON.parse(saved);
    //     return initialValue || "";
    // });


    //  Step 2: Setting the item in local storage
    //  (After setting initial state to test in Browser "Application" --> "Storage" --> "Local Storage" --> "http...")
    // useEffect(() => {
    // // storing input name for each component render and after every state change
    // // the field clears on page reload because we assigned a default value of empty string to initial state of 'name'
    //     localStorage.setItem("name", JSON.stringify(name));
    // }, [name]);

    // IMPORTANT NOTE: JSON.stringify, and JSON.parse are only necessary when working with anything else other than strings

    //  ^^ Steps 2 & 3 are replaced by Step 5
    //  Step 5: **** REMEMBER *** Import one main file using all local storage
    const [name, setName] = useLocalStorage("name", "");

  return (
    <form>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Full name"
        aria-label="fullname"
      />
      <input type="submit" value="Submit"></input>
    </form>
  );
};

export default Form1;