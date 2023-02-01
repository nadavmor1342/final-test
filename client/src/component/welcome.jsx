import React from 'react';
import "../button.css";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const Welcome = () => {

    const navigator = useNavigate()

  const activateRoute = async () => {
    try {
      const response = await axios.get('http://localhost:3005');
        navigator('/posts')
    } catch (err) {
      console.error(err.message);
    }
  };
    return (
        <div>
            <div class="button-container">
        <span class="mask">get all posts</span>
        <button type="button" name="Hover" onClick={activateRoute}>i am the meser</button>
      </div>
        </div>
    );
}

export default Welcome;
