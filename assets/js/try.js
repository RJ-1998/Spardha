const validate_data = document.getElementById('validate_data');
const inputs = document.querySelectorAll("input");
const firstphone = document.getElementById('firstPhone');
const secondphone = document.getElementById('secondPhone');
const message = document.getElementById('message');
const Accommodation = document.querySelectorAll('#Accommodation');
const Accommodation_info = document.querySelectorAll('#Accommodation_info');
const category = document.querySelectorAll('#category');
const teammates = document.querySelector('#teammates');
const teamname = document.querySelector('#teamname');
const leader = document.querySelector('#leader');
const auth = document.getElementById('auth');  
const form_div = document.getElementById('form_div');
const leader_info = document.getElementById('leader');
const email_info = document.getElementById('email');
var fees="0";
const select = document.getElementById('select');
const showcategory = document.getElementById('showcategory');
const getfees = document.getElementById('fees');
const check = document.getElementById('checkButton');

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('Name: ' + profile.getName());
    console.log('Email: ' + profile.getEmail()); 
    var name = profile.getName();
    var email = profile.getEmail();
    auth.style.display = "none";
    form_div.style.display = "inline-block";
     leader_info.value = name;
     email_info.value = email;
    }

check.addEventListener('click',function(){
    switch (select.value){
    case 'CRICKET':
    fees="3300";
    getfees.value=fees;
    break;

    case 'BASKETBALL':
    fees="1500";
    getfees.value=fees;
    break;
    
    case 'VOLLEYBALL':
    fees="1200";
    getfees.value=fees;
    break;
    
    case 'TABLETENNIS(TEAMEVENT)':
    fees="800";
    getfees.value=fees;
    break;
    case 'TABLETENNIS(SINGLES)':
    fees="200";
    getfees.value=fees;
    break;
    case 'TABLETENNIS(DOUBLES)':
    fees="300";
    getfees.value=fees;
    break;

    case 'CARROM':
    fees="200";
    getfees.value=fees;
    break;
    
    case 'CHESS':
    fees="200";
    getfees.value=fees;
    break;
    case 'FOOTBALL':
    fees="1500";
    getfees.value=fees;
    break;
    case 'KABADDI':
    fees="1200";
    getfees.value=fees;
    break;
    case '100M':
    fees="100";
    getfees.value=fees;
    break;
    case 'SHOTPUT':
    fees="100";
    getfees.value=fees;
    break;
    case 'LONGJUMP':
    fees="100";
    getfees.value=fees;
    break;
    case 'COUNTERSTRIKE':
    fees="500";
    getfees.value=fees;
    break;
    case 'FIFA':
    fees="150";
    getfees.value=fees;
    break;
    case 'PUBGSQUAD':
    fees="300";
    getfees.value=fees;
    break;
    case 'PUBGSQOLO':
    fees="150";
    getfees.value=fees;
    break;
    case 'CROSSFIT':
    fees="200";
    getfees.value=fees;
    break;
    case 'BOX-CRICKET':
    fees="500";
    getfees.value=fees;
    break;
    default:
    getfees.value="0";
}

console.log(select.value);
const patterns = {
    phone1:/^(7|8|9)[0-9]{9}$/,
    phone2:/^(7|8|9)[0-9]{9}$/,
    contact:/^(7|8|9)[0-9]{9}$/,
    name:/^[a-zA-Z ]+$/,
    college:/^[a-zA-Z ]+$/,
    email:/^[a-zA-Z_0-9]+@(gmail|hotmail|yahoo|).(com|in|)$/
};

function validate(field,regex){
    if(regex.test(field.value))
    {field.style.borderBottom = "2px solid green";}
    else{field.style.borderBottom="2px solid red";}
}
Array.from(inputs).forEach((input)=>{
    input.addEventListener('keyup',(e)=>{
        validate(e.target,patterns[e.target.attributes.name.value]);
    });
});

if(firstphone.value!=secondphone.value && select.value!='')
{
    message.innerHTML="VERIFIED!";
    check.style.display="none";
    validate_data.style.display="inline-block";
}
else{
message.innerHTML="NOT VERIFIED!";
}});
