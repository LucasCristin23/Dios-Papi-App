//-------MIS NUMEROS DEL SORTEO
const numerosGanadores = [
    44 , 55 , 15
];

//-----DESARROLLO
const form = document.querySelector('#formNumber');
form.addEventListener('submit', (e) => {
    e.preventDefault()
})

const btn = document.querySelector('#btn')

btn.addEventListener('click', () => {
    const input = document.querySelector('#input')
    numerosGanadores.includes(Number(input.value)) ? 
    swal("Ganaste", "Ganaste wacho ganaste", "success")
    :
    swal("No ganaste mala ahi","no ganaste la proxima sera", "error")    
});

console.log(numerosGanadores);