import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button } from 'antd';
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
            <Button onClick={onClickFavorite}> {!Favorited ? "Add to Favorite" : "Not Favorite"} {FavoriteNumber}</Button>
        </>
    )
}

export default FavoriteShows