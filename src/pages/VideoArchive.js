import React, { Component } from 'react'
import SingleVideo from '../components/SingleVideo';
import videos from '../json/videos.json';
import "../css/video.css";

export default class Video extends Component {
    render() {
        return (
            <div className="videos-page-wrapper">
                <div className="wrapper">
                <div className="title"><h1>Video Arhiva</h1></div>
                    <div className="video-wrapper">
                        {videos.map(video => {
                            return <SingleVideo video={video.video} img={video.img} title={video.title} desc={video.desc}/>
                        })}
                    </div>
                </div>
                
            </div>
        )
    }
}