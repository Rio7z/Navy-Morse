<template>
    <div>
      <logo></logo>
      <router-view/>
    </div>
</template>

<script>
import logo from "./components/logo.vue";

export default {
    components: {
      logo

    },

    data () {
        return {

        }
    },
    methods: {

    }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Open sans';
    background: #000b40;
    color: #fff;
}

h1{
  font-weight: 400;
}

h2{
  font-weight: 200;
}

#lesson-page{
  display: flex;
  justify-content: center;
  text-align: center;
}

#morsecode-app{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.buttons{
  display: flex;
  justify-content: center;
}

.main-buttons{
  flex-direction: column;
  margin-top: 50px;
}

.lesson-buttons{
  margin-top: 35px;
}

#morsecode-app button{
  width: 150px;
  height: 60px;
  margin: 10px 10px;
  background: #DF153B;
  color: #fff;
  font-weight: 600;
  font-size: 1em;
  outline: none;
  border: 2px solid #DF153B;
  border-radius: 12px;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  cursor: pointer;
}

#morsecode-app button:hover{
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  background: #e71e44;
}

#morsecode-app .main-buttons button{
  margin: 10px;
  width: 200px;
}

.lesson-content{
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.lesson-content ul{
  text-decoration: none;
  list-style: none;
  margin: 0;
  padding: 0;
}

.lesson-content ul li{
  text-align: center;
  line-height: 60px;
  font-size: 30px;
  font-weight: bold;
}


.lesson-content .morse-code{
  position: relative;
  top: -5px;
  margin-left: 50px;
  letter-spacing: 7px;
}

.lighter{
  font-weight: 200;
}




</style>
