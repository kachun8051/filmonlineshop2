class clsCustomDate {
    constructor() {
        
    }
    
    longmonth = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    longweekday = [
        'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    paddingDate(i_day){
        if (i_day < 10) {
            return '0' + i_day;
        }
        else {
            return i_day;
        }
    }

    unix2date(unixdate)
    {
        let d = new Date(unixdate*1000);
        //console.log('Month: ' + this.longmonth[d.getMonth()]);
        //console.log('Date: ' + this.paddingDate(d.getDate()));
        //console.log('Day: ' + d.getDay());
        //console.log('Weekday: ' + this.longweekday[d.getDay()]);
        let resultdate = this.longmonth[d.getMonth()] + ' ' + this.paddingDate(d.getDate()) + ' (' + this.longweekday[d.getDay()] + ')';
        return resultdate;
    }

    unix2time(unixdate)
    {
        let d = new Date(unixdate*1000);
        let hours = d.getHours();
        let minutes = d.getMinutes();
        //console.log('Hour: ' + hours);
        //console.log('Minute: ' + minutes);
        let ampm = hours >= 12 ? 'pm' : 'am';    
        hours = hours % 12;
        let _hours = '';
        let _minutes = '';
        if (hours == 0) {
            // the hour '0' should be '12'
            hours = 12;
        }
        if (hours < 10) {
            _hours = '0'+hours;
        } 
        else {
            _hours = hours;
        }
        if (minutes < 10) {
            _minutes = '0'+minutes;
        }
        else {
            _minutes = minutes;
        }    
        var strTime = _hours + ':' + _minutes + ' ' + ampm;
        return strTime;
    }

}

export default clsCustomDate