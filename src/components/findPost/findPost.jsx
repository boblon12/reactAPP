import React from 'react'
import Button from '../UI/Button'
import MyInput from '../UI/Input'
import classes from './findPost.module.css'

function FindPost({findPost, found}) {


    return (
        <div className={classes.findPost}>
            <MyInput onChange={(e) => { findPost(e.target.value) }} type="text" placeholder="Пост"/>

        </div>
    )
}

export default FindPost