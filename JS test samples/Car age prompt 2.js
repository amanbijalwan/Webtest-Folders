//Car age prompt 2
//Using functions and methods
var agedrv = prompt("Enter your Age Dr. Driver");
agedrv = Number(agedrv);
DriveAge();

function DriveAge()
{
		if(agedrv < 18)
		{
			alert("Thou SHALL NOT DRIVE!!!! SAPH HERE Boiiiii!");
		}
		else if(agedrv == 18)
		{
			alert("Eh! A newcomer driver, drive carefully NOOB ONE!");
		}
		else if(agedrv == 42)
		{
			alert("A solution to the world! WELCOME, starting your CaR!")
		}
		else{
			alert("WELCOME MISTER DOCTOR! CAR is PoWeRinG oN! Grrrrrr!");
		}
}
