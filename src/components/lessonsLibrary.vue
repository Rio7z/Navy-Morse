<template>
  <div id="morsecode-app">
    <div class="library-buttons">
      <router-link to="/lesson1"><button class="active">Lesson 1</button></router-link>
      <button>Lesson 2</button>
      <button>Lesson 3</button>
      <button>Lesson 4</button>
      <button>Lesson 5</button>
      <button>Lesson 6</button>
      <button>Final Test</button>
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

.library-buttons{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 600px;
}

#morsecode-app .library-buttons button{
background: grey;
border: 0;
cursor: not-allowed;
}

#morsecode-app .library-buttons button.active{
background: #DF153B;
border: 2px solid #DF153B;
cursor: pointer;
}


</style>
