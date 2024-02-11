;(function () {
  'use strict'

  const get = (target) => {
    return document.querySelector(target)
  }
  const $timer = get('.timer');
  const $startBtn = get('.start');
  const $stopBtn = get('.stop');
  const $resetBtn = get('.reset');

  const init = () => {
    const stopWatch = new StopWatch();
    $startBtn.addEventListener('click', () => {
      stopWatch.start();
    })
    $stopBtn.addEventListener('click', () => {
      stopWatch.stop();
    })
    $resetBtn.addEventListener('click', () => {
      stopWatch.reset();
    })
  }

  class StopWatch{
    constructor(){
      this.minutes = 0;
      this.seconds = 0;
      this.milliSeconds = 0;
      this.timer = null;
    }
    start() {
      this.timer = setInterval(() => {
        if (this.milliSeconds + 1 === 100) {
          this.milliSeconds = 0;
          if (this.seconds + 1 === 60) {
            this.seconds = 0;
            this.minutes += 1;
          } else {
            this.seconds += 1;
          }
        } else {
          this.milliSeconds += 1;
        } 
        this.updateTimer();
      }, 10)
    }
    stop() {
      clearInterval(this.timer);
    }
    reset() {
      clearInterval(this.timer);
      this.minutes = 0;
      this.seconds = 0;
      this.milliSeconds = 0;
      this.updateTimer();
    }
    updateTimer() {
      $timer.innerHTML = `${this.minutes < 10 ? '0' : ''}${this.minutes}:${this.seconds < 10 ? '0' : ''}${this.seconds}.${this.milliSeconds < 10 ? '0' : ''}${this.milliSeconds}`;
    }
  }

  init();
})()
