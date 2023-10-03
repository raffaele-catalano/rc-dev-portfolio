document.querySelectorAll('.main-btn').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        e.preventDefault();

        const isDarkMode = document.body.classList.contains('light-mode') ? false : true;
        const lang = this.closest('.submit-btn').getAttribute('data-lang');
        const fileTheme = this.getAttribute('data-file');

        let fileName;
        if (isDarkMode) {
            fileName = fileTheme === 'RC_CV' ? `RC_CV_${lang}_Light.pdf` : `RC_CV_${lang}_Dark.pdf`;
        } else {
            fileName = fileTheme === 'RC_CV' ? `RC_CV_${lang}_Dark.pdf` : `RC_CV_${lang}_Light.pdf`;
        }

        const link = document.createElement('a');
        link.href = './docs/' + fileName;
        link.download = fileName;
        link.target = '_blank';

        link.click();
    });
});