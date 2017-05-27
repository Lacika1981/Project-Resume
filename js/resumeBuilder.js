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