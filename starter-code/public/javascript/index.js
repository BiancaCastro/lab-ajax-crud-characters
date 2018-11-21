


const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList()
    .then((characters)=>{
    let node= document.querySelector('.characters-container');

    for (var i=0; i<characters.length;i++){

      let characterInfo = `<div class="character-info">
      <div class="name">${characters[i].name}</div>
      <div class="occupation">${characters[i].occupation}</div>
      <div class="cartoon">${characters[i].cartoon}</div>
      <div class="weapon">${characters[i].weapon}</div>
    </div>`
      node.innerHTML += characterInfo;
    }
    });
  }
  
  document.getElementById('fetch-one').onclick = function(){
    
  }
  
  document.getElementById('delete-one').onclick = function(){
        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
                
  }
  charactersAPI.getFullList()
})
