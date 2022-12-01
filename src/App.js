import react, { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import { Main } from './componenets/main/main';
import {Route,Routes,BrowserRouter} from "react-router-dom"
import { Bookmark } from './componenets/bookmark/bookmark';

function App() {
  const [state,setState] = useState("");
  const [images,setImages] = useState(undefined);
  const [bookmark,setBookmark] =useState([]);
// console.log(state);

const options = {
  method: 'GET',
  url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI',
  params: {q: state, pageNumber: '1', pageSize: '50', autoCorrect: 'true'},
  headers: {
    'X-RapidAPI-Key': '2b31c2fd36msh23f8c751e33948bp185d8djsnada0f3bc04d8',
    'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
  }
};
useEffect(()=>{
  
},[state])
const fetchImages=()=> {
  const res = axios.request(options).then(function (response) {
    // console.log(response.data);
    return (response.data)
    // return <img src={response.data.value[0].url} alt=""/>
  }).catch(function (error) {
    console.error(error);
  });
  setImages(res)
  console.log(res);
}
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main setState={setState} bookmark={bookmark} setBook={setBookmark} images={images} fetchImages={fetchImages} /> }/>
          <Route path='/bookmark' element={<Bookmark bookmark={bookmark}/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
