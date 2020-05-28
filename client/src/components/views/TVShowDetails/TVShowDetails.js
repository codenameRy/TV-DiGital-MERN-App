import React, { Component } from "react";
import Axios from "axios";
import MainHeaderImage from "../HomePage/MainHeaderImage";
import GridDesignShows from './GridDesignShows';
import { Descriptions, Button, Row } from "antd";

//URL Variables
let ImageURL = `https://image.tmdb.org/t/p/`;
//Image Style Variables
let mainImageSize = "w1280";
let castImageSize = "w200";

class TVShowDetails extends Component {
  state = {
    tvShows: [],
    tvShowCast: []
  };

  async componentDidMount() {
    console.log("component did mount - TV Show Details Page");
    let tvShowID = this.props.match.params.tvShowID;
    
    await Axios.get(
      `https://api.themoviedb.org/3/tv/${tvShowID}?api_key=a0265ab770ca0c045998969cf812d64f&language=en-US`
    ).then((response) => {
      console.log(response);
      this.setState({
        tvShows: response.data,
      });
    });
    await Axios.get(
        `https://api.themoviedb.org/3/tv/${tvShowID}/credits?api_key=a0265ab770ca0c045998969cf812d64f&language=en-US`
        ).then((response) => {
            console.log(response)
        this.setState({
            tvShowCast: response.data.cast
        })
        });
      }
        //B - Sending message to server using Axios post Request
        sendMessageToServer = async () => {
        
      let res = await Axios.post('http://localhost:5000/tvShows', this.state) //Post movie details to the server 
      
      console.log(res) //show the message 8 
      let newMovies = [...this.state.movies]
      newMovies.push({title:this.state.title, director:this.state.director, stars:this.state.stars, 
          image:this.state.image, description:this.state.description})
  
      this.setState({ //9 
        message:res.data.message,
        newMovieID: res.data.newMovieID,
        movies: newMovies,
        newMessage: 'New Movie Loaded!'
      })
    }
  

  render() {
    return (
      <div>
        {/* Main TV Header Image */}
        {this.state.tvShows && (
          <MainHeaderImage
            image={`${ImageURL}${mainImageSize}${
              this.state.tvShows.backdrop_path &&
              this.state.tvShows.backdrop_path
            }`}
            title={this.state.tvShows.original_name}
            text={this.state.tvShows.overview}
          />
        )}

        {/* Body */}
        <div style={{ width: "85%", margin: "1rem auto" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button onClick={this.sendMessageToServer}>Add to Favorite List</Button>
          </div>

            {/* TV Show Details */}
            <Descriptions title='TV Show Details'  
            bordered
            column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
            >
        <Descriptions.Item label='Title'>{this.state.tvShows.name}</Descriptions.Item>
        <Descriptions.Item label='First Air Date'>{this.state.tvShows.first_air_date}</Descriptions.Item>
        <Descriptions.Item label='TV Show Website'>{this.state.tvShows.homepage}</Descriptions.Item>
        <Descriptions.Item label='Average Rating'>{this.state.tvShows.vote_average}</Descriptions.Item>
        <Descriptions.Item label='Vote Count'>{this.state.tvShows.vote_count}</Descriptions.Item>
        <Descriptions.Item label='Status'>{this.state.tvShows.status}</Descriptions.Item>
        <Descriptions.Item label='Popularity'>{this.state.tvShows.popularity}</Descriptions.Item>
        <Descriptions.Item label='Genres'>
            {this.state.tvShows.genres && this.state.tvShows.genres.map((type, index) => (
              <li key={index.id}>{type.genres}</li>
            ))}
        </Descriptions.Item>
      </Descriptions>

      <div style={{ display: "flex", justifyContent: "center" }}>
            <Button>View Actors</Button>
          </div>

            {/* Grid Design Shows */}
          <Row gutter={[16, 16]}>
            {this.state.tvShowCast &&
              this.state.tvShowCast.map((cast, index) => (
                <React.Fragment key={index}>
                  <GridDesignShows
                    actor 
                    image={
                      `${ImageURL}${castImageSize}${cast.profile_path}`}
                      character={cast.character}
                  />
                </React.Fragment>
              ))}
          </Row>

        </div> 
        {/* End of Body div */}

      </div> 
    //   End of whole div
    );
  }
}

export default TVShowDetails;
