// Hello.
//
// This is JSHint, a tool that helps to detect errors and potential
// problems in your JavaScript code.
//
// To start, simply enter some JavaScript anywhere on this page. Your
// report will appear on the right side.
//
// Additionally, you can toggle specific options in the Configure
// menu.

/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	role: "Web Developer",
	name: "Laszlo Varga",
	contacts: {
		mobile: "07758398912",
		email: "vargalaszlo1981@gmail.com",
		github: "https://github.com/Lacika1981",
		location: "Basingstoke"
	},
	biopic: "images/laszlo-varga.jpg",
	welcomeMessage: "Welcome on my BIO page",
	skills: ["HTML", "CSS", "Bootstrap", "JavaScript"]
};

bio.display = function () {
	Object.keys(bio).forEach(function (key) {
		var values = bio[key];
		switch (key) {
			case "role":
				var HTMLrole = HTMLheaderRole.replace("%data%", values);
				$("#header").prepend(HTMLrole);
				break;

			case "name":
				var HTMLname = HTMLheaderName.replace("%data%", values);
				$("#header").prepend(HTMLname);
				break;

			case "welcomeMessage":
				var HTMLmessage = HTMLwelcomeMsg.replace("%data%", values);
				$("#header").append(HTMLmessage);
				break;

			case "skills":
				if (bio.skills.length > 0) {
					$("#header").append(HTMLskillsStart);
					bio.skills.forEach(function (x) {
						var HTMLskill = HTMLskills.replace("%data%", x);
						$("#skills").append(HTMLskill);
					});
				}
				break;

			case "biopic":
				var pic = HTMLbioPic.replace("%data%", values);
				$("#header").append(pic);
				break;

			case "contacts":
				Object.keys(bio.contacts).forEach(function (contact) {
					switch (contact) {
						case "mobile":
							var mobile = HTMLmobile.replace("%data%", bio.contacts[contact]);
							$("#topContacts, #footerContacts").append(mobile);
							break;

						case "email":
							var email = HTMLemail.replace("%data%", bio.contacts[contact]);
							$("#topContacts, #footerContacts").append(email);
							break;

						case "github":
							var github = HTMLgithub.replace("%data%", bio.contacts[contact]);
							$("#topContacts, #footerContacts").append(github);
							break;

						case "location":
							var location = HTMLlocation.replace("%data%", bio.contacts[contact]);
							$("#topContacts, #footerContacts").append(location);
							break;
					}
				});
		}
	});
};


var education = {
	"schools": [
		{
			"name": "Jedlik Ányos Gépipari és Informatikai Szakgimnáziuma,Szakközépiskolája és Kollégiuma",
			"degree": "GCSE",
			"dates": "2006-2007",
			"location": "Győr, Hungary",
			"majors": ["Network configuration"],
			"url": "http://www.jaisz.hu/"
		},
		{
			"name": "Jedlik Ányos Gépipari és Informatikai Szakgimnáziuma,Szakközépiskolája és Kollégiuma",
			"degree": "GCSE",
			"dates": "2001-2002",
			"location": "Győr, Hungary",
			"majors": ["CNC machining", "Microsoft Office"],
			"url": "http://www.jaisz.hu/"
		},
		{
			"name": "Pápai Református Kollégium Gimnáziuma és Művészeti Szakgimnáziuma",
			"degree": "GCSE",
			"dates": "1995-1999",
			"location": "Pápa, Hungary",
			"majors": ["Math", "Physics", "Chemistry", "Literal"],
			"url": "http://http://refi-papa.hu//"
		}
	],
	"onlineCourses": [
		{
			"title": "Front End Web Developer",
			"school": "Udacity",
			"dates": "2017",
			"url": "https://www.udacity.com/"
		}
	]
};

