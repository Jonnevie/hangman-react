export function showNotification(setter){
    setter(true);
    setTimeout(()=>{
        setter(false)
    },2000)
}


export function checkWin(correct, wrong, word) {
    let status = 'win'
    //check for win
    word.split('').forEach(letter =>{
        if(!correct.includes(letter)){
            status = '';
        }
    })
    //check for lose
    if(wrong.length === 11) status = 'lose'
    return status;
}
export function addEnter({playAgain}){
    document.addEventListener('keypress',(e)=>{
        if(e.key === 'Enter') {
           playAgain() 
        }
    })
}