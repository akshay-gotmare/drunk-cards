import React from "react";
import "../styles/Cards.css";

const Cards = ({ data, getRandomTaskData }) => {
  console.log("data:", data);
  return (
    <div className="card-container">
      <div
        className={`${
          data.Rarity__c === "" ? "basic" : `card ${data.Rarity__c}`
        }`}
      >
        {/* <img
          className="card-profile-img"
          src="https://cdn.gamer-network.net/2018/metabomb/leagueoflegendsbestcarrychampions2018pantheon.jpg"
          alt="CardBG"
        /> */}
        <div className="card-description-bk"></div>
        <div className="card-logo">
          <p>Drunk Cards</p>
        </div>
        <div className="card-content">
          <p>{data.Card_Description__c}</p>
        </div>
        <div
          className={`${
            data.Rarity__c === ""
              ? `card-rarity common`
              : `card-rarity ${data.Rarity__c}`
          }`}
        >
          {data.Rarity__c}
        </div>
        <button
          className={`${
            data.Rarity__c === "" ? `basic` : `card-btn ${data.Rarity__c}`
          }`}
          onClick={getRandomTaskData}
        >
          Next Card
        </button>
      </div>
    </div>
  );
};

export default Cards;
