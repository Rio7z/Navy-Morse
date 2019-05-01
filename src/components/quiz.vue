<template>
  <div id="morsecode-app">
    <div class="quiz">
      <section class="quiz">
        <div class="quiz-entry">
          <h1>EXAM</h1>
          <div id="score"></div>
          <div id="answer"></div>
          <div id="flash"></div>
          <input id="guess" maxlength="1" type="text" placeholder="Your guess...">
          <br>
          <button id="start" v-on:click="start">Start</button>
          <button id="submit" v-on:click="guessAssign">Guess</button>
          <button id="repeat" v-on:click="repeatSeq">Repeat</button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>

export default {
  data: function(){
    return {
      morse: {
        0:['dash','dash','dash','dash','dash'],1:['dot','dash','dash','dash','dash'],2:['dot','dot','dash','dash','dash'],3:['dot','dot','dot','dash','dash'],4:['dot','dot','dot','dot','dash'],5:['dot','dot','dot','dot','dot'],6:['dash','dot','dot','dot','dot'],7:['dash','dash','dot','dot','dot'],8:['dash','dash','dash','dot','dot'],9:['dash','dash','dash','dash','dot' ],A:['dot','dash'],B:['dash','dot','dot','dot'],C:['dash','dot','dash','dot'],D:['dash','dot','dot'],E:['dot'],F:['dot','dot','dash','dot'],G:['dash','dash','dot'],H:['dot','dot','dot','dot'],I:['dot','dot'],J:['dot','dash','dash','dash'],K:['dash','dot','dash'],L:['dot','dash','dot','dot'],M:['dash','dash'],N:['dash','dot'],O:['dash','dash','dash'],P:['dot','dash','dash','dot'],Q:['dash','dash','dot','dash'],R:['dot','dash','dot'],S:['dot','dot','dot'],T:['dash'],U:['dot','dot','dash'],V:['dot','dot','dot','dash'],W:['dot','dash','dash'],X:['dash','dot','dot','dash'],Y:['dash','dot','dash','dash'],Z:['dash','dash','dot','dot']
    },
    pass: [],
    fail: [],
    guessAssigned:[],
    sequence:[],
    timeUnit: 500,
    amount: 5
    }},
    
  methods: {
    start: function (){
    const score = document.getElementById('score')
    const submit = document.getElementById('submit')
    const start = document.getElementById('start')
    const guess = document.getElementById('guess')
    
    score.innerHTML = `Correct ${this.pass.length} | Incorrect ${this.fail.length}`
    start.style.display = "none"
    submit.style.display = "none"
    repeat.style.display = "none"
    guess.style.display = "block"

    this.sequence = [];

    (this.pass.length + this.fail.length == this.amount) 
    ? this.end()
    : this.continue()
    },

    continue: function () {

    this.randomMorse(this.morse)
    this.showMorse(this.sequence)
    setTimeout(() => {submit.style.display = "inline-block", repeat.style.display = "inline-block"}, this.timeUnit * 20)
    },

    end: function (){
      alert('finished')
    },

    repeatSeq: function (){
    event.preventDefault()

    const repeat = document.getElementById('repeat')

    submit.style.display = "none"
    repeat.style.display = "none"

    this.showMorse(this.sequence)
    setTimeout(() => {
        submit.style.display = "inline-block",
        repeat.style.display = "inline-block"
    }, this.timeUnit * 20)
    },

    guessAssign: function (){
    event.preventDefault()
    this.guessAssigned = document.getElementById('guess').value.toUpperCase()

    this.compareGuess(this.guessAssigned, this.sequence)
    document.getElementById("guess").value = ''
    this.start()
    },
    randomMorse: function (morse) {
    let keys = Object.keys(morse)
    let letter = keys[keys.length * Math.random() << 0 ]
    let code = this.morse[letter[letter.length * Math.random() << 0 ]]

    this.sequence.push(letter, code)
    },

    compareGuess: function (guessAssigned, sequence) {
    const answer = document.getElementById('answer');

    (this.guessAssigned != this.sequence[0])
    ? (answer.innerHTML = 'wrong',
    setTimeout(() => {
        answer.innerHTML = ''
    }, this.timeUnit * 2),
    this.fail.push(this.sequence[0]))
    : (answer.innerHTML = 'right',
    setTimeout(() => {
        answer.innerHTML = ''
    }, this.timeUnit * 2),
    this.pass.push(this.sequence[0]))
    },

    showMorse: function (sequence){
    const flash = document.getElementById('flash')

      function addFlash(time) {
          flash.className = ''
          flash.className += 'flash'
          setTimeout(() => {flash.className = ''}, this.timeUnit * time)
      }
      this.sequence[1].forEach((element, index) => {
        setTimeout(() => {
            (element == 'dash') ? addFlash(3) : addFlash(1)
        }, this.timeUnit * 4 * (index + 1))
        })
        }

  }
}
</script>

<style>
.flash {
  background-color: #fff;
}
#flash {
  height: 100px;
  width: 100px;
  margin: 30px auto;
}
#submit {
  display: none;
  margin-right: 10px;
}
#repeat {
  display: none;
}

.quiz-entry {
  text-align: center;
}

#guess {
  display: none;
  margin: auto;
  height: 40px;
  width: 200px;
  background: #091446;
  outline: none;
  border-bottom: 3px solid #1f3599;
  border-width: 0 0 3px 0;
  text-align: center;
  color: white;
  font-size: 1em;
  font-weight: bold;
  text-transform: uppercase;
}

::placeholder {
  font-size: 1em;
  text-transform: lowercase;
  font-weight: lighter;
  opacity: 0.1;
  color: white;
}

.home-btn {
  display: block;
  margin-bottom: 15px;
}

.home-h1 {
  margin-bottom: 40px;
}
</style>
