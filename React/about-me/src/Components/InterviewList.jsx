import React from "react";
import Interview from "./Interview";
import InterviewCards from "./InterviewCards";

function InterviewList() {
  const interviews = [
    {
      id: 6,
      title:
        "«Сейчас многие улицы воспринимаются как небезопасные» — эксперт по велокультуре Владимир Кумов",
      url: "https://moskvichmag.ru/gorod/sejchas-mnogie-ulitsy-vosprinimayutsya-kak-nebezopasnye-ekspert-po-velokulture-vladimir-kumov/",
      details: "Москвич Mag, сентябрь 2021",
    },
    {
      id: 5,
      title:
        "Владимир Кумов — о проблемах велополосы на Лесной и пиаре мэрии на велосипедах",
      url: "https://www.the-village.ru/city/city-interview/385841-kumov",
      details: "The Village, июль 2020",
    },
    {
      id: 4,
      title:
        "«Мы, велосипедисты, должны показывать, что мы есть, иначе о нас будут забывать». Интервью со специалистом по развитию велокультуры Владимиром Кумовым",
      url: "https://knife.media/bicycle-my-love/",
      details: "НОЖ, июнь 2020",
    },
    {
      id: 3,
      title: "Владимир Кумов о том, как ездить на велосипеде весь год и попасть в Минтранс",
      url: "https://daily.afisha.ru/archive/gorod/changes/vladimir-kumov-o-tom-kak-ezdit-na-velosipede-ves-god-i-popast-v-mintrans/",
      details: "Афиша, сентябрь 2015",
    },
    {
      id: 2,
      title: "Основатель Let’s bike it! о том, почему все ненавидят велоактивистов",
      url: "https://www.the-village.ru/village/city/city-interview/142037-velo",
      details: "The Village, апрель 2014",
    },
    {
      id: 1,
      title: "«Дорога лучше знает, где и когда»: как я пересёк Латинскую Америку на велосипеде",
      url: "https://www.furfur.me/furfur/heros/heroes-furfur/172155-lets-bike-it-south-america",
      details: "FURFUR, апрель 2014",
    }
  ];

  return (
    <div className="container">
      <h3>Ключевые интервью</h3>

      <ul>
        {interviews.map((interview) => (
          <Interview {...interview} key={interview.id} />
        ))}
      </ul>

      {/* <div className="interviews-container">
      {interviews.map((interview) => (
          <InterviewCards {...interview} key={interview.id} />
        ))}
      </div> */}
    </div>
  );
}

export default InterviewList;
