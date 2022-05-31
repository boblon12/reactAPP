import React, { useState } from "react";
import Button from "./UI/Button";
import MyInput from "./UI/Input";



const Form = ({ create }) => {


    const [title, setTile] = useState('')
    const [body, setBody] = useState('')



    const addNewPost = (e) => {
        e.preventDefault();
        console.log(typeof (title));
        if (title === '' || body === '') {
            alert("Поля пусыте")
        }
        else {
            let newPost = {
                id: Date.now(),
                title: title,
                body: body
            }
            create(newPost);
            setTile('');
            setBody('');
        }

    }

    return (
        <form>
            <MyInput onChange={(e) => { setTile(e.target.value) }} value={title} type="text" placeholder="Название поста" />
            <MyInput onChange={(e) => { setBody(e.target.value) }} value={body} type="text" placeholder="Описание поста" />
            <Button onClick={addNewPost}>Добавить пост</Button>
        </form>
    );
}


export default Form;