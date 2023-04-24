let score = JSON.parse(localStorage.getItem('score')) || {
  win:0,
  loss:0,
  Tie:0

};

updateScoreElement();
  // if(! score) {
  //   score ={
  //     win:0,
  //     loss:0,
  //     Tie:0
  //   };
  // }

 
 
  function playgame(playerMove){

    
  const computerMove = pickComputerMove(); 

   let result ='';
 if(playerMove === 'Scissors') {


       if(computerMove === 'Rock'){
         result='You Loss..';
       }
       
       else if(computerMove === 'Paper'){
         result='You win..';
       }

       else if(computerMove === 'Scissors'){
         result='Tie..';
       }
    }  
  
   else if(playerMove === 'Paper') {


if(computerMove === 'Rock'){
  result='You win..';
}

if(computerMove === 'Paper'){
  result=' Tie..';
}

if(computerMove === 'Scissors'){
  result='you loss..';
}
}  

 else if(playerMove === 'Rock') {


if(computerMove === 'Rock'){
  result=' Tie..';
}

if(computerMove === 'Paper'){
  result='You loss..';
}

if(computerMove === 'Scissors'){
  result='You win..';
}
}  

  if(result === 'You win..'){
    score.win +=1;
  }
  else if(result === 'You Loss..'){
    score.loss +=1;
  }
  else{
    score.Tie +=1;
  }
 
  localStorage.setItem('score',JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML=result;

  document.querySelector('.js-moves').innerHTML=
  `You picked:<img src="image/${playerMove}-emoji.png" class="move-icon">
  and computer picked: <img src="image/${computerMove}-emoji.png "class="move-icon">`;

  
  }
  function updateScoreElement(){
    document.querySelector('.js-score'.innerHTML)=
`Wins: ${score.win}, Losses: ${score.loss}, Tie: ${score.Tie}`;  

}
function updateScoreElement() {
  document.querySelector('.js-score')
  .innerHTML=`wins: ${score.win},Loss: ${score.loss},Ties:${score.Tie}`;

}

  
  
    function pickComputerMove(){
         
        const randomNumber =Math.random();
       
        let computerMove=''; 

        if(randomNumber >=0 && randomNumber <1/3)
          computerMove='Rock';

        else if(randomNumber >=1/3 && randomNumber <2/3){
          computerMove='Paper';
        }

        else if(randomNumber >=2/3 && randomNumber <1){
          computerMove='Scissors';
        }
  return computerMove;
    }


  //   const product1= {
  //   name:'jeck',
  //    ratting: {
  //      stars:4.5
  //    },
  //    funct : function() {
  //     console.log('You are inside the function');
  //    }
  // };
  //  console.log(product1.funct());
  //  console.log(JSON.stringify(product1));
  //  const jsonvariable1=JSON.stringify(product1);
  //  console.log(JSON.parse(jsonvariable1));
  