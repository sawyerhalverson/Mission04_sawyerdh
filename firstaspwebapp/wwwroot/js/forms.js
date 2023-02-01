// this is my grade calculator which takes in the different grades, calculates the final grade based on weight, and then assigns the correct letter grade
$("#btnSend").click(function () {

    var assignments = $("#txtAssignments").val();
    var group = $("#txtGroup").val();
    var quizzes = $("#txtQuizzes").val();
    var midterm = $("#txtMidterm").val();
    var final = $("#txtFinal").val();
    var intex = $("#txtIntex").val();

    // create totalGrade variable based on weights
    var totalGrade = (assignments * 0.5) +
        (group * 0.1) +
        (quizzes * 0.1) +
        (midterm * 0.1) +
        (final * 0.1) +
        (intex * 0.1);


    // letterGrade variable initialized
    var letterGrade;
    if (totalGrade >= 94) {
        letterGrade = "A";
    } else if (totalGrade >= 90) {
        letterGrade = "A-";
    } else if (totalGrade >= 87) {
        letterGrade = "B+";
    } else if (totalGrade >= 84) {
        letterGrade = "B";
    } else if (totalGrade >= 80) {
        letterGrade = "B-";
    } else if (totalGrade >= 77) {
        letterGrade = "C+";
    } else if (totalGrade >= 74) {
        letterGrade = "C";
    } else if (totalGrade >= 70) {
        letterGrade = "D+";
    } else if (totalGrade >= 67) {
        letterGrade = "D";
    } else if (totalGrade >= 64) {
        letterGrade = "D-";
    } else {
        letterGrade = "E";
    }


    //alert to display grade
    var html = "Final Grade: " + letterGrade;
    alert(html);
 
})