const ruleta_img = document.getElementById('img-ruleta');
const btn_ruleta = document.getElementById('btn-ruleta');


function girar() {
    let rand = Math.random() * 7200;
    calcular(rand);
    document.getElementById('audio').play()

    btn_ruleta.classList.add('hidden');
    setTimeout(() => {
        btn_ruleta.classList.remove('hidden');
    }, 5000);

    function calcular(rand) {

        let valor = rand / 360;
        valor = (valor - parseInt(valor.toString().split(".")[0])) * 360;
        ruleta_img.style.transform = "rotate(" + rand + "deg)";
    }
}

btn_ruleta.addEventListener('click', girar);