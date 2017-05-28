/*
This is empty on purpose! Your code to build the resume will go here.
 */

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
				if (bio.skills.length > 0) {
					$("#header").append(HTMLskillsStart);
					bio["skills"].forEach(function (x) {
						var HTMLskill = HTMLskills.replace("%data%", x);
						$("#header").append(HTMLskill);

					})
				}
					
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


function school() {
	var education = {
		"schools": [
			{
				"name": "Jedlik Ányos Gépipari és Informatikai Szakgimnáziuma,Szakközépiskolája és Kollégiuma",
				"location": "Győr, Hungary",
				"degree": "GCSE",
				"major": ["Network configuration"],
				"dates": "2006-2007",
				"url": "http://www.jaisz.hu/"
			},
			{
				"name": "Jedlik Ányos Gépipari és Informatikai Szakgimnáziuma,Szakközépiskolája és Kollégiuma",
				"location": "Győr, Hungary",
				"degree": "GCSE",
				"major": ["CNC machining", "Microsoft Office"],
				"dates": "2001-2002",
				"url": "http://www.jaisz.hu/"
			},
			{
				"name": "Pápai Református Kollégium Gimnáziuma és Művészeti Szakgimnáziuma",
				"location": "Pápa, Hungary",
				"degree": "GCSE",
				"major": ["Math", "Physics", "Chemistry", "Literal"],
				"dates": "1995-1999",
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
		],
		display: function () {

			var counter = (function() {
			  var privateCounter = 0;
			  function changeBy(val) {
			    privateCounter += val;
			  }
			  return {
			    increment: function() {
			      changeBy(1);
			    },
			    decrement: function() {
			      changeBy(-1);
			    },
			    value: function() {
			      return privateCounter;
			    }
			  };   
			})();

			var HTMLschoolTemplate = [
				[
					HTMLschoolName,
					HTMLschoolLocation,
					HTMLschoolDegree,
					HTMLschoolMajor,
					HTMLschoolDates,
					HTMLonlineURL
				],
				[
					HTMLonlineTitle,
					HTMLonlineSchool,
					HTMLonlineDates,
					HTMLonlineURL
				]
			];

			for (edu in education) {
				if (typeof education[edu] === "object") {
					education[edu].forEach(function (school) {
						$("#education").append(HTMLschoolStart);
						var keys = Object.keys(school);
						keys.forEach(function (key, i) {
							var formattedContent = HTMLschoolTemplate[counter.value()][i].replace("%data%", school[key]);
							$(".education-entry:last").append(formattedContent);
						})
					});
					counter.increment();
				}
			}
		}		
	}
	education.display();
}
school();


function displayWork() {
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
		],
	display: function () {

		var HTMLtemplate = [
			HTMLworkEmployer,
			HTMLworkTitle,
			HTMLworkLocation,
			HTMLworkDates,
			HTMLworkDescription
]

		var jobsObject = work.jobs;
		for (job in jobsObject) {
			if (jobsObject.hasOwnProperty(job)) {
				$("#workExperience").append(HTMLworkStart);
				var a = jobsObject[job]; // get object key value pairs
				var b = Object.keys(a); // get keys of Objects
				b.forEach(function(key,i){ // iterate through ths key of Objects
					if (i < 1){
						var formattedEmployer = HTMLtemplate[0].replace("%data%", a["employer"]);
						var formattedTitle = HTMLtemplate[1].replace("%data%", a["title"]);
						var formattedET = formattedEmployer.concat(formattedTitle);
						$(".work-entry:last").append(formattedET);
					} else {
						var formattedContent = HTMLtemplate[i].replace("%data%", a[key]);
						$(".work-entry:last").append(formattedContent);
					}
				})
			}		
		}
	}
}

work.display();
}

displayWork();

var projects = {
	"projects": [
		{
			"title": "Build a Portfolio",
			"dates": "12-05-2017",
			"description": "First project on Udacity",
			"images": ["images/project-image-1.png", "images/project-image-1.png"]
		}
	]
}

projects.display = function () {

	var HTMLtemplate = [
		HTMLprojectTitle,
		HTMLprojectDates,
		HTMLprojectDescription,
		HTMLprojectImage
	];

	for (project in projects) { // checking the keys in the object
		$("#projects").append(HTMLprojectStart);
		if (typeof projects[project] === "object") { // checking if the key is an object
			projects[project].forEach(function (project) { // iterating through the array in the object
				var keys = Object.keys(project); // getting the keys of the object inside the array and return them in an array
				keys.forEach(function (key, i) {
					if (key !== "images") { //checking if the key is not equal to the key image
						var formattedContent = HTMLtemplate[i].replace("%data%", project[key]);
						$(".project-entry:last").append(formattedContent);
					} else {
						if (project[key].length > 0) { // checking if there is any images in the array
							project[key].forEach(function (image) { //getting the elements of the array
								var formattedImage = HTMLtemplate[3].replace("%data%", image);
								$(".project-entry:last").append(formattedImage);
							})
						}
					}
				})
			})
		}
	}
}

