//event for Load event
window.addEventListener("load", function () {
	document.getElementById("nameTextBox").focus();
	document.getElementById("resultButton").addEventListener("click", fortuneFinder, false);
}, false); //end anonymous function

//declare global variables 
var nameBox;
var count;
var possibleName = /[0-9]/;

function fortuneFinder() {
	count = 0;
	nameBox = document.getElementById("nameTextBox").value;
	if ((nameBox != "")) {

		if (isNaN(nameBox)) {
			if (nameBox.match(possibleName)) {

				document.getElementById("resultPara").innerHTML = "You entered NUMBER in your name...!! Please Enter Your NAME in the above box!";

			} else {

				var inputTrim = nameBox.trim("");

				for (var i = 0; i < inputTrim.length; i++) {

					count++;

					if (count == 10) {
						count = 0;
					}//end if
					switch (count) {
						case 1:
							document.getElementById("resultPara").innerHTML = "<p>Your lucky number is: <b>ONE</b> <br/>Number 1 people are the leaders, the ones who are in charge. You have a strong determination and a purpose in life which you move toward each day. You are very ambitious and want to succeed in life. Number 1 people can be a little overbearing and not able to tolerate other people's shortcomings. You need to learn that you are not always right (yes you heard me say it), while you are right on a lot of occasions, you need to learn that no-one is 100% perfect and what works for you may not work for everyone else. Listen to other people a little bit - you might be surprised and learn something!";
							break;

						case 2:
							document.getElementById("resultPara").innerHTML = "Your lucky number is: <b>TWO</b> <br/>“Number 2 people are well-balanced, sociable, cheerful, and have a sensitivity and and inner genteelness. Your home, loved ones and family are very important to you. You need to be in harmonious surroundings to feel happiest. Your feelings are very sensitive and you can become easily hurt by others, which can lead to episodes of depression. You prefer to be in a supportive role to your partner and at work, you are not a born leader. You have a capacity for deviousness and manipulation of others, to get what you want - this is a trait you should guard against.”";
							break;

						case 3:
							document.getElementById("resultPara").innerHTML = "Your lucky number is: <b>THREE</b> <br/>“Number 3 people are are the adaptable, versatile and charming ones. You are very restless and need to be moving forward and changing direction every few years in your life. You have a variety of interests which you may pursue at some stage in your life. You are always good company in social situations, you love to socialize and are such a charming, witty and interesting companion.Your outward sunny and vibrant nature belies the worries and insecurities you have inside, which you don't really show and so most people don't get to see this side of you.";
							break;

						case 4:
							document.getElementById("resultPara").innerHTML = "Your lucky number is: <b>FOUR</b> <br/>“Number 4 people are very hardworking, sensible, practical and need to feel stable to succeed in life. Once you have decided on a path in life, you tend to stick to it until you achieve it. You are very loyal and dedicated to your close friends, lovers and family.You always learn from your mistakes and order and logic appeal greatly to you. You are the best person in an emergency as you know exactly what to do and will go about it rational and calmly while others panic. You value your family and friends.";
							break;

						case 5:
							document.getElementById("resultPara").innerHTML = "Your lucky number is: <b>FIVE</b> <br/>“Number 5 people are very creative and artistic. You have a great deal of energy and thirst for life and all you can experience. You are changeable and dislike routine of any sort as you need variety and excitement. You make friends very easily and often lend a sympathetic ear to your many friends - you have the most friends of all the Life Numbers. You have an interest of the mysterious and unknown and are especially drawn to anything magical. You have resilience to any really difficulties in life. Your quick wit and sense of humor makes you lots of friends and gets you out of any difficult situations.";
							break;

						case 6:
							document.getElementById("resultPara").innerHTML = "Your lucky number is: <b>SIX</b> <br/>“Number 6 is the number of harmony and balance (as it is closely linked with Libra). Number 6 people are great at balancing all areas of your life - friends, family, work and your partner better than the other Life Numbers. You have an interest in health and especially nutrition and will always try your best to feed your family well although you may not take care of yourself as well. You are very attractive and magnetic to other people. You usually succeed in business, so your finances are healthy which allows you to indulge in your favorite luxury items.";
							break;

						case 7:
							document.getElementById("resultPara").innerHTML = "Your lucky number is: <b>SEVEN</b> <br/>“Number 7 people are the spiritual and intuitive ones. You are more often than not gifted with a psychic ability, which you should develop. You are a great mediator, you know exactly how to achieve peace between two warring parties. You are very sensitive, introspective and have a developed spirituality, irrespective of whether you follow a specific religion or not. You often have very vivid dreams which you almost always remember. You are an idealist and a thinker. You are very wise and can be considered as the original good Samaritan.";
							break;

						case 8:
							document.getElementById("resultPara").innerHTML = "Your lucky number is: <b>EIGHT</b> <br/>“Number 8 people need to succeed in all pursuits. You especially need financial security in order to feel happy with your life. You are ambitious, self-sufficient and career-minded. You don't give up on your goals and you often reach them even when there are huge hurdles along the way. You are stubborn, intense, persistent and a deep thinker, with great powers of concentration. You are very well organized and practical, so this goes a long way to helping you achieve your many goals in life.";
							break;

						case 9:
							document.getElementById("resultPara").innerHTML = "Your lucky number is: <b>NINE</b> <br/>Number 9 people are very creative and have a high awareness of your own spirituality. You tend to gravitate towards careers where you can help mankind, especially through charitable work and even if you do not work in this area, you will be the first to donate to your charities and spend more time thinking about ways you can improve the lot of mankind. You are very honest, courteous and friendly, although you can be quite impressionable by people you highly respect. You are very passionate and appear a lot older than you actually are.";
							break;

					}//end switch

				}//end for
			}//end if else

		}//end if

		else {
			document.getElementById("resultPara").innerHTML = "You are NOT called by a NUMBER, are you...!! Please Enter Your NAME in the above box!";

		}//end if/else

	}//end if
	else {
		document.getElementById("resultPara").innerHTML = "Ohhh come on...!! Please Enter Your Name in the above box!";

	}//end if/else


}//end of function fortuneFinder