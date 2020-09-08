import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import * as carouselStyle from "react-bootstrap";
class Portfolio extends Component {
  render() {

    if(this.props.data){

      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        var github = <li key="github"><a href={projects.github}><i className="fa fa-github projNetwork"></i></a></li>;

          //
          //   for(let i=0; i <= projects.social.length; i+=3){
          //       network.name = projects.social[i];
          //       network.url =  projects.social[i+1];
          //       network.className = projects.social[i+2];
          //   }
          // return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>

        return <div key={projects.title} className="columns portfolio-item">
            <Card className="item-wrap">
                <Card.Img  variant="top" src={projectImage || "placehold-300x200"}/>
                <Card.Body>
                    <Card.Title className="project-title">
                        <h5>{projects.title}</h5>
                    </Card.Title>
                    <Card.Text className="project-desc">
                        {projects.desc || "Placeholder"}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <ul className="networks">
                        {github}
                    </ul>
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
                 <CardDeck id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
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
