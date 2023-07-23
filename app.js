const fan = document.querySelector('.fan')
const btn = document.querySelectorAll('.btn')
const btnTurn = document.querySelector('.btn-0')

btn.forEach(
  btn => {
    btn.addEventListener('click', ()=>{
      let nav = btn.getAttribute('data-nav');
      // console.log(nav)
      if (nav == 1){
          active(btn)
          speed(2)
      }
      else if (nav == 2){
        active(btn)
        speed(1)

    }
    else if (nav == 3){
      active(btn)
      speed(0.5)

    }
    else{
      active(btn)
      speed(0)

    }
  })
  }
)

function active(elem){
  btn.forEach(btn =>{
    btn.classList.remove('active')
  });
  elem.classList.add('active')
}

function speed(value){
  fan.style.animationDuration = `${value}s`
}