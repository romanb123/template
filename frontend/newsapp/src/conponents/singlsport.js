import React, { Component } from 'react';
import axios from 'axios';

class Singlesports extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
    news:[],
    comments:[]
      };
    }
  
    componentDidMount() {
        axios.all([
             axios.get("http://localhost:3000/sports/"+this.props.match.params.id),
             axios.get("http://localhost:3000/sports/comments/"+this.props.match.params.id),
          ]).then(res => {
            const newsdata = res;
            console.log(this.props.match.params.id);
            console.log(newsdata);

            this.setState({news:newsdata[0]});
        })
    }
  
  
    render() {
        
        return (
           <div>
                <div className="card" style={{width: "40rem",margin:"auto",textAlign:"center"}}>
                 <div className="card-body">
                <h5 className="card-title">{this.state.news.title}</h5>
               <p className="card-text">{this.state.news.body}</p>
               
        </div>
          </div>
         
            </div>
        );

    }
  }

  export default Singlesports;