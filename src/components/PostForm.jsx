import React, { Component } from 'react'

class PostForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
        }
    }

    submitHandler = event => {
        event.preventDefault();
    }

    changeInputHandler = event => {
        
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div className="form-group">
                    <label htmlFor="Title">Заголовок поста</label>
                    <input
                        type="text" 
                        className="form-control"
                        id="title"
                        value={this.state.title}
                        onCahge={this.changeInputHandler}
                    />
                </div>
                <button className="btn btn-success" type="submit">Создать</button>
            </form>
        )
    }
} 

export default PostForm