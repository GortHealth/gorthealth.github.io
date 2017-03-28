var loadAnimatedHeader = (function() {

    var docElem = document.documentElement,
        header = document.querySelector('.navbar-default');

    function init() {
        window.addEventListener('load', function(event) {
            setTimeout(changeHeader, 250);
        }, false);
    }

    function changeHeader() {
        classie.add(header, 'navbar-shrink');
    }

    init();

})();