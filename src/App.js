import { useState, useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards";
// import UploadData from "./components/UploadData";

function handleExpansion(e) {
  console.log("inside");

  let elementToExpand = document.querySelector("#expand");

  if (!document.fullscreenElement) {
    elementToExpand.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

const App = () => {
  const [TaskList, setTaskList] = useState([]);
  const [data, setData] = useState({
    attributes: {
      type: "",
      url: "",
    },
    Name: "",
    Card_Title__c: "",
    Rarity__c: "Rarity Display",
    Card_Description__c: "Task will be shown once you click the NEXT button!",
    Additional_Details__c: "",
    Tags__c: "Task;Acting;Singing",
    Id: "dacsdcds",
  });

  useEffect(() => {
    fetch("https://drunk-cards-backend.onrender.com/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTaskList(data);
        console.log(data);
      });
  }, []);

  const taskLength = TaskList.length;
  console.log(taskLength);

  const getRandomTaskData = () => {
    let index = Math.floor(Math.random() * taskLength);
    let newData = TaskList[index];
    setData(newData);
  };

  return (
    <>
      <header className="main-header">
        <h2>Play 303</h2>
      </header>
      <div id="expand" onClick={handleExpansion}>
        <Cards
          data={data}
          getRandomTaskData={getRandomTaskData}
          TaskList={TaskList}
        />
      </div>

      <footer>
        <h3>Follow handles</h3>
      </footer>
    </>
  );
};

export default App;
