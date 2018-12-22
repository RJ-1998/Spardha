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
    case 'Aaja Nachle':
    if(showcategory.innerHTML=="Solo")
    {fees="100";}
    else if(showcategory.innerHTML=="Team"){fees="300";}
    getfees.value=fees;
    break;
    case 'Aaroh Avroh':
    fees="150";
    getfees.value=fees;
    break;
    case 'Swar Bandish':
    fees="1200";
    getfees.value=fees;
    break;
    case 'Dj War':
    fees="1000";
    getfees.value=fees;
    break;
    case 'Paridhan':
    fees="800";
    getfees.value=fees;
    break;
    case 'Pratibha':
    fees="150";
    getfees.value=fees;
    break;
    case 'Rangmanch':
    fees="300";
    getfees.value=fees;
    break;
    case 'The Logicians':
    fees="250";
    getfees.value=fees;
    break;
    case 'Pratiroop':
    fees="150";
    getfees.value=fees;
    break;
    case 'Chakravyuh':
    fees="250";
    getfees.value=fees;
    break;
    case 'Abhikalitra':
    fees="100";
    getfees.value=fees;
    break;
    case 'Kurukshetra(Counter Strike)':
    fees="250";
    getfees.value=fees;
    break;
    case 'Kurukshetra(FIFA)':
    case 'Kurukshetra(BLUR)':
    case 'Kurukshetra(PUBG)':
    fees="100";
    getfees.value=fees;
    break;
    case 'Bridge Designing':
    fees="150";
    getfees.value=fees;
    break;
    case 'Yantra Samar':
    fees="150";
    getfees.value=fees;
    break;
    case 'Anukriti':
    fees="150";
    getfees.value=fees;
    break;
    case 'Yudh kar':
    fees="250";
    getfees.value=fees;
    break;
    case 'Chitrakala':
    fees="150";
    getfees.value=fees;
    break;
    case 'Design Challenge':
    fees="1000";
    getfees.value=fees;
    break;
    case 'Abhivyakti':
    fees="200";
    getfees.value=fees;
    break;
    case 'Bulls & Bears':
    fees="150";
    getfees.value=fees;
    break;
    case 'Management Quiz':
    fees="150";
    getfees.value=fees;
    break;
    case 'Management JAM':
    fees="150";
    getfees.value=fees;
    break;
    default:
    getfees.value="0";
}

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

Array.from(Accommodation).forEach(function(radio){
    radio.addEventListener('click',function(el){
        if(el.target.attributes.value.value == "Yes")
        {
           Accommodation_info[0].style.display="inline";
           Accommodation_info[1].style.display="inline";
        }
        else if(el.target.attributes.value.value == "No")
        {
           Accommodation_info[0].style.display="none";
           Accommodation_info[1].style.display="none";
        }
    });
});

Array.from(category).forEach(function(radio){
    radio.addEventListener('click',function(el){
        if(el.target.attributes.value.value=="Solo"){
              showcategory.innerHTML="Solo";
              teammates.style.display = "none";
              teamname.style.display = "none";
              leader.attributes.placeholder.value="Name*";
        }
        else if(el.target.attributes.value.value=="Team"){
            showcategory.innerHTML="Team";
            teammates.style.display = "inline";
            teamname.style.display= "inline";
            leader.attributes.placeholder.value="Name of Leader*";
        }
    });
});
