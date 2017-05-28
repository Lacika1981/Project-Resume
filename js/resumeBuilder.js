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