import React, {Component} from 'react'
import Header from './Header'
import FormComponent from './FormComponent'
import MainComponent from './MainComponent'

class MemeGenerator extends Component{
    constructor(){
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(data => {
                const {memes} = data.data
                this.setState({allMemeImgs: memes})
            })
    }
    handleChange(event){
        const {name, value} = event.target
        this.setState({[name]: value})
    }
    handleSubmit(event){
        event.preventDefault()
        const rand = Math.floor(Math.random() * this.state.allMemeImgs.length)
        this.setState({randImg: this.state.allMemeImgs[rand].url})
    }
    render(){
        return (
            <div>
                <Header />
                <FormComponent state={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                <MainComponent state={this.state}/>
            </div>
        )
    }
}

export default MemeGenerator

