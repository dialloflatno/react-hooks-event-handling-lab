
function EyeOnMe() {

    function handleFocus() { return console.log('Good!'); }
    function handleBlur() { return console.log('Hey! Eyes on me!'); }



    return (
        <div>

            <button onFocus={handleFocus}
                onBlur={handleBlur}>EyeOnMe</button>

        </div>
    )

}


export default EyeOnMe;