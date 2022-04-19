import {ISurvey} from "./i-survey";

export interface IQuestion {
  id: number;
  title: string;
  survey: ISurvey;
}
