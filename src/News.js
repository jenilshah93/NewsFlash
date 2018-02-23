import React, {Component} from 'react';
import axios from 'axios';

class News extends Component {
	constructor(props){
		super(props)
		this.state = {
      articles: []
    };
    var search = this.props.searchString;
   
   if(search === ''){
   	 axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=c91395a7527f45ca8be1fe5b2427c22d`)
              .then(result => {
                const articles = result.data.articles;
                this.setState({ articles });

              })
   }
          
	}
	componentDidUpdate(){
		var search = this.props.searchString;
		 console.log(''+search);
	}
	render() {
		return(
		<div className="News">
      <h1>Top News Flash</h1>
        { this.state.articles.map(article => {
          return (
            <div key = {article.url} className = "article">
            <a href = {article.url} >
            <div className = "each">
            {article.source.name}
            <hr />
            <br /><span className ="title">
            {article.title}</span>
            <br />
            <span className ="desc">
            {article.description}</span>
            </div>
            </a>
            </div>
            )
        })}
      


      </div>

			)
	}
}

export default News;