import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class News extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
    news:[]
      };
    }
  
    componentDidMount() {
        axios.get("http://localhost:3000/news")
        .then(res => {
            const newsdata = res.data;
            console.log(res.data);

            this.setState({news:newsdata});
        })
    }
  
    render() {
        
        return (
           <div>
            {this.state.news.map(onenew => (
                <div className="card" style={{width: "40rem",margin:"auto",textAlign:"center"}} key={onenew.id}>
                 <div className="card-body">
                 <h5 className="card-title">{"post-id:  "+onenew.id}</h5>
                <h5 className="card-title">{"title:  "+onenew.title}</h5>
               <p className="card-text">{"body:  "+onenew.body}</p>
               <button><Link className="nav-link" to={`/article/${onenew.id}`}>read more</Link></button>
              

        </div>
          </div>
            ))}
            </div>
        );

    }
  }

  export default News;