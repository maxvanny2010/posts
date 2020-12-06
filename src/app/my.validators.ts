import {FormControl} from '@angular/forms';

export class MyValidators {
  static restrictedEmail(control: FormControl): { [key: string]: boolean } {
    if (['d@mail.ru', 'a@mail.ru'].includes(control.value)) {
      return {restrictedEmail: true};
    }
    return null;
  }
}
