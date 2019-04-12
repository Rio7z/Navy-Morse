const morse = {
    0:['dash','dash','dash','dash','dash'],1:['dot','dash','dash','dash','dash'],2:['dot','dot','dash','dash','dash'],3:['dot','dot','dot','dash','dash'],4:['dot','dot','dot','dot','dash'],5:['dot','dot','dot','dot','dot'],6:['dash','dot','dot','dot','dot'],7:['dash','dash','dot','dot','dot'],8:['dash','dash','dash','dot','dot'],9:['dash','dash','dash','dash','dot' ],A:['dot','dash'],B:['dash','dot','dot','dot'],C:['dash','dot','dash','dot'],D:['dash','dot','dot'],E:['dot'],F:['dot','dot','dash','dot'],G:['dash','dash','dot'],H:['dot','dot','dot','dot'],I:['dot','dot'],J:['dot','dash','dash','dash'],K:['dash','dot','dash'],L:['dot','dash','dot','dot'],M:['dash','dash'],N:['dash','dot'],O:['dash','dash','dash'],P:['dot','dash','dash','dot'],Q:['dash','dash','dot','dash'],R:['dot','dash','dot'],S:['dot','dot','dot'],T:['dash'],U:['dot','dot','dash'],V:['dot','dot','dot','dash'],W:['dot','dash','dash'],X:['dash','dot','dot','dash'],Y:['dash','dot','dash','dash'],Z:['dash','dash','dot','dot']
}

let pass = [], fail = [], guessAssigned = '', sequence = []
const timeUnit = 500

function start(){
    const score = document.getElementById('score')
    const submit = document.getElementById('submit')
    const start = document.getElementById('start')
    const guess = document.getElementById('guess')
    
    score.innerHTML = `Correct ${pass.length} | Incorrect ${fail.length}`
    start.style.visibility = "hidden"
    submit.style.visibility = "hidden"
    repeat.style.visibility = "hidden"
    guess.style.visibility = "visible"
    
    randomMorse(morse)
    showMorse(sequence)
    setTimeout(() => {submit.style.visibility = "visible", repeat.style.visibility = "visible"}, timeUnit * 20)
}
function repeatSeq() {
    event.preventDefault()
    const repeat = document.getElementById('repeat')

    submit.style.visibility = "hidden"
    repeat.style.visibility = "hidden"

    showMorse(sequence)

    setTimeout(() => {
        submit.style.visibility = "visible",
        repeat.style.visibility = "visible"
    }, timeUnit * 20)
}
function guessAssign() {
    event.preventDefault()
    guessAssigned = document.getElementById('guess').value.toUpperCase()
    
    compareGuess(guessAssigned, sequence)
    document.getElementById("guess").value = ''

    start()
}

function randomMorse(morse) {
    let keys = Object.keys(morse)
    let letter = keys[keys.length * Math.random() << 0 ]
    let code = morse[letter[letter.length * Math.random() << 0 ]]
    
    sequence.push(letter, code)
}

function compareGuess(guessAssigned, sequence){
    const answer = document.getElementById('answer');
    
    (guessAssigned != sequence[0]) 
    ? (answer.innerHTML = 'wrong',
    setTimeout(() => {
        answer.innerHTML = ''
    }, timeUnit * 2),
    fail.push(sequence[0]))
    : (answer.innerHTML = 'right',
    setTimeout(() => {
        answer.innerHTML = ''
    }, timeUnit * 2),
    pass.push(sequence[0]))
    
}

function showMorse(sequence) {
    const flash = document.getElementById('flash')

    function addFlash(time) {
        flash.className = ''
        flash.className += 'flash'
        setTimeout(() => {flash.className = ''}, timeUnit*time)
    }  
    sequence[1].forEach((element, index) => {
        setTimeout(() => {
            (element == 'dash') ? addFlash(3) : addFlash(1)
        }, timeUnit * 4 * (index + 1))
    })

}