import {Injectable} from '@angular/core';
import {ISurveyHttpClient} from "./i-survey-http-client";
import {map, Observable, OperatorFunction, switchMap, take} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ISurvey} from "../../models/i-survey";
import {SURVEY, SURVEYS, URL_LOCAL} from "../../shared/constants/api";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class SurveyHttpClientService implements ISurveyHttpClient {

  public constructor(private httpClient: HttpClient) {
  }


  public getSurveys(): Observable<ISurvey[]> {
    return this.httpClient.get<ISurvey[]>(URL_LOCAL + SURVEYS).pipe(take(1));
  }


  public getErrorMessage(): Observable<string> {
    return this.httpClient.get<string>(URL_LOCAL + SURVEY).pipe(take(1));
  }

  private postSurvey(): OperatorFunction<ISurvey, ISurvey> {
    return switchMap((newSurvey: ISurvey) => this.httpClient.post<ISurvey>(URL_LOCAL + SURVEY, newSurvey).pipe(take(1)));
  }

  public addSurveyWithTheseQuestionsAndAnswers(form: FormGroup): Observable<ISurvey> {
    return this.getSurveys().pipe(
      this.surveyAscending(),
      this.getLastSurvey(),
      this.addSurveyWithDataForm(form),
      this.postSurvey(),
    );
  }

  private surveyAscending(): OperatorFunction<ISurvey[], ISurvey[]> {
    return map((survey: ISurvey[]) => [...survey].sort());
  }

  private getLastSurvey(): OperatorFunction<ISurvey[], ISurvey> {
    return map((surveys: ISurvey[]) => surveys[surveys.length - 1]);
  }

  private addSurveyWithDataForm(form: FormGroup): OperatorFunction<ISurvey, ISurvey> {
    return map(() => ({
      ...form.value
    }));
  }


}
