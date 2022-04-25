import {Observable} from "rxjs";
import {ISurvey} from "../../models/i-survey";
import {FormGroup} from "@angular/forms";

export interface ISurveyHttpClient {
  getSurveys(url: string): Observable<ISurvey[]>;
  addSurveyWithTheseQuestionsAndAnswers(form: FormGroup): Observable<ISurvey>;
}
