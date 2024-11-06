function getName(rollNumber) {
    if (rollNumber === "271238") return "Muhammad Umair Khan";
    if (rollNumber === "270914") return "Muhammad Junaid Khan";
    if (rollNumber === "254515") return "Muhammad Ibrahim";
    if (rollNumber === "265574") return "Areeb Khan Anwar ";
    if (rollNumber === "254684") return "Asad Ullah";
    if (rollNumber === "265887") return "Azeem Shahid";
    if (rollNumber === "255284") return "Ahmed Ali";
    if (rollNumber === "259144") return "Abdul moiz";
    if (rollNumber === "260679") return "Abdul Muizz ";
    if (rollNumber === "252944") return "Muhammad Faizan";
    if (rollNumber === "252944") return "M Rehan Shahid ";
    if (rollNumber === "260682") return "Affan Ali ";
    if (rollNumber === "257410") return "Muhammad Bilal";
    if (rollNumber === "265416") return "Abdullah";
    if (rollNumber === "269521") return "IShahab Alimtiaz";
    if (rollNumber === "264939") return "Ali Salahuddin ";
    if (rollNumber === "268417") return "Muhammad Mustafa Hussain";
    if (rollNumber === "267133") return "Musab Bin Ahsan ";
    return "No data found";
}

function getMarks(rollNumber) {
    if (rollNumber === "271238") return "30 / 28";
    if (rollNumber === "270914") return "30 / 27";
    if (rollNumber === "254515") return "30 / 27";
    if (rollNumber === "265574") return "30 / 25";
    if (rollNumber === "254684") return "30 / 25";
    if (rollNumber === "265887") return "30 / 25";
    if (rollNumber === "255284") return "30 / 25";
    if (rollNumber === "259144") return "30 / 25";
    if (rollNumber === "260679") return "30 / 24";
    if (rollNumber === "252944") return "30 / 24";
    if (rollNumber === "252944") return "30 / 24";
    if (rollNumber === "260682") return "30 / 24";
    if (rollNumber === "257410") return "30 / 24";
    if (rollNumber === "265416") return "30 / 23";
    if (rollNumber === "269521") return "30 / 23";
    if (rollNumber === "264939") return "30 / 23";
    if (rollNumber === "268417") return "30 / 23";
    if (rollNumber === "267133") return "30 / 23";
    return null;
}

function getPercentage(rollNumber) {
    if (rollNumber === "271238") return 93;
    if (rollNumber === "270914") return 90;
    if (rollNumber === "254515") return 90;
    if (rollNumber === "265574") return 87;
    if (rollNumber === "254684") return 83;
    if (rollNumber === "265887") return 83;
    if (rollNumber === "255284") return 83;
    if (rollNumber === "259144") return 83;
    if (rollNumber === "260679") return 83;
    if (rollNumber === "252944") return 80;
    if (rollNumber === "252944") return 80;
    if (rollNumber === "260682") return 80;
    if (rollNumber === "257410") return 80;
    if (rollNumber === "265416") return 80;
    if (rollNumber === "269521") return 77;
    if (rollNumber === "264939") return 77;
    if (rollNumber === "268417") return 77;
    if (rollNumber === "267133") return 77;
    return null;
}

function getGrade(rollNumber) {
    if (rollNumber === "271238") return "Pass";
    if (rollNumber === "270914") return "Pass";
    if (rollNumber === "254515") return "Pass";
    if (rollNumber === "265574") return "Pass";
    if (rollNumber === "254684") return "Pass";
    if (rollNumber === "265887") return "Pass";
    if (rollNumber === "255284") return "Pass";
    if (rollNumber === "260679") return "Pass";
    if (rollNumber === "252944") return "Pass";
    if (rollNumber === "252944") return "Pass";
    if (rollNumber === "260682") return "Pass";
    if (rollNumber === "257410") return "Pass";
    if (rollNumber === "265416") return "Pass";
    if (rollNumber === "269521") return "Pass";
    if (rollNumber === "264939") return "Pass";
    if (rollNumber === "268417") return "Pass";
    if (rollNumber === "267133") return "Pass";
    return "No data";
}

function displayResult() {
    const rollNumber = document.getElementById("rollNumber").value;
    // Get data using functions
    const name = getName(rollNumber);
    const marks = getMarks(rollNumber);
    const percentage = getPercentage(rollNumber);
    const grade = getGrade(rollNumber);

    // Check if data is available for the given roll number
    if (name !== "No data found") {
        document.getElementById("resultRollNumber").innerText = `Roll Number: ${rollNumber}`;
        document.getElementById("resultName").innerText = `Name: ${name}`;
        document.getElementById("resultMarks").innerText = `Marks: ${marks}`;
        document.getElementById("resultPercentage").innerText = `Percentage: ${percentage}%`;
        document.getElementById("resultGrade").innerText = `Grade: ${grade}`;
    } else {
        document.getElementById("resultRollNumber").innerText = "No data found for this Roll Number.";
        document.getElementById("resultName").innerText = "";
        document.getElementById("resultMarks").innerText = "";
        document.getElementById("resultPercentage").innerText = "";
        document.getElementById("resultGrade").innerText = "";
    }
}
