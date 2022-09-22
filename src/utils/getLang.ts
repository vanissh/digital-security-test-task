export const getLang = () => navigator.language ?
    (navigator.language[0].substring(3, 5) || navigator.language.substring(3, 5) || navigator.language) :
    navigator.language