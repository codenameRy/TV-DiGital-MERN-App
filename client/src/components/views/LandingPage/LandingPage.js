import React, { Component } from "react";
import Axios from 'axios';
import MainHeaderImage from './MainHeaderImage';
import GridDesign from './GridDesign';
import '../../Styles/App.css';
import { Typography, Row } from "antd";

const { Title } = Typography;

//URL Variables
let BaseURL = 'https://api.themoviedb.org/3/';
let EndPoint = 'tv/popular?api_key=a0265ab770ca0c045998969cf812d64f&language=en-US&page=1';
let ImageURL = 'http://image.tmdb.org/t/p/';

//Image Style Variables
let mainImageSize = 'w1280';
let gridImageSize = 'w500'


class LandingPage extends Component {
    
    state = {
        tvShows: [],
        tvMainHeaderImage: [],
        tvLoading: [],
        tvCurrentPage: 0
    }
    componentDidMount() {
        console.log(
            'component did mount'
        )
        Axios.get(BaseURL+EndPoint)
          .then(response => {
            console.log(response)  
            this.setState({
                tvShows: response.data.results
                // tvResults: response.data.results
            })
          })
    }

    
    render() {
    return (
      <div className="mainDiv">

        {/* Main TV Header Image  */}
        {this.state.tvShows[3] &&
        <MainHeaderImage image={`${ImageURL}${mainImageSize}${this.state.tvShows[3].backdrop_path && this.state.tvShows[3].backdrop_path}`} 
        title={this.state.tvShows[3].original_name} text={this.state.tvShows[3].overview}/>
        }
        
    
    {/* Body */}
        <div style={{ width: '85%', margin: '1rem auto' }}>

        <Title level={2} > Latest TV Shows </Title>
        <hr />

        {/* Grid Cars */}
        <Row gutter={[16, 16]}>
        {this.state.tvShows && this.state.tvShows.map((tvShows, index) => (
                        <React.Fragment key={index}>
                            <GridDesign
                                image={tvShows.poster_path &&
                                    `${ImageURL}${gridImageSize}${tvShows.poster_path}`}
                                tvShowID={tvShows.id}
                            />
                        </React.Fragment>
                    ))}
        </Row>
                        {/* <GridCard
                                image={tvShow.poster_path ?
                                    `${ImageURL}${gridImageSize}${tvShow.poster_path}`
                                    : null}
                                tvShowId={tvShow.id}
                                movieName={tvShow.original_title}
                            /> */}

        {/* Load More Button */}
        <br />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button onClick>Load More</button>
                </div>
        
        </div>
        
      </div>
    );
  }
}

export default LandingPage;
