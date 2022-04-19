import {Observable} from "rxjs";
import {ISurvey} from "../../models/i-survey";

export interface ISurveyHttpClient {
  getSurveys(url: string): Observable<ISurvey[]>;
}
