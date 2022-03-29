<template>

  <div class="menu">
    <a v-for="(item, a) in 메뉴들" :key="a">{{a}}. {{item}}</a>
  </div>

  <div v-for="(item, a) in products" :key="a"> 
    <h4 >{{products[a]}}</h4>
    <p>{{prices[a]}} 만원</p>
    <button @click="increase(a)">허위매물신고</button> <span> 신고수 : {{신고수[a]}}</span>
    <!-- v-on:click -->

  </div>
  <!-- <div>
    <h4 >{{products[1]}}</h4>
    <p>{{prices[1]}} 만원</p>
  </div>
  <div>
    <h4 >{{products[2]}}</h4>
    <p>{{prices[2]}} 만원</p>
  </div> -->
</template>

<script>



export default {
  name: 'App',
  data(){
    return {
      신고수: [0,0,0],
      메뉴들 : ['Home', 'Shop', 'About'],
      products : ['역삼동원룸', '천호동원룸', '마포구원룸'],
      prices : [20,40,650]

    }
  },
  methods: {
    increase(i) {
      this.신고수[i] += 1
    }
  },
  components: {
    // HelloWorld
  } 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkslateblue;
  padding : 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}

</style>
