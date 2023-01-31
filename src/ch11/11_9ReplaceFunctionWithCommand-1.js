function score(candidate, medicalExam, scoringGuide) {
    return new Scorer().execute(candidate, medicalExam, scoringGuide)
}


class Score {
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
        if (this._scoringGuide.stateWithLoCertification(this._candidate.originState)) {
            this._certificationGrade = "Low";
            this._result -= 5;
        }
        //비슷한 코드가 한참 이어짐
        this._result -= Math.max(this._healthLevel - 5, 0);
        return this._result
    }
}

