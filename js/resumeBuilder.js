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
	/*display: function(){
		Object.keys(bio).forEach(function(key){
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
				bio["skills"].forEach(function(x){
					var HTMLskill = HTMLskills.replace("%data%", x);
					$("#header").append(HTMLskill);

				})
				break

				case "biopic":
				var pic = HTMLbioPic.replace("%data%", bio[key]);
				$("#header").append(pic);
				break

				case "contacts" :
				Object.keys(bio.contacts).forEach(function(contact){
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
		
	}*/
	display: function(){
		
	},
	helper: function(val){
		val = Object.keys(bio).map(function(bioKey){
			return bioKey;
		});
		kej = Object.keys(HTMLtemplate).map(function(key){
			return key;
			
		});
		for (i = 0; i < val.length; i++){
			for (j = 0; j < kej.length; j++){
if (i === j){
			}
		}
		
		}
	}
};

bio.display();
bio.helper();