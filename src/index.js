import { fromEvent, timer, range, from } from 'rxjs';
import { of } from 'rxjs';
import { interval } from 'rxjs';
import { takeWhile, take } from 'rxjs/operators';


// fromEvent - creates streams from DOM events
fromEvent(document.body, 'click')
  .subscribe(event => console.log(event));


  // of - creates streams from simple data
  // emits array as single element of stream
/* of(5, 'string', false, [3, 5, 7])
  .subscribe(data => console.log(data)); */


// interval - emits integer values every *param* ms
/* interval(1000)
  .pipe(takeWhile(data => data < 10))
  .subscribe(data => console.log(data)); */

// timer - delays *param1* ms, then emits integer values every *param2* ms
timer(4000, 1000)
  /* .pipe(take(5))
  .subscribe(data => console.log(data)); */


// range - takes *param2* integer values starting from *param1*
/* range(5, 15)
  .subscribe(data => console.log(data)); */

// from - creates stream from array
// taking every item of array as separate value in stream
// wors also with Set and Map
from([1, 2, 3])
  .subscribe(data => console.log(data));