education.display = function () {
	var counter = (function () {
		var privateCounter = 0;
		function changeBy(val) {
			privateCounter += val;
		}
		return {
			increment: function () {
				changeBy(1);
			},
			decrement: function () {
				changeBy(-1);
			},
			value: function () {
				return privateCounter;
			}
		};
	})();

	var HTMLschoolTemplate = [
		[
			HTMLschoolName,
			HTMLschoolDegree,
			HTMLschoolDates,
			HTMLschoolLocation,
			HTMLschoolMajor,
			HTMLonlineURL
		],
		[
			HTMLonlineTitle,
			HTMLonlineSchool,
			HTMLonlineDates,
			HTMLonlineURL
		]
	];

	var eduFunction = function (schoolR) {
		var formattedContent = "";
		$("#education").append(HTMLschoolStart);
		var keys = Object.keys(schoolR);
		keys.forEach(function (key, i) {
			formattedContent += HTMLschoolTemplate[counter.value()][i].replace("%data%", schoolR[key]);
		});
		$(".education-entry:last").append(formattedContent);
	};

	for (var edu in education) {
		if (education.hasOwnProperty(edu)) {
			if (typeof education[edu] === "object") {
				education[edu].forEach(eduFunction);
				counter.increment();
			}
		}
	}
	$(".education-entry:last-child").prepend(HTMLonlineClasses);
};


var work = {
	"jobs": [
		{
			"employer": "Audi Hungaria Zrt.",
			"title": "CNC Operator",
			"location": "Győr, Hungary",
			"dates": "2002-2008",
			"description": "Manufacturing camshafts"
		},
		{
			"employer": "J Sainsbury's",
			"title": "Picker",
			"location": "Basingstoke, England",
			"dates": "2010",
			"description": "Food distributing"
		}
	]
};

work.display = function () {
	var HTMLtemplate = [
		HTMLworkEmployer,
		HTMLworkTitle,
		HTMLworkLocation,
		HTMLworkDates,
		HTMLworkDescription
	];

	var jobsArray = work.jobs;
	jobsArray.forEach(function (jobR) {
		var formArray = [];
		$("#workExperience").append(HTMLworkStart);
		var jobKeys = Object.keys(jobR);
		jobKeys.forEach(function (key, i) {
			var formattedContent = HTMLtemplate[i].replace("%data%", jobR[key]);
			formArray.push(formattedContent);
		});
		for (j = 0; j < formArray.length; j++) {
			if (j === 0) {
				var c = formArray[0].concat(formArray[1]);
				$(".work-entry:last").append(c);
			} if (j > 1) {
				$(".work-entry:last").append(formArray[j]);
			}
		}
	});
};


var projects = {
	"projects": [
		{
			"title": "Build a Portfolio",
			"dates": "12-05-2017",
			"description": "First project on Udacity",
			"images": ["images/project-image-1.jpg", "images/project-image-1.jpg"]
		}
	]
};

projects.display = function () {

	var HTMLtemplate = [
		HTMLprojectTitle,
		HTMLprojectDates,
		HTMLprojectDescription,
		HTMLprojectImage
	];

	var imageAttr = function(x){
		var imageDot = x.indexOf(".");//check the position of the "dot"
		var imageSlash = x.indexOf("/");//check the position of the "/"
		var imageText = x.slice(imageSlash + 1, imageDot);//slice the content
		return imageText;//return the "value"
	};

	var projectFunction = function (projectR) {
		var keys = Object.keys(projectR);
		keys.forEach(function (key, i) {
			if (key !== "images") {
				var formattedContent = HTMLtemplate[i].replace("%data%", projectR[key]);
				$(".project-entry:last").append(formattedContent);
			} else {
				projectR[key].forEach(function (image) {
					var formattedImage = HTMLtemplate[HTMLtemplate.length - 1].replace("%data%", image);
					//imageAttr(image); //calls the function and pass the "image" as an argument
					var imageWithAlt = $(formattedImage).attr("alt", imageAttr(image)); //add the returned value to the formatted image
					$(".project-entry:last").append(imageWithAlt);//append it
				});
			}
		});
	};

	for (var project in projects) {
		if (projects.hasOwnProperty(project)) {
			$("#projects").append(HTMLprojectStart);
			if (typeof projects[project] === "object") {
				projects[project].forEach(projectFunction);
			}
		}
	}
};


bio.display();
education.display();
work.display();
projects.display();

(function displayMap() {
	$("#mapDiv").append(googleMap);
}());