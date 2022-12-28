import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
// import UploadData from "./components/UploadData";

const App = () => {
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

  //   const [play, setplay] = useState(true);
  const TaskList = [
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ56eAAD",
      },
      Name: "C-21",
      Rarity__c: "Common",
      Card_Description__c: "If you are still sober, Take a sip !",
      Additional_Details__c: "Additional details 1",
      Tags__c: "Task",
      Id: "a002w00000VZ56eAAD",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ56fAAD",
      },
      Name: "C-22",
      Rarity__c: "Rare",
      Card_Description__c:
        "Show everyone the last 5 photos in your gallery OR drink 3 sips",
      Additional_Details__c: "Additional details 2",
      Tags__c: "Dare",
      Id: "a002w00000VZ56fAAD",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ56gAAD",
      },
      Name: "C-23",
      Rarity__c: "Rare",
      Card_Description__c:
        "Choose someone to drink with you. They can't stop before you stop.",
      Additional_Details__c: "Additional details 3",
      Tags__c: "Task",
      Id: "a002w00000VZ56gAAD",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ56hAAD",
      },
      Name: "C-24",
      Rarity__c: "Epic",
      Card_Description__c:
        "Point ar the player with lowest IQ OR Drink 2 sips.",
      Additional_Details__c: "Additional details 4",
      Tags__c: "Task",
      Id: "a002w00000VZ56hAAD",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ56iAAD",
      },
      Name: "C-25",
      Rarity__c: "Epic",
      Card_Description__c:
        "Ask another player a question. If they answer you drink, If they don't they drink (Sips will be decided mutually before the question)",
      Additional_Details__c: "Additional details 5",
      Tags__c: "Dare",
      Id: "a002w00000VZ56iAAD",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ56jAAD",
      },
      Name: "C-26",
      Rarity__c: "Common",
      Card_Description__c: "Drink if you have a pet.",
      Additional_Details__c: "Additional details 6",
      Tags__c: "Task",
      Id: "a002w00000VZ56jAAD",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ56kAAD",
      },
      Name: "C-27",
      Rarity__c: "Rare",
      Card_Description__c: "Drink if you are a virgin.",
      Additional_Details__c: "Additional details 7",
      Tags__c: "Dare",
      Id: "a002w00000VZ56kAAD",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ56lAAD",
      },
      Name: "C-28",
      Rarity__c: "Epic",
      Card_Description__c:
        "Everyone decides what you should do OR drink 5 sips.",
      Additional_Details__c: "Additional details 8",
      Tags__c: "Dare",
      Id: "a002w00000VZ56lAAD",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ56mAAD",
      },
      Name: "C-29",
      Rarity__c: "Legendary",
      Card_Description__c:
        "Switch shirt with the person in front of you. The one who refuses will take 5 sips.",
      Additional_Details__c: "Additional details 9",
      Tags__c: "Dare",
      Id: "a002w00000VZ56mAAD",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ56nAAD",
      },
      Name: "C-30",
      Rarity__c: "Common",
      Card_Description__c:
        "Everyone who is taller than you drinks, If you are the tallest take a sip.",
      Additional_Details__c: "Additional details 10",
      Tags__c: "Task",
      Id: "a002w00000VZ56nAAD",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ56oAAD",
      },
      Name: "C-31",
      Rarity__c: "Common",
      Card_Description__c:
        "Everyone votes on who is the biggest alcoholic. That person drinks and also picks another person to drink.",
      Additional_Details__c: "Additional details 10",
      Tags__c: "Task",
      Id: "a002w00000VZ56oAAD",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ56pAAD",
      },
      Name: "C-32",
      Rarity__c: "Epic",
      Card_Description__c: "FREE PASS.",
      Additional_Details__c: "Additional details 10",
      Tags__c: "Pass",
      Id: "a002w00000VZ56pAAD",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ56qAAD",
      },
      Name: "C-33",
      Rarity__c: "Epic",
      Card_Description__c:
        "DOUBLE ATTACK, you can use it once to force a drinker to drink double.",
      Additional_Details__c: "Additional details 10",
      Tags__c: "Task",
      Id: "a002w00000VZ56qAAD",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ56rAAD",
      },
      Name: "C-34",
      Rarity__c: "Rare",
      Card_Description__c: "The person before you drink.",
      Additional_Details__c: "Additional details 10",
      Tags__c: "Task",
      Id: "a002w00000VZ56rAAD",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ56sAAD",
      },
      Name: "C-35",
      Rarity__c: "Epic",
      Card_Description__c:
        "MISERY LOVES COMPANY. you can use this card once to force someone to drink with you.",
      Additional_Details__c: "Additional details 10",
      Tags__c: "Task",
      Id: "a002w00000VZ56sAAD",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ56tAAD",
      },
      Name: "C-36",
      Rarity__c: "Rare",
      Card_Description__c:
        "On the count of three, everyone holds up either a thumbs-up or thumbs-down. Whoever does the opposite off you drinks.",
      Additional_Details__c: "Additional details 10",
      Tags__c: "Task",
      Id: "a002w00000VZ56tAAD",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ56uAAD",
      },
      Name: "C-37",
      Rarity__c: "Rare",
      Card_Description__c: "The person after you drink.",
      Additional_Details__c: "Additional details 10",
      Tags__c: "Task",
      Id: "a002w00000VZ56uAAD",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ56vAAD",
      },
      Name: "C-38",
      Rarity__c: "Common",
      Card_Description__c: "All girls drink.",
      Additional_Details__c: "Additional details 10",
      Tags__c: "Task",
      Id: "a002w00000VZ56vAAD",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ56wAAD",
      },
      Name: "C-39",
      Rarity__c: "Common",
      Card_Description__c: "All boys drink.",
      Additional_Details__c: "Additional details 10",
      Tags__c: "Task",
      Id: "a002w00000VZ56wAAD",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ56xAAD",
      },
      Name: "C-40",
      Rarity__c: "Legendary",
      Card_Description__c: "Ask the BLACK person to drink OR Drink",
      Additional_Details__c: "Additional details 10",
      Tags__c: "Dare",
      Id: "a002w00000VZ56xAAD",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ56yAAD",
      },
      Name: "C-41",
      Rarity__c: "Epic",
      Card_Description__c:
        "Tell a joke. If noone chuckles or laughs, you drink else everybody.",
      Additional_Details__c: "Additional details 10",
      Tags__c: "Task",
      Id: "a002w00000VZ56yAAD",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ56zAAD",
      },
      Name: "C-42",
      Rarity__c: "Common",
      Card_Description__c: "Everyone who is single drinks.",
      Additional_Details__c: "Additional details 10",
      Tags__c: "Task",
      Id: "a002w00000VZ56zAAD",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ570AAD",
      },
      Name: "C-43",
      Rarity__c: "Common",
      Card_Description__c: "Everyone wearing jeans drinks.",
      Additional_Details__c: "Additional details 10",
      Tags__c: "Task",
      Id: "a002w00000VZ570AAD",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ571AAD",
      },
      Name: "C-44",
      Rarity__c: "Epic",
      Card_Description__c:
        "SWAP ATTACK. You can use this card once to force someone else to drink instead of you.",
      Additional_Details__c: "Additional details 10",
      Tags__c: "Task",
      Id: "a002w00000VZ571AAD",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ572AAD",
      },
      Name: "C-45",
      Rarity__c: "Common",
      Card_Description__c: "YOU DRINK.",
      Additional_Details__c: "Additional details 10",
      Tags__c: "Task",
      Id: "a002w00000VZ572AAD",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ573AAD",
      },
      Name: "C-46",
      Rarity__c: "Common",
      Card_Description__c: "Last person to drink picks someone to drink.",
      Additional_Details__c: "Additional details 10",
      Tags__c: "Task",
      Id: "a002w00000VZ573AAD",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ574AAD",
      },
      Name: "C-47",
      Rarity__c: "Common",
      Card_Description__c:
        "The person after you can dare you to do anything. You can either fulfill the dare or refuse the dare and drink.",
      Additional_Details__c: "Additional details 10",
      Tags__c: "Dare",
      Id: "a002w00000VZ574AAD",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ575AAD",
      },
      Name: "C-48",
      Rarity__c: "Rare",
      Card_Description__c:
        "Pick someone and guess the color of their underwear. If you guess correctly, they drink, otherwise you drink.",
      Additional_Details__c: "Additional details 10",
      Tags__c: "Dare",
      Id: "a002w00000VZ575AAD",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ576AAD",
      },
      Name: "C-49",
      Rarity__c: "Epic",
      Card_Description__c:
        "Everyone votes who is the most beautiful person. That person drink.",
      Additional_Details__c: "Additional details 10",
      Tags__c: "Dare",
      Id: "a002w00000VZ576AAD",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ577AAD",
      },
      Name: "C-50",
      Rarity__c: "Legendary",
      Card_Description__c:
        "You are Simon. Everyone plays Simon says. First person that messes up drinks.",
      Additional_Details__c: "Additional details 10",
      Tags__c: "Dare",
      Id: "a002w00000VZ577AAD",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ578AAD",
      },
      Name: "C-51",
      Rarity__c: "Common",
      Card_Description__c: "Everyone wearing a shirt with buttons drinks.",
      Additional_Details__c: "Additional details 10",
      Tags__c: "Task",
      Id: "a002w00000VZ578AAD",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ579AAD",
      },
      Name: "C-52",
      Rarity__c: "Common",
      Card_Description__c: "Everyone wearing a watch drinks.",
      Additional_Details__c: "Additional details 10",
      Tags__c: "Task",
      Id: "a002w00000VZ579AAD",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ57AAAT",
      },
      Name: "C-53",
      Rarity__c: "Legendary",
      Card_Description__c:
        "You must either take off an article of clothing or drink.",
      Additional_Details__c: "Additional details 10",
      Tags__c: "Dare",
      Id: "a002w00000VZ57AAAT",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ57BAAT",
      },
      Name: "C-54",
      Rarity__c: "Common",
      Card_Description__c: "Everyone who is shorter than you drinks.",
      Additional_Details__c: "Additional details 10",
      Tags__c: "Task",
      Id: "a002w00000VZ57BAAT",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ57CAAT",
      },
      Name: "C-55",
      Rarity__c: "Epic",
      Card_Description__c:
        "Flip a coin. If it's heads, you drink. IF it's tails, everyone else drink.",
      Additional_Details__c: "Additional details 10",
      Tags__c: "Task",
      Id: "a002w00000VZ57CAAT",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ57DAAT",
      },
      Name: "C-56",
      Rarity__c: "Common",
      Card_Description__c: "Everyone born in the same month as you drinks.",
      Additional_Details__c: "Additional details 10",
      Tags__c: "Task",
      Id: "a002w00000VZ57DAAT",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ57EAAT",
      },
      Name: "C-57",
      Rarity__c: "Rare",
      Card_Description__c: "Everybody drink.",
      Additional_Details__c: "Additional details 10",
      Tags__c: "Task",
      Id: "a002w00000VZ57EAAT",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ57FAAT",
      },
      Name: "C-58",
      Rarity__c: "Legendary",
      Card_Description__c:
        "Pick one guy to balance on one leg and everybody drinks sip by sip until the guy looses his balance and use anything to balance.",
      Additional_Details__c: "Additional details 10",
      Tags__c: "Dare",
      Id: "a002w00000VZ57FAAT",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ57GAAT",
      },
      Name: "C-59",
      Rarity__c: "Epic",
      Card_Description__c:
        "You pick some guys to ask questions about yourself and other guys answer. If they answer correctly you drink, otherwise they drink.",
      Additional_Details__c: "Additional details 10",
      Tags__c: "Dare",
      Id: "a002w00000VZ57GAAT",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ57HAAT",
      },
      Name: "C-60",
      Rarity__c: "Common",
      Card_Description__c: "Everyone with an Android phone drink.",
      Additional_Details__c: "Additional details 10",
      Tags__c: "Task",
      Id: "a002w00000VZ57HAAT",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ57IAAT",
      },
      Name: "C-61",
      Rarity__c: "Common",
      Card_Description__c: "Everyone wearing glasses drinks.",
      Additional_Details__c: "Additional details 10",
      Tags__c: "Task",
      Id: "a002w00000VZ57IAAT",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ57JAAT",
      },
      Name: "C-62",
      Rarity__c: "Common",
      Card_Description__c:
        "Everyone older than you you drink if none then you drink.",
      Additional_Details__c: "Additional details 10",
      Tags__c: "Task",
      Id: "a002w00000VZ57JAAT",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ57KAAT",
      },
      Name: "C-63",
      Rarity__c: "Common",
      Card_Description__c:
        "Everyone wearing the same color shirt as you drink.",
      Additional_Details__c: "Additional details 10",
      Tags__c: "Task",
      Id: "a002w00000VZ57KAAT",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ57LAAT",
      },
      Name: "C-64",
      Rarity__c: "Rare",
      Card_Description__c: "Everyone votes for a person to drink.",
      Additional_Details__c: "Additional details 10",
      Tags__c: "Task",
      Id: "a002w00000VZ57LAAT",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ57MAAT",
      },
      Name: "C-65",
      Rarity__c: "Epic",
      Card_Description__c:
        "Everyone pass their drink to the person on their right. its their drink now.",
      Additional_Details__c: "Additional details 10",
      Tags__c: "Task",
      Id: "a002w00000VZ57MAAT",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ57NAAT",
      },
      Name: "C-66",
      Rarity__c: "Legendary",
      Card_Description__c:
        "Say 'I Love You' to any female you like in the group IF you don't like anybody drink.",
      Additional_Details__c: "Additional details 10",
      Tags__c: "Dare",
      Id: "a002w00000VZ57NAAT",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ57OAAT",
      },
      Name: "C-67",
      Rarity__c: "Legendary",
      Card_Description__c:
        "Sing the song everyone suggests very loudly or DRINK.",
      Additional_Details__c: "Additional details 10",
      Tags__c: "Dare",
      Id: "a002w00000VZ57OAAT",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ57PAAT",
      },
      Name: "C-68",
      Rarity__c: "Epic",
      Card_Description__c:
        "Drink if you have feelings for someone sitting in this group.",
      Additional_Details__c: "Additional details 10",
      Tags__c: "Dare",
      Id: "a002w00000VZ57PAAT",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ57QAAT",
      },
      Name: "C-69",
      Rarity__c: "Legendary",
      Card_Description__c:
        "Get a selfie with some stranger that group is suggesting.",
      Additional_Details__c: "Additional details 10",
      Tags__c: "Dare",
      Id: "a002w00000VZ57QAAT",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ57RAAT",
      },
      Name: "C-70",
      Rarity__c: "Legendary",
      Card_Description__c:
        "Get phone number of some stranger the group is pointing to.",
      Additional_Details__c: "Additional details 10",
      Tags__c: "Dare",
      Id: "a002w00000VZ57RAAT",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ57SAAT",
      },
      Name: "C-71",
      Rarity__c: "Common",
      Card_Description__c:
        "Group will request a song and if you fail to sing, you drink.",
      Additional_Details__c: "Additional details 10",
      Tags__c: "Dare",
      Id: "a002w00000VZ57SAAT",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ57TAAT",
      },
      Name: "C-72",
      Rarity__c: "Rare",
      Card_Description__c:
        "Show everyone an undergarment you are wearing or drink.",
      Additional_Details__c: "Additional details 10",
      Tags__c: "Dare",
      Id: "a002w00000VZ57TAAT",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ57UAAT",
      },
      Name: "C-73",
      Rarity__c: "Legendary",
      Card_Description__c:
        "Kiss someone you find attractive in the group or you complete your drink.",
      Additional_Details__c: "Additional details 10",
      Tags__c: "Dare",
      Id: "a002w00000VZ57UAAT",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ57VAAT",
      },
      Name: "C-74",
      Rarity__c: "Rare",
      Card_Description__c:
        'Walk like the ghost in "The Ring" for a minute. Drink if you have not watched the movie.',
      Additional_Details__c: "Additional details 10",
      Tags__c: "Dare",
      Id: "a002w00000VZ57VAAT",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ57WAAT",
      },
      Name: "C-75",
      Rarity__c: "Epic",
      Card_Description__c:
        "Everyone tell their favorite sex position on the count of three. Poeple with maximum common answers drink.",
      Tags__c: "Task",
      Id: "a002w00000VZ57WAAT",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ57XAAT",
      },
      Name: "C-76",
      Rarity__c: "Rare",
      Card_Description__c:
        "Do a move and the next person does the same and adds a new one. The one to fuck up drinks.",
      Tags__c: "Task",
      Id: "a002w00000VZ57XAAT",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ57YAAT",
      },
      Name: "C-77",
      Rarity__c: "Epic",
      Card_Description__c:
        "Play never have I ever, the ones who have not done it drink.",
      Tags__c: "NHIV",
      Id: "a002w00000VZ57YAAT",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ57ZAAT",
      },
      Name: "C-78",
      Rarity__c: "Rare",
      Card_Description__c:
        "Anyone whose phone gets a notification after this card drinks.",
      Tags__c: "Punishment",
      Id: "a002w00000VZ57ZAAT",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ57aAAD",
      },
      Name: "C-79",
      Rarity__c: "Common",
      Card_Description__c: "Howl like a wolf and the worst howler drinks.",
      Tags__c: "Task",
      Id: "a002w00000VZ57aAAD",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ57bAAD",
      },
      Name: "C-80",
      Rarity__c: "Rare",
      Card_Description__c:
        "Start a hyme, next person continues the hyme. First person to break, Drinks.",
      Tags__c: "Task",
      Id: "a002w00000VZ57bAAD",
    },
    {
      attributes: {
        type: "Card_Detail__c",
        url: "/services/data/v51.0/sobjects/Card_Detail__c/a002w00000VZ57cAAD",
      },
      Name: "C-81",
      Rarity__c: "Rare",
      Card_Description__c:
        "Say a word, next person continues the rhyme. First person to break, Drinks.",
      Tags__c: "Task",
      Id: "a002w00000VZ57cAAD",
    },
  ];

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
      <Cards data={data} getRandomTaskData={getRandomTaskData} />
      <footer>
        <h3>Follow handles</h3>
      </footer>
    </>
  );
};

export default App;
