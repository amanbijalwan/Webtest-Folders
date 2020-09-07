var database = [
    {
        username : "Asus",
        password : "pass"
    }
]

var newsfeed = [

	{
		username : "Jon",
		timeline : "Hello World!"
	},
	{
		username : "Amar",
		timeline : "Why is this not green..?"
	},
	{
		username : "Sumit",
		timeline : "Will work hard next time."
	},
	{
		username : "Moha",
		timeline : "Will work harder next time."
	},
	{
		username : "Tao",
		timeline : "Might work harder next time."
	}
];

var usernameprompt = prompt("Your username is?");
var passwordprompt = prompt("Enter password as well");
var passconfirm = prompt("Confirm your password please.");

//function for sign in

function signIn(user, pass)
{
    if(user === database[0].username && pass === database[0].password && passwordprompt === passconfirm)
        {
            console.log(newsfeed);
        }
    else
        {
            alert("Sorry! Wrong usernameeee and paaaassss!");
        }
}

signIn(usernameprompt, passwordprompt);
