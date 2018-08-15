//Show the current date and time
var todaydate = new Date();

var dd = todaydate.getDate();
var mm = todaydate.getMonth()+1;
var yyyy = todaydate.getFullYear();

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

var hour = todaydate.getHours();
var minutes = todaydate.getMinutes();
var seconds = todaydate.getSeconds();

todaydate = mm + '/' + dd + '/' + yyyy + ' ' + hour + ':' + minutes + ':' + seconds;

document.getElementById("currentDateTime").innerHTML = todaydate;