projects.display();

function school() {
	var education = {
		"schools": [
			{
				"name": "Jedlik Ányos Gépipari és Informatikai Szakgimnáziuma,Szakközépiskolája és Kollégiuma",
				"location": "Győr, Hungary",
				"degree": "GCSE",
				"major": ["Network configuration"],
				"dates": "2006-2007",
				"url": "http://www.jaisz.hu/"
			},
			{
				"name": "Jedlik Ányos Gépipari és Informatikai Szakgimnáziuma,Szakközépiskolája és Kollégiuma",
				"location": "Győr, Hungary",
				"degree": "GCSE",
				"major": ["CNC machining", "Microsoft Office"],
				"dates": "2001-2002",
				"url": "http://www.jaisz.hu/"
			},
			{
				"name": "Pápai Református Kollégium Gimnáziuma és Művészeti Szakgimnáziuma",
				"location": "Pápa, Hungary",
				"degree": "GCSE",
				"major": ["Math", "Physics", "Chemistry", "Literal"],
				"dates": "1995-1999",
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
		],
		display: function () {

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
					HTMLschoolLocation,
					HTMLschoolDegree,
					HTMLschoolMajor,
					HTMLschoolDates,
					HTMLonlineURL
				],
				[
					HTMLonlineTitle,
					HTMLonlineSchool,
					HTMLonlineDates,
					HTMLonlineURL
				]
			];

			for (edu in education) {
				if (typeof education[edu] === "object") {
					education[edu].forEach(function (school) {
						$("#education").append(HTMLschoolStart);
						var keys = Object.keys(school);
						keys.forEach(function (key, i) {
							var formattedContent = HTMLschoolTemplate[counter.value()][i].replace("%data%", school[key]);
							$(".education-entry:last").append(formattedContent);
						})
					});
					counter.increment();
				}
			}
		}
	}
	education.display();
}
school();

var work = {
	"jobs": [
		{
			"employer": "Udacity",
			"title": "Course Developer",
			"location": "Mountain View, CA",
			"dates": "Feb 2014 - Current",
			"description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
		},
		{
			"employer": "LearnBIG",
			"title": "Software Engineer",
			"location": "Seattle, WA",
			"dates": "May 2013 - Jan 2014",
			"description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
		},
		{
			"employer": "LEAD Academy Charter High School",
			"title": "Science Teacher",
			"location": "Nashville, TN",
			"dates": "Jul 2012 - May 2013",
			"description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
		},
		{
			"employer": "Stratford High School",
			"title": "Science Teacher",
			"location": "Nashville, TN",
			"dates": "Jun 2009 - Jun 2012",
			"description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
		}
	],
	"jobs2": [
		{
			"employer": "Udacity",
			"title": "Course Developer",
			"location": "Mountain View, CA",
			"dates": "Feb 2014 - Current",
			"description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
		},
		{
			"employer": "LearnBIG",
			"title": "Software Engineer",
			"location": "Seattle, WA",
			"dates": "May 2013 - Jan 2014",
			"description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
		},
		{
			"employer": "LEAD Academy Charter High School",
			"title": "Science Teacher",
			"location": "Nashville, TN",
			"dates": "Jul 2012 - May 2013",
			"description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
		},
		{
			"employer": "Stratford High School",
			"title": "Science Teacher",
			"location": "Nashville, TN",
			"dates": "Jun 2009 - Jun 2012",
			"description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
		}
	]
};

// Your code goes here! Let me help you get started

function locationizer(work_obj) {
	var locations = [];
	for (var job in work_obj) {
		work_obj[job].forEach(function (key) {
			var newArray = (key["location"]);
			locations.push(newArray);
		})
	} return locations;
}

// Did locationizer() work? This line will tell you!
console.log(locationizer(work));


$("#main").append(internationalizeButton);

function inName(name){
	name = bio.name;
    var oldNameSplit = name.trim().split(' ');
	var firstName = oldNameSplit[0];
	var lastName = oldNameSplit[1];
    firstName = firstName.slice(0,1).toUpperCase() + firstName.slice(1).toLowerCase();
	lastName = lastName.toUpperCase();
    
    name = firstName + " " + lastName;
	console.log(name);
	return name;
}
