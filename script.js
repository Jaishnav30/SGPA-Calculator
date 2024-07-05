function calculateGradePoints(event) {
    // Prevent form from submitting and reloading the page
    if (event) {
        event.preventDefault();
    }

    const Mathematics = parseInt(document.getElementById('Mathematics').value) + parseInt(document.getElementById('Sub1').value) / 2;
    const Physics = parseInt(document.getElementById('Physics').value) + parseInt(document.getElementById('Sub2').value) / 2;
    const POP = parseInt(document.getElementById('POP').value) + parseInt(document.getElementById('Sub3').value) / 2;
    const ESC = parseInt(document.getElementById('ESC').value) + parseInt(document.getElementById('Sub4').value) / 2;
    const ETC = parseInt(document.getElementById('ETC').value) + parseInt(document.getElementById('Sub5').value) / 2;
    const English = parseInt(document.getElementById('English').value) + parseInt(document.getElementById('Sub6').value);
    const Kannada = parseInt(document.getElementById('Kannada').value) + parseInt(document.getElementById('Sub7').value);
    const IDT = parseInt(document.getElementById('IDT').value) + parseInt(document.getElementById('Sub8').value);

    const gp = {
        Mathematics: [getGradePoint(Mathematics), 4],
        Physics: [getGradePoint(Physics), 4],
        POP: [getGradePoint(POP), 3],
        ESC: [getGradePoint(ESC), 3],
        ETC: [getGradePoint(ETC), 3],
        English: [getGradePoint(English), 1],
        Kannada: [getGradePoint(Kannada), 1],
        IDT: [getGradePoint(IDT), 1]
    };

    let CreditPoint = 0;
    for (let subj in gp) {
        CreditPoint += gp[subj][0] * gp[subj][1];
    }
    let sgpa = CreditPoint/20;

    document.getElementById('result').innerHTML = 'Your SGPA is ' + sgpa.toFixed(2);
}

function getGradePoint(marks) {
    if (marks >= 90) {
        return 10;
    } else if (marks >= 80) {
        return 9;
    } else if (marks >= 70) {
        return 8;
    } else if (marks >= 60) {
        return 7;
    } else if (marks >= 45) {
        return 6;
    } else if (marks >= 42) {
        return 4;
    } else {
        return 0;
    }
}
