 //Fonctionnalité 1: 
  //Lorsque l'utilisateur va cliquer sur 
  //le footer(portant le tag <footer>), 
  //tu afficher le mot "clique" en console
  
  var clickFooter = document.querySelector('footer')[0];
   function onClickFooter() {
  	console.log('clique');
  }
  clickFooter.addEventListener("click", onClickFooter);

  //ou

 /*document.querySelector('footer').addEventListener("click", onClickFooter);
  function onClickFooter() {
  	console.log('clique');
  }*/

  //Fonctionnalité 1-bis: 
  //lorsque l'utilisateur va cliquer sur le footer, 
  //tu vas afficher en console "clic numéro x" avec x 
  //qui commence à 1 et s'incrémente de +1 à chaque clic

 var clickFooter = document.querySelector('footer')[0];
 var x=1;
   function onClickFooter() {
  	console.log('clic numéro'+ x);
  	x++;
  }
  clickFooter.addEventListener("click", onClickFooter);

  //ou

 /*document.querySelector('footer').addEventListener("click", countClickFooter);
 var x=1;
   function countClickFooter() {
  	console.log('clic numéro'+ x);
  	x++;
  }*/


//Fonctionnalité 2: 
  //"hamburger menu" 
  //C'est ce bouton avec trois lignes horizontales 
  //en haut à droite de la navbar.Tu vas faire que 
  //si quelqu'un clique sur ce bouton, l'élément HTML 
  //portant l'Id navbarHeader perde sa classe collapse. 
  //Une fois que ça, ça marche, fait que si on clique à 
  //nouveau dessus, la classe collapse soit rajoutée à 
  //nouveau à l'élément portant l'Id navbarHeader

  function btn_Menu() {
  	let header = document.querySelector('header');
  	let btn = header.querySelector('.navbar-toggler');
  	let div = document.querySelector('div[class*="collapse"]');
  		function visible_Menu(){
  			div.classList.toggle("collapse");
  		};
  		btn.addEventListener("click", visible_Menu);
  }();


  //Fonctionnalité 3:
    //si on clique sur le bouton "Edit" de la première card, 
    //le texte de la card va se mettre en rouge de façon 
    //irréversible (sauf si on recharge la page). À toi de jouer !

 function btn_Menu() {
  	let btn_edit = document.querySelector('.btn.btn-sm.btn-outline-secondary')[0];
  	let text_card= document.querySelector('.card-text')[0];
  		function colorText_card(){
  			text_card.style.color = "red";
  		};
  		btn_edit.addEventListener("click", colorText_card);
  }();


  //Fonctionnalité 4:
    //si on clique sur le bouton "Edit" de la deuxième card,
    //le texte de la card va se mettre en vert. Si on re-clique 
    //dessus, il redevient comme avant ! 

    function btn_Menu() {
  	let btn_edit = document.querySelector('.btn-outline-secondary')[1];
  	
  		function colorText_card(){
  			let text_card= document.querySelector('.card-text')[1];
  			if(text_card.style.color === 'green'){
  				text_card.style.color = '' ;
  			} else {
  				text_card.style.color = 'green';
  				}
  			
  		};
  		btn_edit.addEventListener("click", colorText_card);
  }();


  //Fonctionnalité 5:
    //si un utilisateur double clique sur la navbar en haut, 
    //tout Bootstrap disparaît et la page s'affiche comme si 
    //on avait oublié de mettre le CDN qui la relie au fichier CSS. 
    //Si possible, rends cette fonctionnalité réversible 
    //(un nouveau double-clic fait tout revenir à la normale).

function invisible_Bootsrap() {
  	let click_Bootstrap = document.querySelector('header');
  		click_Bootstrap.addEventListener("dbclick", function() {
  			let bootstrap = document.styleSheets[0]

  			if(bootstrap.disabled === false){
  				 bootstrap.disabled = true;}
  			else {
  				bootstrap.disabled = false;
  				}
  			
  		});
  		
  };
  invisible_Bootstrap()


//Fonctionalité 6 : 
  //La fonctionnalité sera la suivante : 
  //si un utilisateur passe sa souris 
  //sur le bouton "View" d'une card 
  //(n'importe laquelle), celle-ci va 
  //se réduire. Cela veut dire que le 
  //texte disparaît, l'image n'apparaîtra 
  //qu'à 20 % de sa taille d'origine et 
  //les boutons "Edit" / "View" restent visibles. 
  //Cette fonction sera réversible : s'il repasse 
  //sa souris, la card redevient normale !

let cards = document.getElementsByClassName('col-md-4');
let btn_View = document.getElementsByClassName('btn-group');

for (let i = 0; i < cards.length; i++) {
  btn_View[i].firstElementChild.addEventListener('mouseover', function() {
    if (cards[i].getElementsByClassName('card-img-top')[0].style.width === "20%") {
      cards[i].getElementsByClassName('card-img-top')[0].style.width = "100%";
      cards[i].getElementsByClassName('card-text')[0].style.display = "block";
    } else {
      cards[i].getElementsByClassName('card-img-top')[0].style.width = "20%";
      cards[i].getElementsByClassName('card-text')[0].style.display = "none";
    }
  });
}


//Fonctionnalité 7 :
  //Allez on va rajouter un peu de WTF 
  //dans la page : si un utilisateur clique 
  //sur le bouton gris ==>, la dernière card 
  //(en bas à droite) va passer en premier 
  //(en haut à gauche). On va pouvoir faire 
  //tourner les cards !

let move_Cards = document.getElementsByClassName('col-md-4');
let rows = document.getElementsByClassName('row')[1];
let rnd = document.getElementsByClassName('btn-secondary')[0];

rnd.addEventListener("click", function() {
  rows.insertBefore(move_Cards[move_Cards.length-1], move_Cards[0]);
});






     




