//  const button = document.querySelector('.addBTN')
//  const input = document.querySelector('#input')
//  button.addEventListener('click', function(){
//      console.log(input.value);
//      const div = document.createElement('div');
//     div.className = 'item'
//      const p = document.createElement('p');
//      const delBTN = document.createElement('button');
//      delBTN.clasName = 'delete'
//      delBTN.clasName = 'X'
//  const oddButton = document.querySelector('.oddButton');
//  const evenButton = document.querySelector('.evenButton');
//  const paragraphs = document.querySelectorAll('.text');

//  oddButton.addEventListener('click', function(e){
//      paragraphs.forEach((item , index)=>{
//          item.classList.remove('red');
//          if(index % 2 === 0){
//              item.classList.add('red')
//          }
//      })
//  })

//  evenButton.addEventListener('click', function(e){
//      paragraphs.forEach((item , index)=>{
//          item.classList.remove('red');
//          if(index % 2 != 0){
//              item.classList.add('red')
//          }
//      })
//  })
  const oddButton = document.querySelector('.oddButton');
  const evenButton = document.querySelector('.evenButton');
  const paragraphs = document.querySelectorAll('.text');

  oddButton.addEventListener('click' , function(e){
     paragraphs.forEach((item , index)=>{
         item.classList.remove('red');
         if(index % 2 === 0){
             item.classList.add('red')
         }
     })
  })


 evenButton.addEventListener('click' , function(e){
     paragraphs.forEach((item , index)=>{
         item.classList.remove('red');
         if(index % 2 != 0){
             item.classList.add('red');
         }
     })
  })





