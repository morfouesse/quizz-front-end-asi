import { IQuestion } from "./i-question";

export interface IAnswer {
  id: string;
  name: string;
  goodAnswer: boolean;
  question?: IQuestion;
}
