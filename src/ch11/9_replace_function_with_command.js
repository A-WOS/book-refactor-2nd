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

        if (this._medicalExam.isSmoker) {
            this._healthLevel += 10;
            this._highMedicalRiskFlag = true;
        }

        this._certificationGrade = "regular";
        if (this._scoringGuide.stateWithLowCertification(this._candidate.originState)) {
            this._certificationGrade = "low";
            this._result -= 5;
        }

        // 비슷한 코드가 한참 이어짐
        this._result -= Math.max(healthLevel - 5, 0);
        return this._result;
    }
}
