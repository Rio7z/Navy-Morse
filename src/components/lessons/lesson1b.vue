<template>
  <div id="morsecode-app">
    <div id="lesson-page">
      <div class="lesson-title">
        <h1>Lesson 1.2</h1>
        <h2>Take a note of these morse code letter, and take the test!</h2>
      </div>

    </div>
    <div class="lesson-content">
      <ul>
        <li>T <span class="lighter">(tango)</span></li>
        <li>M <span class="lighter">(mike)</span></li>
        <li>O <span class="lighter">(oscar)</span></li>
      </ul>
      <ul class="morse-code">
        <li>-</li>
        <li>--</li>
        <li>---</li>
      </ul>
    </div>
    <div class="buttons lesson-buttons">
    <router-link to="/lesson1"><button>Previous Page</button></router-link>
    <router-link to="/"><button>Take Test</button></router-link>
    </div>
  </div>
</template>

<script>

export default {
    data () {
        return {

        }
    },
    methods: {

    }
  }

</script>

<style>

</style>
