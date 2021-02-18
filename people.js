function passWord() {
var testV = 1;
var pass1 = prompt('Please Enter Your Password',' ');
while (testV < 3) {
if (!pass1)
window.location.replace("alumni-liberum.com");
if (pass1.toLowerCase() == "qwertasdfgzxcvb6787123") {
alert('You Got it Right!');
document.write('I will post Zoom links in this secure area.');
break;
}
testV+=1;
var pass1 =
prompt('Access Denied - Password Incorrect, Please Try Again.',' ');
testV+=1;
var pass1 =
prompt('Access Denied - Password Incorrect, Please Try Again. This is a very long and complicated password, so do not bother guessing.',' ');
}
if (pass1.toLowerCase()!="qwertyuiopasdfghjklzxcvbnm" & testV ==3)
alert("You have tried incorrectly 3 times, please try again.");
return " ";
}
