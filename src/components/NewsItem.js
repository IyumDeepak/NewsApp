import React, { Component } from 'react'

export class NewsItem extends Component {

 
  render() {

    let{title,description,imageUrl,newsUrl}=this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
                    <img src={!imageUrl?"https://people.com/thmb/6nL3BHOQlderH0FffN1oJc1Htz8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(506x56:508x58)/nph-burka-122622-cb468353789544ea9f871dfec8d39c5e.jpg":imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a rel="noreferrer"href={newsUrl}target="blank"className="btn btn-sm btn-info">Read More...</a>
                    </div>
                    </div>
      </div>
    )
  }
}

export default NewsItem
