import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

const name = 'romik';
const img1 = "https://picsum.photos/seed/picsum/200/300";
const img2 = "https://picsum.photos/200/300?grayscale";
const img3 = "https://picsum.photos/200/300?grayscale";
const Link = "https://github.com/romikr20";
ReactDOM.render(
  <> <h1 className='heading'>my name is {name}</h1>
    <div className='image_css'>
      <img src={img1} />
      <img src={img2} />
      <a href={Link} target='new'>
        <img src={img3} />
      </a>
    </div>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
