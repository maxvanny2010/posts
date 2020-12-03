import {Injectable} from '@angular/core';
import {LogService} from './log.service';

@Injectable({providedIn: 'root'})
export class CounterService {
  counter = 0;

  constructor(public logger: LogService) {
  }

  increase(): void {
    this.logger.log('increase...');
    this.counter++;
  }

  decrease(): void {
    this.logger.log('decrease...');
    this.counter--;
  }
}
