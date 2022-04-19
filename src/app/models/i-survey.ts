import { IQuestion } from "./i-question";

export interface ISurvey {
  id: number;
  title: string;
  description: string;
  questions: IQuestion[];
}
