import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import { Button } from 'antd';
import {Col} from 'antd';
import { Link } from 'react-router-dom'

// import { useSelector } from 'react-redux';

function FavoriteShows(props) {
    // const user = useSelector(state => state.user)

    // const userFrom = props.userFrom
    // const tvShowID = props.tvShowID
    // const tvShowName = props.original_name
    // const tvShowImage = props.backdrop_path //tvShowDetails.

    

    const [FavoriteNumber, setFavoriteNumber] = useState(0)
    const [Favorited, setFavorited] = useState(false)
    const variables = {
        userFrom: props.userFrom,
        tvShowID: props.tvShowID,
        tvShowName: props.original_name,
        tvShowImage: props.backdrop_path
    }



    useEffect(() => {
        //Count number of users who added a tv show to their favorite list
        axios.post('/api/favorite/favoriteNumber', variables)
            .then(response => {
                if (response.data.success) {
                    setFavoriteNumber(response.data.favoriteNumber)
                } else {
                    alert('Failed to get Favorite Number')
                }
            })

            //Count whether the tv show was added or not
        axios.post('/api/favorite/favorited', variables)
            .then(response => {
                if (response.data.success) {
                    setFavorited(response.data.favorited)
                } else {
                    alert('Failed to get Favorite Information')
                }
            })

    }, [])

        const onClickFavorite = () => {

        // if (user.userData && !user.userData.isAuth) {
        //     return alert('Please Log in first');
        // }

        if (Favorited) {
            //when we are already subscribed 
            axios.post('/api/favorite/removeFromFavorite', variables)
                .then(response => {
                    if (response.data.success) {
                        setFavoriteNumber(FavoriteNumber - 1)
                        setFavorited(!Favorited)
                    } else {
                        alert('Failed to Remove From Favorite')
                    }
                })

        } else {
            // when we are not subscribed yet

            axios.post('/api/favorite/addToFavorite', variables)
                .then(response => {
                    if (response.data.success) {
                        setFavoriteNumber(FavoriteNumber + 1)
                        setFavorited(!Favorited)
                    } else {
                        alert('Failed to Add To Favorite')
                    }
                })
        }
    }


    return (
        <>
            
            <Col lg={6} md={8} sm={16} xs={24}>
                 <div style={{ position: 'relative' }}>
                    
                        <Link to="/tv/60735"><img style={{ width: '258px', height: '320px' }} alt={'temp'} src="https://image.tmdb.org/t/p/w500/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg"/>
                        </Link>
                        <Link to="/tv/1668">
                        <img style={{ width: '258px', height: '320px' }} alt={'temp'} src="https://image.tmdb.org/t/p/w500/f496cm9enuEsZkSPzCwnTESEK5s.jpg"/>
                        </Link>
                        <Link to="/tv/1399">
                        <img style={{ width: '258px', height: '320px' }} alt={'temp'} src="https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg"/>
                        </Link>
                        <Link to="/tv/63247">
                        <img style={{ width: '258px', height: '320px' }} alt={'temp'} src="https://image.tmdb.org/t/p/w500/y55oBgf6bVMI7sFNXwJDrSIxPQt.jpg"/>
                        </Link>
                        <Link to="/tv/2190">
                        <img style={{ width: '258px', height: '320px' }} alt={'temp'} src="https://image.tmdb.org/t/p/w500/9BvRze9keEyTzB6ewmDvjzFGYuG.jpg"/>
                        </Link>
                </div>
            </Col>

        </>
    )
}

export default FavoriteShows