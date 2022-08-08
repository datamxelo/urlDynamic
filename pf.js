
// The fisrt step is create the buttons inside the landing page


var blackContainer = document.querySelector('.MuiBox-root .jss59')
var blackContainerDown = document.querySelector('.MuiBox-root .jss47')
 var buttonBlack = document.createElement('a');
 buttonBlack.innerHTML = 'Elige ahora'
 buttonBlack.classList.add('btn-black')
 buttonBlack.classList.add('btn-elogia')
 blackContainer.appendChild(buttonBlack)
 blackContainerDown.appendChild(buttonBlack)
 
 
var clasiContainer = document.querySelector('.MuiBox-root .jss60')
var clasiContainerDown = document.querySelector('.MuiBox-root .jss49')
 var buttonClasica = document.createElement('a'); 
 buttonClasica.innerHTML = 'Elige ahora'
 buttonClasica.classList.add('btn-clasica')
 buttonClasica.classList.add('btn-elogia')
 clasiContainer.appendChild(buttonClasica)
 clasiContainerDown.appendChild(buttonClasica)
 
 
 
 // we get the query string from url
 var queryString = window.location.search;
 
 
 // We extract the parameters from url like utm source, utm medium and utm campaign
 var urlParams = new URLSearchParams(queryString)
 var utm_source = urlParams.get('utm_source')
 var utm_medium = urlParams.get('utm_medium')
 var utm_campaign = urlParams.get('utm_campaign')
 
 
 // With the parameters in hands we will build a custom url to each type of subscription if the value of the query string is not null
 // structure of utm: ?utm_source=isra&utm_medium=isra&utm_campaign=isra
 if(queryString){
 
     var url_black = 'https://planetfitnessmxcuernavaca.thememberspot.com/Signup/Planet-Fitness-Cuernavaca/All/Cuernavaca-Black-Card?' + 'utm_source='+utm_source+'&'+'utm_medium='+utm_medium+'&'+'utm_campaign='+utm_campaign
 
     var url_clasica = 'https://planetfitnessmxcuernavaca.thememberspot.com/Signup/Planet-Fitness-Cuernavaca/All/Cuernavaca-Clasica?' + 'utm_source='+utm_source+'&'+'utm_medium='+utm_medium+'&'+'utm_campaign='+utm_campaign
     
 
 }else{
 
     var url_black = 'https://planetfitnessmxcuernavaca.thememberspot.com/Signup/Planet-Fitness-Cuernavaca/All/Cuernavaca-Black-Card'
     var url_clasica = 'https://planetfitnessmxcuernavaca.thememberspot.com/Signup/Planet-Fitness-Cuernavaca/All/Cuernavaca-Clasica'
  
 }
 
 
 // with the urls the next step is get the buttons and make the redirection to the url generated when the user has click
 
 
 var button_black = document.querySelector('.btn-black')
 var button_clasica = document.querySelector('.btn-clasica')
 
 
 button_black.addEventListener('click', function(){
     window.location.href = url_black
 })
 
 
 button_clasica.addEventListener('click', function(){
     window.location.href = url_clasica
 })
 
 