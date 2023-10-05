import React from "react";
import Head from "./Components/Head";
import Projects from "./Components/Projects";
import InterviewList from "./Components/InterviewList";
import Contacts from "./Components/Contacts";
import Bio from "./Components/Bio";
import "./style.css";
import Lections from "./Components/Lections";

function App() {
  return (
    <>
      <Head />
      <Projects>
        <ul>
          <li>
            <a href="https://bike2work.ru/">
              Всероссийская акция «На работу на велосипеде»
            </a>
          </li>
          <li>
            <a href="https://cyclingcongress.ru/">
              Международный велоконгресс в Москве
            </a>
          </li>
          <li>
            <a href="https://i-bike-msk.ru/">Московский Велопарад</a>
          </li>
        </ul>
      </Projects>
      <InterviewList />
      <Lections>
        <ul>
          <li>
            <i class="lab la-youtube"></i>{" "}
            <a href="https://www.youtube.com/watch?v=dcpCJdutK9A">
              Как раскачать город до того, как в нём появится велодорожка?
            </a>{" "}
            — лекция в рамках недели Института медиа, архитектуры и дизайна
            «Стрелка» в Белгороде, декабрь 2017
          </li>
        </ul>
      </Lections>
      <Bio />
      <Contacts />
    </>
  );
}

export default App;
