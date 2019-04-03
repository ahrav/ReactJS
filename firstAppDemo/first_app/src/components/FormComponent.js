import React from 'react'

function FormComponent(props){
    return (
        <div>
            <form className="meme-form" onSubmit={props.handleSubmit}>
                <input 
                    type="text" 
                    name="topText" 
                    placeholder="Text"
                    value={props.state.topText}
                    onChange={props.handleChange}/>
                <input 
                    type="text" 
                    name="bottomText" 
                    placeholder="Text"
                    value={props.state.bottomText}
                    onChange={props.handleChange}/>
                <button>Generate!</button>
            </form>
        </div>
    )
}

export default FormComponent