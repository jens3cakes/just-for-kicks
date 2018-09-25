// 1. Add an event to the 'See Details' content that will create an alert box that says 'Not Available in Hawaii.' after clicking on See Details.
var canShip = document.getElementById('details');
canShip.addEventListener('click', noKicksForU);
function noKicksForU(){
    alert('Not Available in Hawaii.')
    }


//2. Add an event to the div element with the id of 'name1' that will show/hide the description ('descrip1') after hovering over Air Jordan II.
var airName1 = document.getElementById('name1');
airName1.addEventListener("mouseover",giveDescrip);

function giveDescrip(){
    var getDescrip= document.getElementById('descrip1');
    if (getDescrip.style.display == "none"){
        getDescrip.style.display = "block";
    }else{
        getDescrip.style.display = 'none';
    }
} 

//3. Add an event to the div element with the id of 'name2' that will show/hide the following description after clicking on the element.
//'The instantly recognizable Jumpman silhouette made its debut with the Air Jordan 3 during Michael Jordan's 1987-88 NBA season.'
var airName2 = document.getElementById("name2");
airName2.addEventListener("click", shoeDescrip);
var makeDescrip = document.createElement('div')
makeDescrip.id=("descrip2")
makeDescrip.innerHTML="The instantly recognizable Jumpman silhouete made it's debut with the Air Jordan 3 during Michael Jordan's 1987-88 NBA season."
airName2.appendChild(makeDescrip);

function shoeDescrip(){
    var findDescrip2 = document.getElementById('descrip2');
    if (findDescrip2.style.display == 'none'){
        findDescrip2.style.display = 'block'
    }else{
        findDescrip2.style.display = 'none'
    }
}




//You'll need to:
// create a div element with an id of 'descrip2'
//append this element to the div element with the id of 'name2' 



//4. Add events to the all the thumbs up icon that will add a count for each time the icon is clicked on for any shoe.
var thumbsAddUp =document.getElementsByClassName('far fa-thumbs-up')
for (var i= 0;i<thumbsAddUp.length;i++){
thumbsAddUp[i].addEventListener('click',tallyUp);
var countNum = document.createElement('div');
countNum.className = "tally";

thumbsAddUp[i].appendChild(countNum);
}
function tallyUp(){
   var plus = document.getElementsByClassName('tally')[0];
    plus.innerHTML++;
}


//5. Add an event to the plus icon that will increment the price of the Air Jordan V shoe each time the icon is clicked on.


//6. Add an event to the minus icon that will decrement the price of the Air Jordan V shoe each time the icon is clicked on.


//7. Add an event to the Air Jordan XI shoe that will show another colorway for that shoe after hovering over the image. 


//8. Add an event to the Air Jordan XII shoe that will increase the image by 50% after clicking on the image.

//9. Add events to both the plus and minus icon that will add or decrease the price each time the respective icon is clicked on.

//10. Add an event to the Air Jordan XXVIII shoe that will show the famous 'crying Michael Jordan' meme after clicking on the image.