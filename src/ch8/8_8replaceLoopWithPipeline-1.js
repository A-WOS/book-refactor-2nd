const input =
    "office, country, telephone\n" +
    "Chicago, USA, +1 312 373 1000\n" +
    "Beijing, China, +86 4008 900 505\n" +
    "Bangalore, India, +91 80 4064 9570\n" +
    "Porto Alegre, Brazil, +55 51 3079 3550\n" +
    "Chennai, India, +91 44 660 44766\n"

function acquireData(input) {
    const lines = input.split("\n");
    const result = [];
    const loopItems = lines
        .slice(1)
        .filter(line => line.trim() !== "")
        .map(line => line.split(","))
        .filter(record => record[1].trim() === "India")
        .map(record => ({city: record[0].trim(), phone: record[2].trim()}))
    ;
    for (const line of loopItems) {
        const record = line;
        result.push({city: record[0].trim(), phone: record[2].trim()});
    }
    return result;
}

console.log(acquireData(input))
