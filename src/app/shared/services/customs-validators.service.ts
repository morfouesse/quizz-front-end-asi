import { Injectable } from '@angular/core';
import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class CustomsValidatorsService {

  constructor() { }

  public noWhiteSpaceValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const isWhiteSpace = (control.value || '/t').trim().length === 0;
      return !isWhiteSpace ? null : {'whiteSpace' : true};
    }
  }
}
