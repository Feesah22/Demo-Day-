const heart = document.getElementsByClassName(" fa-heart");
const trash = document.getElementsByClassName("fa-ban");

Array.from(heart).forEach(function(element) {
      element.addEventListener('click', function(){
       // console.log(this.parentNode.parentNode.childNodes)
        const feeling = this.parentNode.parentNode.childNodes[1].innerText
        const venting = this.parentNode.parentNode.childNodes[3].innerText
        const hearts = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        fetch('feelVent', {    
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'mood': feeling,
            'vent': venting,
            'heart': hearts,
            //'hearts':
            
            //'howManyUnderstand':hearts   //figure this part out with savage authentic
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
     });
 });


Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        console.log(this.parentNode.parentNode.childNodes[1].innerText)
       const feeling = this.parentNode.parentNode.childNodes[1].innerText
        const venting = this.parentNode.parentNode.childNodes[3].innerText
       
        fetch('deleteMistake', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'feeling': feeling,
            'venting': venting,
          })
        }).then(function (response) {
          window.location.reload()
        })
        });
});
