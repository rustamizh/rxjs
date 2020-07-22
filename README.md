### fromEvent
creates streams from DOM events
```javascript
fromEvent(document.body, 'click')
  .subscribe(event => console.log(event));
```


### of
creates streams from simple data, emits array as single element of stream
```javascript
of(5, 'string', false, [3, 5, 7])
  .subscribe(data => console.log(data));
```

### interval
emits integer values every *param* ms
```javascript
interval(1000)
  .pipe(takeWhile(data => data < 10))
  .subscribe(data => console.log(data));
```

### timer
delays *param1* ms, then emits integer values every *param2* ms
```javascript
timer(4000, 1000)  
    .pipe(take(5))
    .subscribe(data => console.log(data));
```


### range
emits *param2* integer values starting from *param1*, works sync
```javascript
range(5, 15)  
  .subscribe(data => console.log(data));
```


### from
creates stream from array, taking every item of array as separate value in stream, works also with Set and Map
```javascript
from([1, 2, 3])  
  .subscribe(data => console.log(data));
```


### first
emits first value
```javascript
from([1, 2, 3])
  .pipe(first())
  .subscribe(data => console.log(data));
output: 1
```


### last
emits last value
```javascript
from([1, 2, 3])
  .pipe(last())
  .subscribe(data => console.log(data));
output: 3
```


### find
emits first value satisfying conndition in callback
```javascript
from([1, 2, 3])
  .pipe(find(number => number === 2))
  .subscribe(data => console.log(data));
output: 2
```


### take(n)
emits n values
```javascript
from([1, 2, 3, 4, 5, 6])
  .pipe(take(3))
  .subscribe(data => console.log(data));
output: 1, 2, 3
```

### skip(n)
skips n values
```javascript
from([1, 2, 3, 4, 5, 6])
  .pipe(skip(3))
  .subscribe(data => console.log(data));
output: 4, 5, 6
```

### skipWhile
skip values while *condition*
```javascript
from([1, 2, 3, 4, 5, 6])
  .pipe(skipWhile(number => number <= 3))
  .subscribe(data => console.log(data ));
output: 4, 5, 6
```

### takeWhile
emits values while *condition*
```javascript
from([1, 2, 3, 4, 5, 6])
  .pipe(takeWhile(number => number <= 3))
  .subscribe(data => console.log(data ));
output: 1, 2, 3
```

### skipUntil(*observable*)
skips value until emits *observable*
```javascript
interval(1000)
  .pipe(skipUntil(fromEvent(document, 'click')) / or another Observable)
  .subscribe(data => console.log(data ));
output: when click emits
```

### takeUntil(*observable*)
emits value until emits *observable*
```javascript
interval(1000)
  .pipe(takeUntil(fromEvent(document, 'click')) / or another Observable)
  .subscribe(data => console.log(data ));
output: until click emits
```

### filter(*condition callback*)
filter values according to *condition callback*
```javascript
from([1, 2, 3, 4, 5, 6])
  .pipe(filter(number => number % 2 === 0))
  .subscribe(data => console.log(data ));
output: 2, 4, 6
```

### debounce(*time observable*)
outputs value just if passed *time observable* after last emiting
```javascript
fromEvent(document.body, 'click')
  .pipe(debounce(() => interval(1000)))
  .subscribe(data => console.log(data));
output: most recent click after a burst of clicks
```

### debounceTime(*time*)
outputs value just if passed *time* after last emiting
```javascript
fromEvent(document.body, 'click')
  .pipe(debounceTime(time))
  .subscribe(data => console.log(data));
```

### distinct
blocks emiting if new value not different from all previous values
```javascript
from([1, 2, 3, 1, 1, 2, 2, 3, 4, 4, 4])
  .pipe(distinct())
  .subscribe(data => console.log(data));
output: 1, 2, 3, 4
```

### distinctUntilChanged
blocks emiting if new value not different from one previous value
```javascript
from([1, 2, 3, 1, 1, 2, 2, 3, 4, 4, 4])
  .pipe(distinctUntilChanged())
  .subscribe(data => console.log(data));
output: 1, 2, 3, 1, 2, 3, 4
```


### buffer(*observable*)
buffer values while inner observable not emits, then emits buffer
```javascript
interval(1000)
  .pipe(buffer(interval(3000) / or other observable))
  .subscribe(data => console.log(data));
output: [0, 1] ... [2, 3, 4] ...
```

### bufferTime(time)
buffers the source Observable values for a specific time period
```javascript
interval(1000)
  .pipe(bufferTime(2000)
  .subscribe(data => console.log(data));
output: [0] ... [1, 2] ... [3, 4]
```

### bufferCount(bufferSize, startBufferEvery)
buffers the source Observable values until the size hits the maximum bufferSize
```javascript
interval(1000)
  .pipe(bufferCount(3, 2)
  .subscribe(data => console.log(data));
output: [0, 1, 2] ... [3, 4, 5] ... [6, 7, 8]
```

### defaultIfEmpty(defaultValue)
Emits a given value if the source Observable completes without emitting any next value, otherwise mirrors the source Observable
```javascript
of()
  .pipe(defaultIfEmpty('Stream is empty')
  .subscribe(data => console.log(data));
output: 'Stream is empty'

fromEvent(document, 'click')
  .pipe(
    takeUntil(interval(5000)),
    defaultIfEmpty('no clicks')
    ).subscribe(data => console.log(data));
output: 'no clicks' after 500 ms
```

### every
checks if every value meets the condition in callback
```javascript
from([1, 2, 3, 4])
  .pipe(every(number => number % 2 === 0))
  .subscribe(data => console.log(data));
output: false
```