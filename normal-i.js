
var displayClock = function(){
	var currentDate = new Date();
	var hour = currentDate.getHours();
	var minute = currentDate.getMinutes();
	var second = currentDate.getSeconds();

	var displayHour = document.getElementById("hours");
	if(hour>=10){
	displayHour.innerHTML = hour+':';
		} else {displayHour.innerHTML = '0'+hour +':';}

	var displayMinute = document.getElementById("minutes");
	if (minute>=10){
	displayMinute.innerHTML = minute + ':';
		} else{displayMinute.innerHTML ='0'+ minute + ':';}

	var displaySecond = document.getElementById("seconds");
	if(second>=10){
	displaySecond.innerHTML = second ;
		} else{displaySecond.innerHTML = '0'+ second;}
}
var currentTime = function(){
	var timeoutID = window.setInterval(displayClock,1000);

}
currentTime();

