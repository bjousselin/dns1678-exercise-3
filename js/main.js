// JavaScript Document

var buttonleft = $('.salesLeft');
var infoleft = $('.sales__detailsLeft'); 

var buttonClickHandlerLeft = function () {
	var currentState = infoleft.attr('data-state');
	
	
if (currentState == 'active') {
		infoleft.attr('data-state', 'inactive');	
	} else {
		infoleft.attr('data-state', 'active');	
	}

};

buttonleft.on('click', buttonClickHandlerLeft);

var buttonright = $('.salesRight');
var inforight = $('.sales__detailsRight'); 

var buttonClickHandlerRight = function () {
	var currentState = inforight.attr('data-state');
	
	
if (currentState == 'active') {
		inforight.attr('data-state', 'inactive');	
	} else {
		inforight.attr('data-state', 'active');	
	}

};

buttonright.on('click', buttonClickHandlerRight);