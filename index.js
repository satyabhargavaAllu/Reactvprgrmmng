const button = document.querySelector('button');
Rx.fromEvent(button, 'click')
  .subscribe(() => console.log('Clicked!'));