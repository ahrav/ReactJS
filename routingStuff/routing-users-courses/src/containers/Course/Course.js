import React, { Component } from 'react';

class Course extends Component {
    state = {
        courseTitle: ""
    }

    componentDidMount(){
        this.parseQueryParams();
    }

    componentDidUpdate(){
        this.parseQueryParams();
    }

    parseQueryParams(){
        const query = new URLSearchParams(this.props.location.search);
        console.log(query);
        for (let param of query.entries()) {
            if (this.state.courseTitle !== param[1]){
                this.setState({courseTitle: param[1]})
            }
        }
    }


    render () {
        return (
            <article>
                <h1>{this.state.courseTitle}</h1>
                <p>You Selected the Course with the ID: {this.props.match.params.courseId}</p>
            </article>
        );
    }
}

export default Course;