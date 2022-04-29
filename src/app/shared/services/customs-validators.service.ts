import {Injectable} from '@angular/core';
import {AbstractControl, ValidationErrors} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class CustomsValidatorsService {

  constructor() {
  }

  public noSpaceValidation({value}: AbstractControl): ValidationErrors | null {
    if (!value) {
      return {
        trimError: {value: "Je sais c'est fatigant mais il faut remplir le formulaire 😔"}
      };
    }
    if (value.startsWith("  ")) {
      return {
        trimError: {value: "Pourquoi vous mettez des espaces au début ? 🤔"}
      };
    }
    if (value.endsWith("  ")) {
      return {
        trimError: {value: "Pourquoi vous mettez des espaces à la fin ? 🤔"}
      };
    }
    return null;
  }

}
