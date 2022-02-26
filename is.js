var left = document.querySelector('.left');
var right = document.querySelector('.right');
var tS =  document.querySelector('.Slider').children;
var nbr =tS.length;
var index = 0;

right.onclick = function(){
  next('next');
}
left.onclick = function(){
  next('prev');
}
function next(direction){
    if(direction=='next'){
        index++;
        if(index==nbr) index=0;
    }
    else{
        index--;
        if(index==-1) index=nbr-1;
    }
    for(var i=0;i<nbr;i++) tS[i].classList.remove('active');
    tS[index].classList.add('active');
}