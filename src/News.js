import React, {Component} from 'react';
import axios from 'axios';
import config from './constants'

class News extends Component {
	constructor(props){
		super(props)
		this.state = {
      articles: []
    };
    var search = this.props.searchString;
   
   if(search === ''){
   	var url  = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${config.api_key}`;
   	console.log(url);
   	 axios.get(url)
              .then(result => {
                const articles = result.data.articles;
                this.setState({ articles });

              })
   }
          
	}
	componentDidUpdate(){
		
		var search = this.props.searchString;
		 console.log(''+search);
		 if(search!==''){
		var url  = `https://newsapi.org/v2/everything?q=${search}&sortBy=popularity&apiKey=${config.api_key}`
		 	console.log(url);
				axios.get(url)
		              .then(result => {
		                const articles = result.data.articles;
		                this.setState({ articles });

		              })		 
	}
   
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