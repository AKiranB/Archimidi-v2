import { Link } from "react-router-dom";
import React from 'react'
import DownloadIcon from '@mui/icons-material/Download';
import FavoriteIcon from '@mui/icons-material/Favorite';



export default function SongCard({
    title,
    _id,
    songUrl,
    author,
    tags,
    likes,
    user

}) {

    console.log(user)



    return (
        <div key={_id} className='songCard'>
            <Link className="Link"
                to={`/songs/${_id}`}
            >
                <div className='cardTop'>
                    <h3>{title}</h3>
                    <h4>By {author}</h4>
                </div>
            </Link>
            <div className='tagsBox'>
                {tags && tags.map((tag, i) => <p key={i}>{tag}</p>)}
            </div>
            <div className='likeAndDownloadContainer'>
                <a href={songUrl} download={`${title}_${author}.mid`}><DownloadIcon /></a>
                <p><FavoriteIcon />{likes} </p>
            </div>
        </div>
    )
}
