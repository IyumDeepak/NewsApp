import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

export class News extends Component {
  
  static defaultProps={
    // country: 'in',
     pageSize:6,
     category:'general',
  }

  static propTypes={
   country:PropTypes.string,
   pageSize:PropTypes.number,
   category:PropTypes.string,
  }

      constructor() {
        super();
          console.log("Hello i am a constructor form news components");
          this.state={
              articles: [],
              loading: false,
              page:1

          }
        }
      async componentDidMount(){
        console.log("cdm");
        let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=d41685e01d65452a8d80900a9610c1c1&page:1&pageSize=${this.props.pageSize}`;
        let data=await fetch(url);
        let parsedData=await data.json()
        console.log(parsedData);
        this.setState({articles:parsedData.articles,totalResult: parsedData.totalResult})
      }


       handlePreviousClick= async ()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=d41685e01d65452a8d80900a9610c1c1&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        let data=await fetch(url);
        let parsedData=await data.json()
        console.log(parsedData);
        
        this.setState({
          page:this.state.page - 1,
          articles:parsedData.articles
        })
      }


       handleNextClick= async ()=>{
        if(this.state.page + 1 > Math.ceil(this.state.totalResult/this.props.pageSize)){
        }
        else{
        let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=d41685e01d65452a8d80900a9610c1c1&page=${this.state.page+1}&pageSize= ${this.props.pageSize},
        {this.state.page +1}&pageSize=20`
        let data=await fetch(url);
        let parsedData=await data.json()
        console.log(parsedData);
        
        this.setState({
          page:this.state.page+1,
          articles:parsedData.articles
        })
      }
      }

render() {
  // <h1 className="text-center"></h1>
  console.log("render")
    return (
      <div className="container my-3">
        <h1><b>NewsMonkey- Top Headlines Of Intenational News</b> </h1>

        <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
            {/* <NewsItem title="mytitle" description="mydesc" imageUrl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg" newsUrl="TODO"/> */}
            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
            
           </div>
        })}
         </div>
         <div className="container d-flex justify-content-between">
         <button disabled={this.state.page <= 1}type="button" className="btn btn-info"onClick={this.handlePreviousClick}>&larr; Previous</button>
         <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResult/this.props.pageSize)}type="button" className="btn btn-info"onClick={this.handleNextClick}> Next &rarr;</button>
         </div>
            </div>
    )
  }
}

export default News
