function raise(aPerson, factor) {
    aPerson.slary = aPerson.salary.multiply(1 + factor);
}

raise(aPerson, 0.1);
raise(aPerson, 0.05);
