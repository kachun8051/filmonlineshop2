<template>
  <div v-if="!loading" class="weather">
    <h1>Today Weather</h1>  
    <p><label class="upperline" > {{ currDate }} </label> <label class="upperline"> {{ currTime }} </label></p>
    <p><img class="weatherimage" :src="imgpath" :alt="imgpath" /></p>
    <label class="lowerline1"> {{ currTemperature }} </label><br/>
    <label class="lowerline2"> {{ currTempDesc }} </label>
    <p> {{ myMessage }} </p>
  </div>
</template>

<script>
  import clsCustomDate from '../customclass/clsCustomDate';
  import clsWeather from '../customclass/clsWeather';
  const objDate = new clsCustomDate()
  const objWeather = new clsWeather()
  export default {
    beforeMount() {
        //await this.findLocation().then(this.fetchWeather)
        this.loading = true
        this.getWeatherInfo()      
    },
    data() {
      return {
        currweather: {},
        loading: false,
        myurl: '',
        myMessage: '',
        currDate: '',
        currTime: '',
        imgpath: '',
        currTemperature: '',
        currTempDesc: ''
      }
    },    
    methods: {
      getWeatherInfo() {
          this.findLocation()
            .then( (coord) => {
                this.lat = coord[0]
                this.long = coord[1]
                this.fetchWeather(coord)
                .then( (jdata) => { 
                    if (jdata === undefined ) {
                        this.myMessage = "undefined"
                        return
                    }               
                    //this.jsonstring = JSON.stringify(jdata.current)                    
                    this.currweather = jdata.current
                    //this.dailyweather = jdata.daily[0]
                    this.currDate = objDate.unix2date(jdata.current.dt)
                    this.currTime = objDate.unix2time(jdata.current.dt)
                    let weathericon = jdata.current.weather[0].icon
                    if (weathericon != undefined ) {
                      this.imgpath = 'http://openweathermap.org/img/wn/' + weathericon + '@2x.png'
                    } else {
                      this.imgpath = '../assets/imagenotfound.jpg'
                    }                    
                    this.currTemperature = objWeather.numbertowordOfTemp(jdata.current.temp) + ' (' + jdata.current.temp + '°C)'
                    this.currTempDesc = jdata.current.weather[0].description
                    this.loading = false
                })        
            })
      },
      findLocation() {
        return new Promise(
          (resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                if (position) {
                  resolve([position.coords.latitude, position.coords.longitude])
                } else {
                  reject([-1, -1])
                }                
            })
          }
        )  
      },
      async fetchWeather(coordinates){          
        const link = 'https://api.openweathermap.org/data/2.5/onecall'
        const apikey = '480fa6cf1bad404d5b7316d11cb8cd36' 
        //this.mylink = link
        //console.log('query link2: ' + link)
        const url_1 = link + '?lat=' + coordinates[0] + '&lon=' + coordinates[1] + '&appid=' + apikey + '&units=metric'
        this.myurl = url_1
        //this.url = 'https://api.npms.io/v2/search?q=vue'
        return await fetch(url_1)
        .then((response) => response.json())
        .catch( (error) => {
            this.myError = error
            this.isloading = false
            return {'error': error}
        })
      },    
    }
  }
</script>  

<style scoped>
    .weather {
        border: 1px solid darkgreen;
        border-radius: 25px;
        padding: 12px 8px;
        margin-left: auto;
        margin-right: auto;
        display: block;
    }

    .weatherimage {
        height: 220px;
        width: 220px;
        margin-Top: -5px;
        clear: both;
        margin-left: auto;
        margin-right: auto;
        display: block;
    }

    .lowerline2 {
        text-Align: 'center';
        justify-Content: 'center';
        color: 'white';
        font-Size: 22pt;
        font-Weight: 'bold';
        clear: both;
        margin-left: auto;
        margin-right: auto;
        display: block;
        width: 6em;
    }

    .lowerline1 {
        margin-Top: -60px;
        text-Align: 'center';
        justify-Content: 'center';
        color: 'white';
        font-Size: 28px;
        font-Weight: 'bold';
        clear: both;
        margin-left: auto;
        margin-right: auto;
        display: block;
        width: 6em;
    }

    .upperline {
        margin-Bottom: -50px;
        text-Align: 'center';
        justify-Content: 'center';
        color: 'white';
        font-Size: 24px;
        font-Weight: 'bold';
    }
</style>