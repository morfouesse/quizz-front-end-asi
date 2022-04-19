import { Injectable } from '@angular/core';
import {ISurveyHttpClient} from "./i-survey-http-client";
import {Observable, take} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ISurvey} from "../../models/i-survey";

@Injectable({
  providedIn: 'root'
})
export class SurveyHttpClientService implements ISurveyHttpClient{

  constructor(private httpClient: HttpClient) { }


  getSurveys(url: string): Observable<ISurvey[]> {
    return this.httpClient.get<ISurvey[]>(url).pipe(take(1));
  }
}
