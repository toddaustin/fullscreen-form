(function( window ) {

  var classit = {};





// current class
    classit.currentItem = function(func) {

        //increment count by 1

        var currentElement = document.getElementById('current');
        var previousDot = document.getElementById('active');
        //console.log(currentElement);
        var nextElement = currentElement.nextElementSibling;
        var currentDot = previousDot.nextElementSibling;
        //console.log(nextElement);

        //add hidden class to current element and remove current ID
        classit.addClass(currentElement,'hidden');
        currentElement.removeAttribute('id');



        //if last list item, unhide all
        if(nextElement == null) {
            //console.log("works");
            func('hidden', 'remove');
        } else {
            //console.log("remove hidden");
            classit.removeClass(nextElement, 'hidden', 'dotCurrent');
            nextElement.id = 'current';

            //remove ID active from previous dot and add to current
            previousDot.removeAttribute('id');
            currentDot.id = 'active';
            currentDot.removeAttribute('disabled');

            //set first dot to 'active' here
            count.textContent =  Number(count.textContent) + Number(1);
        }
    };

//addClass
classit.addClass = function addClass(elem, className) {
    //console.log(elem);
    if (elem.classList) {
        elem.classList.add(className);
    } else {
        elem.className += ' ' + className;
    }
};

//removeClass
classit.removeClass = function removeClass(elem, className) {
    if (elem.classList) {
        elem.classList.remove(className);
    } else {
        elem.className = elem.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
};

window.classit = classit;
})( window );
