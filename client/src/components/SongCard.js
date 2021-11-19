import { Link } from "react-router-dom";
import React from 'react'

export default function SongCard({ title, _id, songUrl, author, tags, likes }) {


    return (
        <div key={_id} className='songCard'>
            <Link className="Link"
                to={`/songs/${_id}`}
            >
                <h3>{title}</h3>
                <h4>{author}</h4>
            </Link>
            <div className='tagsBox'>
                {tags && tags.map((tag, i) => <p key={i}>{tag}</p>)}
            </div>
            <div>
                {likes} likes
            </div>
            <a href={songUrl} download={`${title}_${author}.mid`}>Download</a>
        </div>
    )
}
