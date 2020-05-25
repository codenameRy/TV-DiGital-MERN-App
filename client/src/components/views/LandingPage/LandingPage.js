import React, { Component } from "react";
import Axios from 'axios';
import MainHeaderImage from './MainHeaderImage';
import '../../Styles/App.css';
import { Typography, Row } from "antd";

const { Title } = Typography;


let BaseURL = 'https://api.themoviedb.org/3/';
let EndPoint = 'tv/popular?api_key=a0265ab770ca0c045998969cf812d64f&language=en-US&page=1';
let ImageURL = 'http://image.tmdb.org/t/p/';


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
        {this.state.tvShows[0] &&
        <MainHeaderImage image={`${ImageURL}w1280${this.state.tvShows[0].backdrop_path && this.state.tvShows[0].backdrop_path}`} 
        title={this.state.tvShows[0].original_name} text={this.state.tvShows[0].overview}/>
        }
        
    
    {/* Body */}
        <div style={{ width: '85%', margin: '1rem auto' }}>

        <Title level={2} > Movies by latest </Title>
        <hr />

        {/* Grid Cars */}
        <Row gutter={[16, 16]}>
        </Row>

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
