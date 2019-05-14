<template>
  <div id="morsecode-app">
    <div id="lesson-page">
      <div class="lesson-title">
        <h1>Morse Code Learning Environment</h1>
        <h2>Your morse code learning journey starts here</h2>
      </div>
    </div>

    <div class="buttons main-buttons">
    <router-link to="/lessons-library"><button>Start Learning</button></router-link>
    <router-link to="/quiz"><button>Take Quick Quiz</button></router-link>
    <router-link to="/quiz"><button>Quit</button></router-link>
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
