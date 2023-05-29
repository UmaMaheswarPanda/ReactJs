import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            comments: '',
            topic:''
        }
    }

    handleUsernameChange = (event) => {
        this.setState({ username: event.target.value })
    }
    handleComments = (event)=>{
        this.setState({ comments: event.target.value })
    }
    handleChange =(event)=>{
        this.setState({topic:event.target.value})
    }
    handleSubmit = (event) =>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    }
    render() {
        const {username,comments,topic}=this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>UserName</label>
                    <input type='text' 
                    value={username}
                    onChange={this.handleUsernameChange} />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={comments} onChange={this.handleComments} name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={topic} onChange={this.handleChange} name="" id="">
                        <option value="" >Select Topic</option>
                        <option value="Technology">Technology</option>
                        <option value="Sports">Sports</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Politics">Politics</option>
                        <option value="Business">Business</option>
                        <option value="Science">Science</option>
                    </select>
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>

        )
    }
}
export default Form;
