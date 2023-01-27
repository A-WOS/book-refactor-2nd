if (!aDate.isBefore(plan.summerStart) && !aDate.isAfter(plna.summerEnd))
    charge = quantity * plan.summerRate;
else
    charge = quantity * plan.regularRate + plan.regularServiceCharge;