// This Function Insert The Numbers And Symbols Into The Result Area
const func = (value) =>{
    let entry = document.querySelector('.result').value
    entry += value
    document.querySelector('.result').value = entry
}

// This Function Will Clear The Input Values One By One.
const remove = () =>{
    let entry = document.querySelector('.result').value
    if (entry.length != 0 ){
      let clear = entry.replace(entry.charAt(entry.length - 1), '')
      document.querySelector('.result').value = clear
}}

// This Function Evaluates The Expression. It Can Also Evaluate Root Expression If The User Has Psted The Symbol.
const result = () =>{
    let entry = document.querySelector('.result').value
    if (entry.length != 0){
      if (entry.includes('√')){
        for (let index = 0; index < entry.length; index++) {
          if (entry.charAt(index) == '√'){
            let b = entry.replace('√', 'Math.sqrt')
            document.querySelector('.result').value = eval(b)
          }
        }
      }else{
        let evaluate = eval(entry)
        document.querySelector('.result').value = evaluate
      }
    }
}

// This Function Is Used To To Add √ To The Input Area With A Opening Bracket.
// This Will Also Work For Keyboard Backspace
const rootcal = (value) =>{
    let entry = document.querySelector('.result').value
    entry += value + '('
    document.querySelector('.result').value = entry
}

// Only These Key Values Will Be Accepted. So, That User Couldn't Enter Any Hot Key Or Alphabet For Calculation
let char1 = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '/', '*', '-', '+', '(', ')']

// To Get The Refrence Of Body
let body = document.body

// ****************************For Keyboard Presses*****************************************
// Event Listener So That It Could Track Keyboard Inputs Also.
body.addEventListener('keydown', (event)=>{
  if (event.key == 'Enter'){
    result()
  }else if(event.key == 'Delete'){
    del()
  }else if(char1.includes(event.key)){
    let entry = document.querySelector('.result').value
    entry += event.key.toLowerCase()
    document.querySelector('.result').value = entry
  }else if(event.key == 'Backspace'){
    let entry = document.querySelector('.result').value
    if (entry.length != 0 ){
      let clear = entry.replace(entry.charAt(entry.length - 1), '')
      document.querySelector('.result').value = clear
    }
  }
})

