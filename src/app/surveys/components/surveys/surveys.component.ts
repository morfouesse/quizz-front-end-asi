import {Component, OnInit} from '@angular/core';
import {SurveyHttpClientService} from "../../services/survey-http-client.service";
import {Observable} from "rxjs";
import {ISurvey} from "../../../models/i-survey";
import {SURVEYS, URL_LOCAL} from "../../../shared/constants/api";

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.less']
})


export class SurveysComponent implements OnInit {

  surveys$: Observable<ISurvey[]> = new Observable<ISurvey[]>();

  constructor(private surveyHttpClient: SurveyHttpClientService) {
  }

  ngOnInit(): void {
    this.surveys$ = this.surveyHttpClient.getSurveys(URL_LOCAL + SURVEYS);
   this.surveys$.subscribe((sucess) => sucess.forEach((survey) => console.log(survey)));
  }

}
