import { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {fetchDataFromApi} from "./utils/api";
import { useSelector, useDispatch } from 'react-redux';
import { getApiConfiguration } from './store/homeSlice';
import Header from "./components/header/header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/Explore";
import pageNotFound from './pages/404/pageNotFound';


function App() {
    const dispatch = useDispatch();
    const {url} = useSelector((state) => 
    state.home)
    console.log(url);

    useEffect(()=> {
        fetchApiConfig()
    }, []);

    const fetchApiConfig = () => {
        fetchDataFromApi('/configuration')
            .then((res) => {
                console.log(res);

                const url = {
                    backdrop: res.images.secure_base_url + "original", 
                    poster: res.images.secure_base_url + "original", 
                    profile: res.images.secure_base_url + "original", 
                }
                dispatch(getApiConfiguration(url));
            });
    }


    return (<BrowserRouter> 
    <Header/>
        <Routes>    
            <Route path='/' element={<Home/>}/>
            <Route path='/.mediaType/:id' element={<Details/>} />;
            <Route path='/search/:quqry' element={<SearchResult/>} />;
            <Route path='/expore/:mediaType' element={<Explore/>} />;
            <Route path='*' element={<pageNotFound/>} />;
        </Routes>
        {/* <Footer/> */}
    </BrowserRouter>);
}

export default App
