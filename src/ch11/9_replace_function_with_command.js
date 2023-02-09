function score(candidate, medicalExam, scoringGuide) {
    let result = new Scorer(candidate, medicalExam, scoringGuide).execute();
    return result;
}

class Scorer {
    constructor(candidate, medicalExam, scoringGuide) {
        this._candidate = candidate;
        this._medicalExam = medicalExam;
        this._scoringGuide = scoringGuide;
    }

    execute() {
        this._result = 0;
        this._healthLevel = 0;
        this._highMedicalRiskFlag = false;
        this._certificationGrade = "regular";

        this.scoreSmoking();
        this.certificateGrade();

        this._result -= Math.max(this._healthLevel - 5, 0);
        return this._result;
    }

    certificateGrade() {
        if (this._scoringGuide.stateWithLowCertification(this._candidate.originState)) {
            this._certificationGrade = "low";
            this._result -= 5;
        }
    }

    scoreSmoking() {
        if (this._medicalExam.isSmoker) {
            this._healthLevel += 10;
            this._highMedicalRiskFlag = true;
        }
    }
}
