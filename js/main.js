
window.addEventListener('scroll', topGraphicAppear, false);
window.addEventListener('touchmove', topGraphicAppear, false);

window.addEventListener('scroll', leftGraphicAppear, false);
window.addEventListener('touchmove', leftGraphicAppear, false);

window.addEventListener('scroll', rightGraphicAppear, false);
window.addEventListener('touchmove', rightGraphicAppear, false);

window.addEventListener('scroll', solidHeader, false);
window.addEventListener('touchmove', solidHeader, false);
window.addEventListener('mousemove', solidHeader, false);


var slideMenuAnchor = document.getElementById('slide-menu').querySelectorAll('a');
slideMenuAnchor[0].addEventListener('click', closeSlideMenu);
slideMenuAnchor[1].addEventListener('click', closeSlideMenu);
slideMenuAnchor[2].addEventListener('click', closeSlideMenu);
slideMenuAnchor[3].addEventListener('click', closeSlideMenu);
slideMenuAnchor[4].addEventListener('click', closeSlideMenu);


function topGraphicAppear(e){
    
    e.preventDefault();
    var topDivHeight = 0;

    var scrollAmountMoz = document.getElementsByTagName('html')[0].scrollTop;
    var scrollAmountIE = document.querySelector('body').scrollTop;
    var scrollAmount = scrollAmountIE + scrollAmountMoz;

  
    var motto = document.getElementById('motto');
    var mission = document.getElementById('mission');
    var upperPageSize = (motto.clientHeight + mission.clientHeight);

    var topDivHeight = - upperPageSize + scrollAmount + 280;

    var blckVertLine = document.getElementById('blck-vert-line');
    var orngVertLine = document.getElementById('orng-vert-line');
    var blueVertLine = document.getElementById('blue-vert-line');

    var blckHorLine = document.getElementById('blck-hor-line');
    var orngHorLine = document.getElementById('orng-hor-line');

    if (topDivHeight < 0){
        blckVertLine.style.height = 0;
        orngVertLine.style.height = 0;
        blueVertLine.style.height = 0;

        blckHorLine.style.width = 0;
        orngHorLine.style.width = 0;
        }else{
        blckVertLine.style.height = topDivHeight + 'px';
        orngVertLine.style.height = 'calc(' + topDivHeight + 'px + 10px)';
        blueVertLine.style.height = 'calc(' + topDivHeight + 'px + 20px)';
    
        blckHorLine.style.width = 'calc(' + topDivHeight + 'px + 15px)';
        orngHorLine.style.width = topDivHeight + 'px';
    };
};

function leftGraphicAppear(e){
    
    e.preventDefault();
    var topDivHeight = 0;

    var scrollAmountMoz = document.getElementsByTagName('html')[0].scrollTop;
    var scrollAmountIE = document.querySelector('body').scrollTop;
    var scrollAmount = scrollAmountIE + scrollAmountMoz;

    var motto = document.getElementById('motto');
    var mission = document.getElementById('mission');
    var upperPageSize = (motto.clientHeight + mission.clientHeight);

    var topDivHeight = - upperPageSize + scrollAmount + 280;
    var leftDivHeight = topDivHeight - 450;

    var blckVertLine3 = document.getElementById('blck-vert-line3');
    var orngVertLine3 = document.getElementById('orng-vert-line3');
    var blueVertLine3 = document.getElementById('blue-vert-line3');

    var blckHorLine3 = document.getElementById('blck-hor-line3');
    var blueHorLine3 = document.getElementById('blue-hor-line3');

    var blckHorLine4 = document.getElementById('blck-hor-line4');
    var orngHorLine4 = document.getElementById('orng-hor-line4');

    if (leftDivHeight < 0){
        blckVertLine3.style.height = 0;
        orngVertLine3.style.height = 0;
        blueVertLine3.style.height = 0;

        blckHorLine3.style.width = 0;
        blueHorLine3.style.width = 0;

    }else{
        blckVertLine3.style.height = 'calc(' + leftDivHeight + 'px + 10px)';
        orngVertLine3.style.height = 'calc(' + leftDivHeight + 'px - 5vh - 8px )';
        blueVertLine3.style.height = 'calc(' + leftDivHeight + 'px + 20px)';
    
        blckHorLine3.style.width = 'calc(' + leftDivHeight + 'px'  + ' + 75px + 5vh)';
        blueHorLine3.style.width = 'calc(' + leftDivHeight + 'px' + ' + 75px + 5vh + 15px)';

        blckHorLine4.style.width = 'calc(' + leftDivHeight + 'px - 75vh)';
        orngHorLine4.style.width = 'calc(' + leftDivHeight + 'px' + ' - ' + '75vh + 25px)';
    };

    if(leftDivHeight < 100){
        blckHorLine4.style.width = 0;
        orngHorLine4.style.width = 0;
    }
};

