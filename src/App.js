import "./App.css";

function App() {
  // const { useState } = React;
  // Display all of the fruits names to the Dom
  // Make each of those fruits that are displayed to the Dom have their text turn to the color of the fruit that is listed
  // Create a text box above the fruits that when you start typing in the text box, only the fruits that have those letters will appear form the list you are appending
  // Filter(?)

  const fruits = [
    { name: "apple", color: "red" },
    { name: "banana", color: "yellow" },
    { name: "orange", color: "orange" },
    { name: "pear", color: "green" },
    { name: "grape", color: "purple" },
    { name: "strawberry", color: "red" },
    { name: "kiwi", color: "green" },
  ];

  function myFunction() {
    // Declare variables
    let input, filter, ul, i, li, a, txtValue;
    input = document.getElementById("myInput");
    ul = document.getElementById("displayFruits");
    li = ul.getElementsByTagName("li");
    filter = input.value.toUpperCase();
    console.log(li);

    // Loop through array

    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
  return (
    <div className="p1">
      <h1>Fruits:</h1>
      <input
        type="text"
        id="myInput"
        onKeyUp={myFunction}
        placeholder="Search for names.."
        title="Type in a name"
      />
      <div id="fruits">
        <ul id="displayFruits">
          <li style={{ color: "red" }}>
            {" "}
            <a>apple</a>
          </li>
          <li style={{ color: "yellow" }}>
            {" "}
            <a>pinnaple</a>
          </li>
          <li style={{ color: "orange" }}>
            {" "}
            <a>orange</a>
          </li>
          <li style={{ color: "green" }}>
            {" "}
            <a>pear</a>
          </li>
          <li style={{ color: "purple" }}>
            {" "}
            <a>grape</a>
          </li>
          <li style={{ color: "red" }}>
            {" "}
            <a>strawberry</a>
          </li>
          <li style={{ color: "green" }}>
            {" "}
            <a>kiwi</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
