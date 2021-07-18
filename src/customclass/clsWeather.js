class clsWeather {
    constructor() {
        
    }

    tempkey = [33, 28, 23, 18, 13, 8, -273];
    tempval = ['Very Hot', 'Hot', 'Warm', 'Mild', 'Cool', 'Cold', 'Very Cold'];

    numbertowordOfTemp(temp){    
        for(let i = 0; i< this.tempkey.length; i++) {
          //console.log('key: ' + this.tempkey[i]);
          if (temp >= this.tempkey[i]) {
            //console.log('value: ' + this.tempval[i]);
            return this.tempval[i];                
          }
        }
        return 'unknown';
    }

}

export default clsWeather