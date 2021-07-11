let cards=[
    {
        image:"https://i.pinimg.com/originals/9b/95/3c/9b953c4d46574f323d0fc0dc0483d1ff.jpg",
        value:1,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/originals/9b/95/3c/9b953c4d46574f323d0fc0dc0483d1ff.jpg",
        value:1,
        status:"closed"
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo9Y28nsU5favIVaMJD4z5aU6rKAaVuUZC5A&usqp=CAU",
        value:2,
        status:"closed"
    },
    {
     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo9Y28nsU5favIVaMJD4z5aU6rKAaVuUZC5A&usqp=CAU",
    value:2,
    status:"closed"
    },
    {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeU0kPoSmogkIt1ev1qctYBS4hlFjmiXIsspdmVswc21VYx10iqA15WaAoEIk1Zy-ZXwE&usqp=CAU",
    value:3,
    status:"closed"
    },
    {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeU0kPoSmogkIt1ev1qctYBS4hlFjmiXIsspdmVswc21VYx10iqA15WaAoEIk1Zy-ZXwE&usqp=CAU",
    value:3,
    status:"closed"
    },
    {
     image:"https://images-eu.ssl-images-amazon.com/images/I/41pvp70rCvL._AC_UL600_SR378,600_.jpg",
    value:4,
    status:"closed"
    },
    {
    image:"https://images-eu.ssl-images-amazon.com/images/I/41pvp70rCvL._AC_UL600_SR378,600_.jpg",
    value:4,
    status:"closed"
     },
    {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuju0l9UoRY5hHjFXXHZDVp5udpYffnHmWOA&usqp=CAU",
    value:5,
    status:"closed"
    },
    {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuju0l9UoRY5hHjFXXHZDVp5udpYffnHmWOA&usqp=CAU",
     value:5,
     status:"closed"
    },
            
      



    ]

 
  
   
//shuffling the array using Durnsten Algorithm
let temp;
for(let i=cards.length-1;i>=0;i--){
    let j=Math.floor(Math.random()*(i+1));
    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;
}

let cardsCopy=cards;

function displayCards(data) {
    
    let cardsString="";

    data.forEach(function(card,index){
       cardsString+=`
          
         <div class ="card" style="background-image:url('${card.image}')"> 

            <div class="overlay ${card.status}" onclick="openCard(${index})">
            </div>
         </div>

       `;
    });

     
  document.getElementById('cards').innerHTML=cardsString;

}

displayCards(cards);


let cardCount=1;
let val1=null,val2=null;
let score=0;
//click and open the card logic
function openCard(index){

    console.log(cards);
    cards[index].status="opened";
    if(cardCount===1){
          val1=cards[index].value;
          cardCount++;
    }
    else if(cardCount===2){
        val2=cards[index].value;

        if(val1==val2){
             score++;
             document.getElementById('score').innerText=score;

             //reset after one guess
             val1=null;
             val2=null;
             cardCount=1;
        }
       
        else{
            alert("GAME OVER");
            location.reload();

        }
    }


    displayCards(cards);  //New changed array will be displayed

}


