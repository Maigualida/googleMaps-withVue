<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>for doing this it is necesary go to https://www.npmjs.com/package/vue2-google-maps and follow the intructiosn</h2>
    <p> npm install the map </p>
     <p> copie the import in main js </p>
     <p> copie the tempplate and the script as the example in the site web </p>
     <p>change the the value in the variable, center and markers</p>
    <div class="mapStyle">
     <gmap-map :center="center" :zoom="10" style="width: 500px; height: 300px">
    <gmap-marker :key="m.position"
      v-for="m in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center=m.position"
    ></gmap-marker>
  </gmap-map>

  </div>
    <button  @click="goToMar">Go to Marseille</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to my map of Lyon',
      center: {lat: 45.764043, lng: 4.835659},
      markers: [{
          position: {lat: 45.769942, lng: 4.803718}
        }, {
          position: {lat: 45.775107, lng: 4.850198}
        }]
    }
  },
  methods:{
    goToMar: function(){
      this.center={lat: 43.296482, lng: 5.369780}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.mapStyle{
 padding-left: 30%
}
</style>
