/*
This is empty on purpose! Your code to build the resume will go here.
 */

var HTMLtemplate = {
	name: HTMLheaderName,
	role: HTMLheaderRole
};

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
	display: function () {
		Object.keys(bio).forEach(function (key) {
			var values = bio[key];
			switch (key) {
				case "name":
					var HTMLname = HTMLheaderName.replace("%data%", bio[key]);
					$("#header").append(HTMLname);
					break

				case "role":
					var HTMLrole = HTMLheaderRole.replace("%data%", bio[key]);
					$("#header").append(HTMLrole);
					break

				case "welcomeMessage":
					var HTMLmessage = HTMLwelcomeMsg.replace("%data%", bio[key]);
					$("#header").append(HTMLmessage);
					break

				case "skills":
					$("#header").append(HTMLskillsStart);
					bio["skills"].forEach(function (x) {
						var HTMLskill = HTMLskills.replace("%data%", x);
						$("#header").append(HTMLskill);

					})
					break

				case "biopic":
					var pic = HTMLbioPic.replace("%data%", bio[key]);
					$("#header").append(pic);
					break

				case "contacts":
					Object.keys(bio.contacts).forEach(function (contact) {
						switch (contact) {
							case "mobile":
								var mobile = HTMLmobile.replace("%data%", bio.contacts[contact]);
								$("#header").append(mobile);
								break

							case "email":
								var email = HTMLemail.replace("%data%", bio.contacts[contact]);
								$("#header").append(email);
								break

							case "github":
								var github = HTMLgithub.replace("%data%", bio.contacts[contact]);
								$("#header").append(github);
								break

							case "location":
								var location = HTMLlocation.replace("%data%", bio.contacts[contact]);
								$("#header").append(location);
								break
						}
					})
			}
		})
	}
}

bio.display();


var education = {
	"schools": [
		{
			"name": "Jedlik Ányos Gépipari és Informatikai Szakgimnáziuma,Szakközépiskolája és Kollégiuma",
			"location": "Győr, Hungary",
			"degree": "GCSE",
			"major": ["Network configuration"],
			"dates": "2006 - 2007",
			"url": "http://www.jaisz.hu/"
		},
		{
			"name": "Jedlik Ányos Gépipari és Informatikai Szakgimnáziuma,Szakközépiskolája és Kollégiuma",
			"location": "Győr, Hungary",
			"degree": "GCSE",
			"major": ["CNC machining","Microsoft Office"],
			"dates": "2001 - 2002",
			"url": "http://www.jaisz.hu/"
		},
		{
			"name": "Pápai Református Kollégium Gimnáziuma és Művészeti Szakgimnáziuma",
			"location": "Pápa, Hungary",
			"degree": "GCSE",
			"major": ["Math, Physics, Chemistry, Literal"],
			"dates": "1995 - 1999",
			"url": "http://http://refi-papa.hu//"
		}
	],
	"onlineCourses": {
		"title": "Front End Web Developer",
		"school": "Udacity",
		"dates": "2017",
		"url": "https://www.udacity.com/"
	}
}

var work = {
	"jobs": [
		{
			"employer": "Audi Hungaria Zrt.",
			"title": "CNC Operator",
			"location": "Győr, Hungary",
			"dates": "2002 - 2008",
			"description": "Manufacturing camshafts"
		},
		{
			"employer": "J Sainsbury's",
			"title": "Picker",
			"location": "Basingstoke, england",
			"dates": "2010 -",
			"description": "Food distributing"
		}
	]
}

var projects = {
	"projects": [
		"title": 
	]
}