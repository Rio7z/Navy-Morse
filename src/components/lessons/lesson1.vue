<template>
  <div id="morsecode-app">
    <div id="lesson-page">
      <div class="lesson-title">
        <h1>Lesson 1.1</h1>
        <h2>Take a note of these morse code letter, and go to the next page!</h2>
      </div>

    </div>
    <div class="lesson-content">
      <ul>
        <li>E <span class="lighter">(echo)</span></li>
        <li>I <span class="lighter">(india)</span></li>
        <li>S <span class="lighter">(sierra)</span></li>
        <li>H <span class="lighter">(hotel)</span></li>
      </ul>
      <ul class="morse-code">
        <li>.</li>
        <li>..</li>
        <li>...</li>
        <li>....</li>
      </ul>
    </div>
    <div class="buttons lesson-buttons">
    <router-link to="/lesson1b"><button>Next Page</button></router-link>
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
