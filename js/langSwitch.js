document.addEventListener("DOMContentLoaded", function () {
    const langToggle = document.getElementById("lang-toggle");
    const englishElements = document.querySelectorAll('[data-lang="en"]');
    const italianElements = document.querySelectorAll('[data-lang="it"]');

    let isEnglish = true;

    langToggle.addEventListener("click", function () {
        if (isEnglish) {
            englishElements.forEach(element => element.style.display = "none");
            italianElements.forEach(element => element.style.display = "block");
        } else {
            englishElements.forEach(element => element.style.display = "block");
            italianElements.forEach(element => element.style.display = "none");
        }

        isEnglish = !isEnglish;
    });
});