function rightGraphicAppear(e){
    
    e.preventDefault();

    var topDivHeight = 0;

    var scrollAmountMoz = document.getElementsByTagName('html')[0].scrollTop;
    var scrollAmountIE = document.querySelector('body').scrollTop;
    var scrollAmount = scrollAmountIE + scrollAmountMoz;
  
    var motto = document.getElementById('motto');
    var mission = document.getElementById('mission');
    var upperPageSize = (motto.clientHeight + mission.clientHeight);

    var rightDivHeight = - upperPageSize + scrollAmount + 200;

    var blckVertLine2 = document.getElementById('blck-vert-line2');
    var orngVertLine2 = document.getElementById('orng-vert-line2');
    var blueVertLine2 = document.getElementById('blue-vert-line2');

    var blckHorLine2 = document.getElementById('blck-hor-line2');
    var orngHorLine2 = document.getElementById('orng-hor-line2');

    if (topDivHeight < 0){
        blckVertLine2.style.height = 0;
        orngVertLine2.style.height = 0;
        blueVertLine2.style.height = 0;

        blckHorLine2.style.width = 0;
        orngHorLine2.style.width = 0;
        }else{
        blckVertLine2.style.height = rightDivHeight + 'px';
        orngVertLine2.style.height = 'calc(' + rightDivHeight + 'px - 30vh)';
        blueVertLine2.style.height = 'calc(' + rightDivHeight + 'px + 20px)';
    
        blckHorLine2.style.width = 'calc(' + rightDivHeight + 'px + 15px)';
        orngHorLine2.style.width = rightDivHeight + 'px';
    };
};

function solidHeader(e){
    e.preventDefault();
    // var headerHeight = document.getElementsByTagName('header').style.height;
    var headerStyle = document.getElementsByTagName('header')[0].style;
    var scrollAmountMoz = document.getElementsByTagName('html')[0].scrollTop;
    var scrollAmountIE = document.querySelector('body').scrollTop;
    var scrolled = scrollAmountIE + scrollAmountMoz;
    var mottoHeight = document.getElementById('motto').clientHeight;
    var missionHeight = document.getElementById('mission').clientHeight;
    var upperPageHeight = mottoHeight + missionHeight;
    var headerWrapper = document.getElementById('header-wrapper').style;

    if(scrolled > upperPageHeight/3){
    headerStyle.transform = 'scale(0.9)';
    headerWrapper.transform = 'scaleY(0.8)'; 
    headerWrapper.backgroundColor = 'rgba(221, 221, 221, 0.9)';
    headerWrapper.boxShadow = '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)';
    navItems = document.querySelector('nav').querySelector('ul').querySelectorAll('li');
    hamburgerLines = document.getElementById('hamburger').querySelectorAll('path');

        for(i=0; i < navItems.length; i++){
        navItems[i].querySelector('a').style.color = '#333';
        };
        for(i=0; i < hamburgerLines.length; i++){
            hamburgerLines[i].style.stroke = '#333';
        }

    };

    if(scrolled < upperPageHeight/3){
        headerStyle.backgroundColor = 'transparent';
        headerStyle.transform = 'scale(1)';
        headerWrapper.backgroundColor = 'transparent';
        headerWrapper.transform = 'scale(1)';
        headerWrapper.boxShadow = '';
        navItems = document.querySelector('nav').querySelector('ul').querySelectorAll('li');
        hamburgerLines = document.getElementById('hamburger').querySelectorAll('path');
        for(i=0; i < navItems.length; i++){
            navItems[i].querySelector('a').style.color = '#ddd';
        }
        for(i=0; i < hamburgerLines.length; i++){
            hamburgerLines[i].style.stroke = '#ddd';
        }
    };


};

function openSlideMenu(){
    document.getElementById('slide-menu').style.width = '70vw';
    document.getElementById('slide-menu').style.padding = '10vh 5vh';
};

function closeSlideMenu(){
    document.getElementById('slide-menu').style.width = '0vw';
    document.getElementById('slide-menu').style.padding = '10vh 0';
};

    // // Tests if it's IE and uses querySelector instead of getElementByTagName
    // if (/MSIE 10/i.test(navigator.userAgent | /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) ) | /Edge\/\d./i.test(navigator.userAgent)) {

    // }