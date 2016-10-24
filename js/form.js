(function (window) {

    var dots = document.getElementsByClassName('nav-dots')[0].children;


    //console.log(listItems);
    changeListClass('hidden', 'add');
    
    //helper functions
    function changeListClass(elementClass, action, dotAction) {

        var count = document.getElementById('count');

        //set list items to hidden excpt first
        var listItems = document.querySelectorAll('li');
        var dots = document.getElementsByClassName('nav-dots');
        //console.log(dots);

        for(var i = 0; i < listItems.length; i++) {

            // console.log(listItems[i]);

            if(i == 0 && action == 'add') {
                listItems[i].id = 'current';
                count.textContent = 1;

            } else {

                if(action == 'add') {
                    classit.addClass(listItems[i],elementClass);
                
                }

                if(action == 'remove') {
                    classit.removeClass(listItems[i],elementClass);
                    document.getElementsByTagName('body')[0].style.background = '#fffed8';
                    document.getElementsByTagName('body')[0].style.color = '#000000';
                    document.getElementsByTagName('textarea')[0].style.color = '#666666';
                    document.getElementsByTagName('textarea')[0].style.fontSize = '1.3rem';
                    document.getElementsByTagName('h2')[0].textContent = 'Review & Submit';
                    var num = document.getElementsByClassName('num');

                    var footer = document.getElementsByClassName('footer');
                    var navDots = document.getElementsByClassName('nav-dots');
                    classit.addClass(num[0],'hidden');
                    classit.addClass(navDots[0],'hidden');
                    classit.addClass(footer[0].children[1],'hidden');
                    classit.removeClass(footer[0].children[0],'hidden');



                    var inputs = document.getElementsByTagName('input');
                    var labels = document.getElementsByTagName('label');

                    changeStyle(inputs, 'color', '#666666');
                    changeStyle(inputs, 'fontSize', '1.3rem');
                    changeStyle(labels, 'color', '#000000');
                    changeStyle(labels, 'fontSize', '1.15rem');


                }
            }
        }
    }

    function changeStyle (elements, styleType, styleValue) {
        
        for(var i = 0; i < elements.length; i++) {

            elements[i].style[styleType] = styleValue;
        }
    }


    document.getElementById("continue").addEventListener("click", function(event){

        event.preventDefault();

        classit.currentItem(changeListClass);


    });


    for (var i= 0; i < dots.length; i++) {

        dots[i].addEventListener('click', function(event) {

            event.preventDefault();

            //get current list item
            var currentListItem = document.getElementById('current');

            //get all list items
            var listItems = document.getElementsByTagName('li');

            //add hidden class to current list item and remove id of current
            classit.addClass(currentListItem ,'hidden');
            currentListItem.removeAttribute('id');

            //set selected dots list item to unhidden and current
            listItems[this.value].id = 'current';
            classit.removeClass(listItems[this.value] ,'hidden');
            // classit.addClass(listItems[this.value] ,'animate');


            //get current active dot
            var currentActiveDot = document.getElementById('active');

            //set current dot to active 
            this.id ='active';

            //deactive old dot 
            currentActiveDot.removeAttribute('id');

            //set the number to the current selected
            var count = document.getElementById('count');
            console.log(count);
            count.textContent = Number(this.value) + 1;



    });









    }

})(window);