document.addEventListener('scroll', graphicAppear(e))
document.addEventListener('touchmove', graphicAppear(e))

function graphicAppear(e){
    var divHeight = 0;


    var scrollAmount = document.getElementsByTagName('html')[0].scrollTop;
  
    var motto = document.getElementById('motto');
    var mission = document.getElementById('mission');
    var upperPageSize = (motto.clientHeight + mission.clientHeight);

    var divHeight = - upperPageSize + scrollAmount + 280;

    var blckVertLine = document.getElementById('blck-vert-line');
    var orngVertLine = document.getElementById('orng-vert-line');
    var blueVertLine = document.getElementById('blue-vert-line');

    var blckHorLine = document.getElementById('blck-hor-line');
    var orngHorLine = document.getElementById('orng-hor-line');

    if (divHeight < 0){
        blckVertLine.style.height = 0;
        orngVertLine.style.height = 0;
        blueVertLine.style.height = 0;

        blckHorLine.style.width = 0;
        orngHorLine.style.width = 0;
    }else{
        blckVertLine.style.height = divHeight + 'px';
        orngVertLine.style.height = divHeight + 'px';
        blueVertLine.style.height = divHeight + 'px';
    
        blckHorLine.style.width = divHeight + 'px';
        orngHorLine.style.width = divHeight + 'px';
    }

    console.log(divHeight);

    e.preventDefault();
}