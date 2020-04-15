import { fromEvent, timer, range, from } from 'rxjs';
import { of } from 'rxjs';
import { interval } from 'rxjs';
import { takeWhile, take, map } from 'rxjs/operators';


// fromEvent - creates streams from DOM events
/* fromEvent(document.body, 'click')
  .subscribe(event => console.log(event)); */


  // of - creates streams from simple data
  // emits array as single element of stream
/* of(5, 'string', false, [3, 5, 7])
  .subscribe(data => console.log(data)); */


// interval - emits integer values every *param* ms
/* interval(1000)
  .pipe(takeWhile(data => data < 10))
  .subscribe(data => console.log(data)); */

// timer - delays *param1* ms, then emits integer values every *param2* ms
/* timer(4000, 1000)
  .pipe(take(5))
  .subscribe(data => console.log(data)); */


// range - takes *param2* integer values starting from *param1*, works sync
/* range(5, 15)
  .subscribe(data => console.log(data)); */

// from - creates stream from array
// taking every item of array as separate value in stream
// works also with Set and Map
/* from([1, 2, 3])
  .subscribe(data => console.log(data)); */


// map - can transform every emitted value
/* interval(1000)
  .pipe(
    takeWhile(data => data < 10),
    map(data => data * 2)
    ).subscribe(data => console.log(data)); */

// first - emits first value
/* from([1, 2, 3])
  .pipe(first())
  .subscribe(data => console.log(data));
output: 1 */
    
    
// last - emits last value
/* from([1, 2, 3])
  .pipe(last())
  .subscribe(data => console.log(data));
output: 3 */
    
    
// find - emits first value satisfying conndition in callback
/* from([1, 2, 3])
  .pipe(find(number => number === 2))
  .subscribe(data => console.log(data));
output: 2 */
    
    
// take(n) - emits n values
/* from([1, 2, 3, 4, 5, 6])
  .pipe(take(3))
  .subscribe(data => console.log(data));
output: 1, 2, 3 */
    
// skip(n) - skips n values
/* from([1, 2, 3, 4, 5, 6])
  .pipe(skip(3))
  .subscribe(data => console.log(data));
output: 4, 5, 6 */
    
// skipWhile - skip values while *condition*
/* from([1, 2, 3, 4, 5, 6])
  .pipe(skipWhile(number => number <= 3))
  .subscribe(data => console.log(data ));
output: 4, 5, 6 */
    
// takeWhile - emits values while *condition*
/* from([1, 2, 3, 4, 5, 6])
  .pipe(takeWhile(number => number <= 3))
  .subscribe(data => console.log(data ));
output: 1, 2, 3 */
    
// skipUntil(*observable*) - skips value until emits *observable*
/* interval(1000)
  .pipe(skipUntil(fromEvent(document, 'click')) / or another Observable)
  .subscribe(data => console.log(data ));
output: when click emits */
    
// takeUntil(*observable*) - emits value until emits *observable*
/* interval(1000)
  .pipe(takeUntil(fromEvent(document, 'click')) / or another Observable)
  .subscribe(data => console.log(data ));
output: until click emits */
    
// filter(*condition callback*) - filter values according to *condition callback*
/* from([1, 2, 3, 4, 5, 6])
  .pipe(filter(number => number % 2 === 0))
  .subscribe(data => console.log(data ));
output: 2, 4, 6 */
    
// debounce(*time observable*) - outputs value just if passed *time observable* after last emiting
/* fromEvent(document.body, 'click')
  .pipe(debounce(() => interval(1000)))
  .subscribe(data => console.log(data));
output: most recent click after a burst of clicks */
    
// debounceTime(*time*) - outputs value just if passed *time* after last emiting
/* fromEvent(document.body, 'click')
  .pipe(debounceTime(time))
  .subscribe(data => console.log(data)); */
    
// distinct - blocks emiting if new value not different from all previous values
/* from([1, 2, 3, 1, 1, 2, 2, 3, 4, 4, 4])
  .pipe(distinct())
  .subscribe(data => console.log(data));
output: 1, 2, 3, 4 */
    
// distinctUntilChanged - blocks emiting if new value not different from one previous value
/* from([1, 2, 3, 1, 1, 2, 2, 3, 4, 4, 4])
  .pipe(distinctUntilChanged())
  .subscribe(data => console.log(data));
output: 1, 2, 3, 1, 2, 3, 4 */
    
    
// buffer(*observable*) - buffer values while inner observable not emits, then emits buffer
/* interval(1000)
  .pipe(buffer(interval(3000) / or other observable))
  .subscribe(data => console.log(data));
output: [0, 1] ... [2, 3, 4] ... */