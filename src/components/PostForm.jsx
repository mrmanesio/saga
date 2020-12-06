import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
        }
    }

    submitHandler = event => {
        event.preventDefault();

        const {title} = this.state

        const newPost = {
            title,
            id: Date.now().toString()
        }

        console.log(newPost);
        this.props.createPost(newPost);
        this.setState({title: ''});
    }

    changeInputHandler = event => {
        this.setState( prev => ({...prev, ...{
            [event.target.name]: event.target.value
        }}))
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
                        name="title"
                        onChange={this.changeInputHandler}
                    />
                </div>
                <button className="btn btn-success" type="submit">Создать</button>
            </form>
        )
    }
} 

const mapDispatchTProps = {
    createPost,
}

export default connect(null, mapDispatchTProps) (PostForm)