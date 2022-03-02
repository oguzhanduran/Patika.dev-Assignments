// Method1

function gradingStudents(grades) {
    // Write your code here
    for (let i = 0; i<grades.length; i++) {
        if (grades[i] >= 38) {
            if (grades[i] % 5 == 3 ) {
               grades[i] += 2 
            } else if (grades[i] % 5 == 4) {
                grades[i] += 1
            }
        }

}
return grades
}

// Method2

function gradingStudents(grades) {
    // Write your code here
    var newGrades = [""]
for(let i = 0; i < grades.length; i++) {
    if(grades[i] > 37 ) {
      if (((grades[i]-2) % 5 == 0) || ((grades[i]-1) % 5 == 0) ) {
          newGrades[i] = Number(grades[i])
      }else if((grades[i] % 5) == 3) {
          newGrades[i] = Number(grades[i]) + 2
      }else if((grades[i] % 5) == 4) {
          newGrades[i] = Number(grades[i]) + 1
      } else if(grades[i] % 5 == 0) {
          newGrades[i] = Number(grades[i])
      }
    }else {
    newGrades[i] = Number(grades[i])
}
}
return newGrades
}