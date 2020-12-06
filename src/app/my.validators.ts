import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';

export class MyValidators {
  static restrictedEmail(control: FormControl): { [key: string]: boolean } {
    if (['d@mail.ru', 'a@mail.ru'].includes(control.value)) {
      return {restrictedEmail: true};
    }
    return null;
  }

  static uniqEmail(control: FormControl): Promise<any> | Observable<any> {
    return new Promise(resolve => {
      setTimeout(() => {
        if (control.value === 'async@m.ru') {
          resolve({uniqEmail: true});
        } else {
          resolve(null);
        }
      }, 5000);
    });
  }
}
