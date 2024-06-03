import { IQuestionAnswer } from "shared/interfaces/interfaces";

export const questionsData: IQuestionAnswer[] = [
  {
    text: "Как быстро вы получили ответ от клиентского сервиса RUTUBE?",
    questionID: 1,
    type: "radio",
    variants: [
      { text: "Быстрее, чем ожидал", responseID: 1 },
      { text: "Как и ожидал", responseID: 2 },
      { text: "Быстрее, чем ожидал", responseID: 3 },
    ],
  },
  {
    text: "Как быстро вы получили ответ от клиентского сервиса RUTUBE?",
    questionID: 2,
    type: "score",
    min_scale: 1,
    max_scale: 5,
  },
  {
    text: "Специалист RUTUBE хорошо изъяснялся и владел языком?",
    questionID: 3,
    type: "score",
    min_scale: 1,
    max_scale: 5,
  },
  {
    text: "Специалист RUTUBE был отзывчив?",
    questionID: 4,
    type: "score",
    min_scale: 1,
    max_scale: 5,
  },
  {
    text: "Специалист RUTUBE был компетентен?",
    questionID: 5,
    type: "score",
    min_scale: 1,
    max_scale: 5,
  },
  {
    text: "Какова вероятность того, что вы порекомендуете RUTUBE коллеге или другу?",
    questionID: 6,
    type: "score",
    min_scale: 0,
    max_scale: 9,
  },
];
