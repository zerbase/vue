<template>

  <div class="black-bg" v-if="모달창열렸니 == true">
    <div @click="모달창열렸니 = false" class="white-bg">
      <h4>상세페이지임</h4>
      <p>상세페이지 내용임</p>
    </div>
  </div>


  <div class="menu">
    <a v-for="(item, a) in 메뉴들" :key="a">{{a}}. {{item}}</a>
  </div>

  <div v-for="(item, a) in products" :key="a"> 
    <img :src="imgName[a]" class="room-img">
    <h4 @click="모달창열렸니 = true">{{products[a]}}</h4>
    <p>{{prices[a]}} 만원</p>
    <button @click="increase(a)">허위매물신고</button> <span> 신고수 : {{신고수[a]}}</span>
    <!-- v-on:click -->
  </div>
</template>

<script>



export default {
  name: 'App',
  data(){
    return {
      모달창열렸니: false,
      imgName : [ require("./assets/room0.jpg"),
                  require("./assets/room1.jpg"),
                  require("./assets/room2.jpg"),
      ],

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
body {
  margin: 0
}
div { 
  box-sizing: border-box;
}
.black-bg {
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}

.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
}

.room-img {
  width: 100%;
  margin-top: 40px;
}

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
