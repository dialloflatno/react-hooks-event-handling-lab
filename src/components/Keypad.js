
function Keypad() {
 function handleChange(){
     return console.log('Entering password...');
 }

    return (
        <div>

<input type="text" onChange = {handleChange}></input>
        </div>
    )

}


export default Keypad;