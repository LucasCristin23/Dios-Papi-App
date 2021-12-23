//-------MIS NUMEROS DEL SORTEO
const numerosGanadores = [
    15837, 14449, 11183, 11596, 14486, 14341, 13454, 5413, 4235, 14846, 14751, 6393, 6316, 5104, 6252, 6137, 8986, 
    6497, 5383, 5257, 5212, 4277, 8674, 14817, 8877, 2320, 2823, 2645, 74, 24, 6865, 6836, 6775, 6613, 6742, 
    1121, 5549, 2069, 307, 4119, 4087, 4997, 3536, 8591, 4603, 4856, 4828, 13927, 10611, 10739, 10780, 11201, 13404,
    14379, 15532, 15300
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

console.log(numerosGanadores.length);