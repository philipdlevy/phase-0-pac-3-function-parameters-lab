function introduction(name) {
    return (`Hi, my name is ${name}.`)
}
introduction("Philip");

function introductionWithLanguage(name, language) {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
}
introductionWithLanguage("philip", " ");

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
}
introductionWithLanguageOptional("philip", " ");
