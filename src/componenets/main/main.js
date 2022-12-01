import react, { useEffect, useState } from 'react';
import '../../App.css';
import { useNavigate } from "react-router-dom";

export const Main = (props) => {
    const [state, setState] = useState("");
    const [images, setImages] = useState([]);
    const navigate = useNavigate();
    

    useEffect(() => {
        if (props.images !== undefined)
            props.images.then(data => {
                setImages(data)
            })
        console.log(images)
    })

    return (
        <div className="App">
            <h1 className='heading'>React Photo Search</h1>
            <div className='bookmark' onClick={()=>{
                navigate("/bookmark")
            }}>Bookmark</div>
            <input type={"search"} id="search" onChange={(e) => { props.setState(e.target.value) }} />
            <button onClick={() => props.fetchImages()}>Search</button>
            {images.length !== 0 &&
                images.value.map((val, id) => {
                    return (
                        <div onMouseEnter={() => {
                            document.getElementById(id).style.display = "block"
                        }} onMouseLeave={()=>{
                            document.getElementById(id).style.display="none"
                        }}>
                            <img src={val.url} alt="img" />
                            <h1 id={id} className='book' style={{ display: "none" }} onClick={()=>{
                                props.setBook([...props.bookmark,val.url])
                            }}>Add to bookmark</h1>
                        </div>
                    )
                })
            }
        </div>
    );
}