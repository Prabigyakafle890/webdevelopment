document.getElementById('password').addEventListener('input', function(){
var password = this.value;
var strengthBadge = document.getElementById('strength');
var strength = getPasswordStrength(password);
updateStrengthBadge(strengthBadge, strength);
});

function getPasswordStrength(password){   //takes pw as an argument and returns its strength as a string i.e. weak, average or strong
    var strength = 0;
    if(password.length >= 8) strength++;     //pw contains atleast 8 characters, if yes increments the string score
    if(password.match(/[a-z]/)) strength++;  //atleast one lowercase letter
    if(password.match(/[A-Z]/)) strength++;  //atleast one uppercase letter
    if(password.match(/[^a-zA-Z0-9]/)) strength++; //atleast one special character
    
    if (strength >= 4) {
        return 'strong';
    } else if (strength >= 3) {
        return 'average';
    } else {
        return 'weak';
    }
}

//setting badge strength
function updateStrengthBadge(badge, strength){
    badge.textContent = strength.toUpperCase(); // set the text content of the badge to uppercase version of the strength string(strong, average or weak)
    badge.className = strength;   // sets the class name of the badge to the strength string
}