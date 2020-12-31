(async()=>{
const {value: milton} =await Swal.fire({
  title: '<br class="rojo">Feliz Año Nuevo - 2021!</br>',
  text: 'A pocas horas del año nuevo desearte...Belleza ... Salud ... Alegría ... Felicidad ... ¡Confianza! ¡Este es el comienzo de tu nuevo año! ¡Feliz 2021!',
  imageUrl: 'img/2021.jpg',
  imageWidth: 300,
  imageHeight: 200,
  background:'#fff3b2',
  backdrop: `
	    rgba(230,140,178,0.8)
	    no-repeat`,
  imageAlt: 'Custom image',
  confirmButtonText:'Pulsa Aqui',
  allowOutsideClick:true,
  allowEscapeKey:false,
  allowEnterKey:false,
  stopKeydownPropagation:false,
  padding:'2rem',
  buttonsStyling: true,
  showCloseButton: true,
  closeButtonAriaLabel:'cerrar alerta',
  showConfirmButton: true,
  confirmButtonColor: "#d35d6e",
  confirmButtonAriaLabel: 'confirmar',
	});
  if(milton){
  	 Swal.fire({
	  title: 'Te deseo de todo corazon.<br>Ing. Milton Efrain Yujra Palli',
	  width: 600,

	  padding: '3em',
	  background: '#ffe6e6',
	  timer:5000,
	  timerProgressBar:true,
	  backdrop: `
	    rgba(230,140,178,0.8)
	    no-repeat`,
	  confirmButtonText:'<b>Que todos tus deseos se cumplan!!!</b>',
	  showConfirmButton: true,
	  confirmButtonColor: "#ff4646",
	  confirmButtonAriaLabel: 'confirmar', 
	})
  }

})()
let si=document.getElementById('si');

		si.addEventListener("click",function(e){
			document.getElementById('player').play();
		});
		function bubbles(){
			var count = 200;
			var section= document.querySelector('section');
			var i = 0;
			while(i< count){
				var bubble=document.createElement('i');
				var x= Math.floor(Math.random() * window.innerWidth);
				var y= Math.floor(Math.random() * window.innerHeight);

				var size = Math.random() * 10;
				bubble.style.left = x + 'px';
				bubble.style.top = y + 'px';
				bubble.style.width=1+size+'px';
				bubble.style.height=1+size+'px';

				bubble.style.animationDuration = 10+size+'s';
				bubble.style.animationDelay = -size+'s';

				section.appendChild(bubble);
				i++
			}
		}
		bubbles()