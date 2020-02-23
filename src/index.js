import { fromEvent } from 'rxjs';

fromEvent(document.body, 'click')
  .subscribe(event => console.log(event));