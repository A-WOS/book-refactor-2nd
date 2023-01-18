if (!aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.sumerEnd))
    charge = quantity * plan.summerRate;
else
    charge = quantity * plan.regularRate + plan.regularServiceCharge;
