import React, { Component } from 'react';
import './App.css';
import './main.css';

const logo = './img/logo.png';
const home = './img/home.png';
const photo = './img/photo.png';
const profile = './img/profile.png';
const search = './img/search.png';
const activity = './img/activity.png';
const top = './img/100.png';
const img = './img/img.png';
const mainimg = './img/mainimg.png';
const like = './img/like.png';
const comments = './img/comments.png';
const fill2800 = './img/fill-2800.png';

class main extends Component {
  render() {
    return (
      <div className="app">
        <img className="top" src={top} />
        <img className="mainlogo" src={logo} />

        <div className="header">
            <div className="a">
                <img className="img" src={img} /> 
            </div>
            <div className="b">
                <div><p className="sarahannloreth">sarahannloreth</p> </div>
                <div className="locationArea">
                    <img className="fill-2800" src={fill2800}/>
                    <p className="Kauai-Hawaii">Kauai, Hawaii</p>
                </div>
            </div>
            <div className="c">
                <p className="Oval-2"></p>
                <p className="Oval-3"></p>
                <p className="Oval-4"></p>
            </div>  
            <div>
                <img className="mainimg" src={mainimg} />
                <img className="like" src={like} />
                <img className="comments" src={comments} />
            </div>          
            <div>
                <p className="sarahannloreth2">sarahannloreth</p>
                <p className="the-edge-of-New-Zeal">the edge of New Zealand! we’re so excited! i will remember this amazing view forever.</p>
                <p id="newzealand-sight">#newzealand #sight #trip #family #friends #yolo</p>
                <p className="View-all-comments">View all comments</p>
            </div>

        </div>

        <div className="bar">
            <img className="home" src={home} />
            <img className="search" src={search} />
            <img className="photo" src={photo} />
            <img className="activity" src={activity} />
            <img className="profile" src={profile} />
        </div>
      </div>
    );
  }
}

export default main;