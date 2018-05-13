window.addEventListener('scroll', topGraphicAppear);
window.addEventListener('touchmove', topGraphicAppear);

window.addEventListener('scroll', leftGraphicAppear);
window.addEventListener('touchmove', leftGraphicAppear);

window.addEventListener('scroll', rightGraphicAppear);
window.addEventListener('touchmove', rightGraphicAppear);

window.addEventListener('scroll', solidHeader);
window.addEventListener('touchmove', solidHeader);

function topGraphicAppear(e){
    var topDivHeight = 0;

    var scrollAmount = document.getElementsByTagName('html')[0].scrollTop;
  
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

    e.preventDefault();
};

function leftGraphicAppear(e){
    var topDivHeight = 0;

    var scrollAmount = document.getElementsByTagName('html')[0].scrollTop;
  
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
        orngVertLine3.style.height = 'calc(' + leftDivHeight + 'px' + ' - ' + '5vh - 8px' + ')';
        blueVertLine3.style.height = 'calc(' + leftDivHeight + 'px + 20px)';
    
        blckHorLine3.style.width = 'calc(' + leftDivHeight + 'px'  + ' + 75px + 5vh)';
        blueHorLine3.style.width = 'calc(' + leftDivHeight + 'px' + ' + 75px + 5vh + 15px)';

        blckHorLine4.style.width = 'calc(' + leftDivHeight + 'px' + ' - ' + '75vh)';
        orngHorLine4.style.width = 'calc(' + leftDivHeight + 'px' + ' - ' + '75vh + 25px)';
    };

    if(leftDivHeight < 100){
        blckHorLine4.style.width = 0;
        orngHorLine4.style.width = 0;
    }

    e.preventDefault();
};

function rightGraphicAppear(e){
    var topDivHeight = 0;

    var scrollAmount = document.getElementsByTagName('html')[0].scrollTop;
  
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

    e.preventDefault();
};

function solidHeader(){
    // var headerHeight = document.getElementsByTagName('header').style.height;
    var headerStyle = document.getElementsByTagName('header')[0].style;
    var scrolled = document.getElementsByTagName('html')[0].scrollTop;
    var mottoHeight = document.getElementById('motto').clientHeight;
    var missionHeight = document.getElementById('mission').clientHeight;
    var upperPageHeight = mottoHeight + missionHeight;
    var headerWrapper = document.getElementById('header-wrapper').style;


    if(scrolled > upperPageHeight/3){
    headerStyle.transform = 'scale(0.9)';
    headerWrapper.transform = 'scaleY(0.8)'; 
    headerWrapper.backgroundColor = '#ddd';
    headerWrapper.shadowBox = 'black'
    };

    if(scrolled < upperPageHeight/3){
        headerStyle.backgroundColor = 'transparent';
        headerStyle.transform = 'scale(1)';
        headerWrapper.backgroundColor = 'transparent';
        headerWrapper.transform = 'scale(1)'
    }

    
}