import React, {Component} from 'react'
import {connect} from 'react-redux'
import Post from '/Post'
import axios from 'axios'

class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            posts:[],
            search: '',
            userposts: true
        }
    }
    handleInput = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    componentDidMount(){
        axios.get(`/api/post/${this.props.users.id}`)
        .then(res => {
            this.setState({posts: res.data})
        })
        .catch(err => console.log(err))
    }

    render(){
        const mappedPosts = this.state.posts.map((post, index) =>{
            return (
                <Post key={index} post={post}/>
            )
        })

        return(
            <div>
                <input onChange={(event) => this.handleInput(event)}/>
                <button>Search</button>
                <button>Reset</button>
                <input type='checkbox' id='My Posts'/>
                {mappedPosts}
            </div>
        )
    }
}
const mapStateToProps = (reduxState) => {
    return reduxState

export default connect(mapStateToProps)(Dashboard);