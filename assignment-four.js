function calculateTax(income, expenses) {
    if (income < 0 || expenses < 0 || income < expenses) {
        return "Invalid Input";
    }
    
    let difference = income - expenses;
    let tax = difference * 0.20;
    
    return tax;
}


function sendNotification(email) {
    const getEmail = email.split("@")
    const userName = getEmail[0]
    const domainName = getEmail[1]

    if (typeof email !== "string" || !email.includes("@")) {
        return "Invalid Email";
    }
    return userName+" sent you an email from "+domainName
}


function checkDigitsInName(name) {
    const digit = /\d+?/.test(name)

    if(typeof name !== "string"){
        return "Invalid Input"
    }

    return digit
}


function calculateFinalScore(obj) {
    if ( typeof obj.name !== 'string' || typeof obj.testScore !== 'number' || obj.testScore > 50 || typeof obj.schoolGrade !== 'number' || obj.schoolGrade > 30 || typeof obj.isFFamily !== 'boolean'){
        return "Invalid Input"
    }

    let finalScore = obj.testScore + obj.schoolGrade;
    if (obj.isFFamily) {
        finalScore += 20; 
    }
    
    return finalScore >= 80;
    
}


function waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
        return "Invalid Input";
    }

    let totalTime = 0;
    for (let i = 0; i < waitingTimes.length; i++) {
        totalTime += waitingTimes[i];
    }
    let average = Math.round(totalTime / waitingTimes.length);

    let serialRemaining = serialNumber - waitingTimes.length - 1;
    let remainingTime = average * serialRemaining;
    
    return remainingTime;
}

