function Student(name,email) {

	this.getName = function() {
		return name;
	}
	this.getEmail = function() {
		return email;
	}
	let homeworkResult = [];

	this.addHomeworkResult = function(topic, success) {
		this.topic = topic;
		this.success = success

		let obj = {
			topic: this.topic,
			success: this.success
		};
		homeworkResult.push(obj)			
	}
	
	this.getHomeworkResult = function() {
		return homeworkResult; 
	}
}


function FrontendLab(students,failedLimit) {

	this.addHomeworkResults = function(obj) {
		students.forEach(student => {
			obj.results.forEach(result => {
				if (student.email === result.email) {
					let studentHomework = {
						topic: obj.topic,
						success: result.success
					}					
					if (student.homework){
						student.homework.push(studentHomework)
					} else {
						student.homework = new Array()
						student.homework.push(studentHomework);
					}
				}				
			});
		})
	}

	this.printStudentList = function() {
		students.forEach(student => {
			console.log(`name: ${student.name}, email: ${student.email}`);
			console.log(student.homework);
		})
	}

	this.printStudentsEligibleForTest = function() {
		students.forEach(student => {
			let failed = 0;
			student.homework.forEach(obj => {
				!obj.success ? failed +=1 : failed 
				student.failed = failed;
			},0)
			if (student.failed <= failedLimit) {
				console.log(`name: ${student.name}, email: ${student.email}`)
			} 
		})
	}
}
