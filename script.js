let submissions = [
    {
        name: "Jane",
        score: 95,
        date: "2020-01-24",
        passed: true},
    {
        name: "Joe",
        score: 77,
        date: "2018-05-14",
        passed: true},
    {
        name: "Jack",
        score: 59,
        date: "2019-07-05",
        passed: false},
    {
        name: "Jill",
        score: 88,
        date: "2020-04-22",
        passed: true}
];

function addSubmission(array, newName, newScore, newDate) {
    let passingScore = true;
    if (newScore >= 60) {
        passingScore = true;
    } else {
        passingScore = false;
    }

    let newObject = {name: newName, score: newScore, date: newDate, passed: passingScore};
    array.push(newObject);
}

function deleteSubmissionByIndex(array, index) {
    array.splice(index, 1);
}

function deleteSubmissionByName(array, name) {
    let index = array.findIndex(submission => submissions.name === name);
    array.splice(index, 1);
}

function editSubmission(array, index, score) {
    let passingScore = true;
    if (score >= 60) {
        passingScore = true;
    } else {
        passingScore = false;
    }

    let newObject = {name: array[index].name, score: score, date: array[index].date, passed: passingScore};

    array.splice(index, 1, newObject);
}
