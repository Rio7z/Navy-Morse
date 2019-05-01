<template>
  <div id="morsecode-app">
    <div class="quiz">
      <section class="quiz">
        <div class="quiz-entry">
          <h1>EXAM</h1>
          <div id="score"></div>
          <div id="answer"></div>
          <div id="flash"></div>
          <input id="guess" type="text" placeholder="Your guess...">
          <br>
          <button id="start" onclick="start()">Start</button>
          <button id="submit" onclick="guessAssign()">Guess</button>
          <button id="repeat" onclick="repeatSeq()">Repeat</button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {},
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
