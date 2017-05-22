/*
This is empty on purpose! Your code to build the resume will go here.
 */

/*var firstName = "Laszlo";
var age = 36;
console.log(firstName);


var awesomeThoughts = "I am Laszlo Varga and I am AWESOME";
console.log(awesomeThoughts);
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

$("#main").append(funThoughts);*/

/*var name = "Laszlo Varga";
var role = "Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);*/

var bio = {
	name: "Laszlo Varga",
	role: "Web Developer",
	contacts: {
		mobile: "0775812345",
		email: "something@extra.com",
		github: "https://github.com/Lacika1981",
		location: "Basingstoke"
	},
	welcomeMessage: "Welcome on my BIO page",
	skills: ["HTML", "CSS", "bootstrap", "JavaScript"],
	biopic: "images/197x148.gif",
	display: function(){
		Object.keys(bio).forEach(function(key){
			console.log(key);
			var values = bio[key];
			if (key === "name" ) {
				var HTMLname = HTMLheaderName.replace("%data%", bio[key]);
				$("#header").append(HTMLname);
			}
			if (key === "role") {
				var HTMLrole = HTMLheaderRole.replace("%data%", bio[key]);
				$("#header").append(HTMLrole);
			}
			if (key === "welcomeMessage") {				
				var HTMLmessage = HTMLwelcomeMsg.replace("%data%", bio[key]);
				$("#header").append(HTMLmessage);
			}
			if (key === "skills") {
				$("#header").append(HTMLskillsStart);
				bio["skills"].forEach(function(x){
					var HTMLskill = HTMLskills.replace("%data%", x);
					$("#header").append(HTMLskill);

				})
			}
		})
	}
}

bio.display();



/*var name = HTMLheaderName.replace("%data%", bio["name"]);
var role = HTMLheaderRole.replace("%data%", bio["role"]);

$("#header").prepend(role);
$("#header").prepend(name);

var mobile = HTMLmobile.replace("%data%", bio.contactInfo.mobile);
$("#header").append(mobile);

var email = HTMLemail.replace("%data%", bio["contactInfo"]["email"]);
$("#header").append(email);

var welcomeMsg = HTMLwelcomeMsg.replace("%data%", bio["message"]);
$("#header").append(welcomeMsg);

$("#header").append(HTMLskillsStart);

var skills = HTMLskills.replace("%data%", bio["skills"]);
$("#header").append(skills);

var pic = HTMLbioPic.replace("%data%", bio.picture);
$("#header").append(pic);*/