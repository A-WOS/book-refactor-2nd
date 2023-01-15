function renderPerson(outStream, person) {
    const result = [];
    result.push(`<p>${person.name}</p>`);
    result.push(renderPhoto(person.photo));
    result.push(emitPhotoData(person.photo));
    return result.join("\n");
}

function photoDiv(p) {
    return [
        "<div>",
        emitPhotoData(p),
        "</div>",
    ].join("\n");
}

function emitPhotoData(aPhoto) {
    return [
        `<p>제목: ${aPhoto.title}</p>`,
        `<p>위치: ${aPhoto.location}</p>`,
        `<p>날짜: ${aPhoto.data.toDateString()}</p>`,
    ].join("\n");
}