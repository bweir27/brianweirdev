import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
class Portfolio extends Component {
  render() {

    if(this.props.data){
        // var networks = this.props.data.social.map(function(network){
        //     return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
        // });
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
            <Card className="item-wrap">
                <Card.Img  variant="top" src={projectImage || "placehold-300x200"}/>
                <Card.Body>
                    <Card.Title>{projects.title}</Card.Title>
                    <Card.Text>
                        {projects.desc || "Placeholder"}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button className="moreInfoButton">More Info</Button>
                </Card.Footer>
            </Card>
        </div>
      })
    }

    return (
      <section id="portfolio">
      <div className="row">
         <div className="">
            <h1>Check Out Some of My Projects</h1>
             <CardDeck id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                     {projects}
             </CardDeck>
            {/*<div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">*/}
            {/*    {projects}*/}
            {/*</div>*/}
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
