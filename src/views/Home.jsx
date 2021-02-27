import React, { useEffect, useState } from "react";
import ItunesCard from "../components/ItunesCard";
import TvMazeCard from "../components/TvMazeCard"
import CrcindCard from "../components/CrcindCard"
import axios from "axios";
import XmlReader from "xml-reader"
import "../style/form.css";
function Home() {
    const [searchTerms, setSearchTerms] = useState("");
    const [itunesSongs, setItunesSongs] = useState([]);
    const [itunesMovies, setItunesMovies] = useState([]);
    const [itunesEbooks, setItunesEbooks] = useState([]);
    const [tvmaze, setTvmaze] = useState([]);
    const [crcind, setCrcind] = useState([]);

    async function fetchItunesSongs() {
        const response = await fetch(`https://itunes.apple.com/search?media=music&limit=12&term=${searchTerms}`);
        const json = await response.json();
        setItunesSongs(json.results);
    }
    async function fetchItunesMovies() {
        const response = await fetch(`https://itunes.apple.com/search?media=movie&limit=12&term=${searchTerms}`);
        const json = await response.json();
        setItunesMovies(json.results);
    }
    async function fetchItunesEbooks() {
        const response = await fetch(`https://itunes.apple.com/search?media=ebook&limit=12&term=${searchTerms}`);
        const json = await response.json();
        setItunesEbooks(json.results);
    }
    async function fetchTvmaze() {
        const response = await fetch(`http://api.tvmaze.com/search/shows?page=1&q=${searchTerms}`);
        const json = await response.json();
        setTvmaze(json);
    }

    async function fetchCrcind() {
        const response = await fetch(`https://lsyk4.com/testmncapi/api.php?q=${searchTerms}`);
        const json = await response.json();
        setCrcind(json.QueryByName);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setSearchTerms(document.querySelector("#searchTerms").value.trim().replace(" ", "+").toLowerCase());
        fetchItunesSongs();
        fetchItunesMovies();
        fetchItunesEbooks()
        fetchTvmaze();
        fetchCrcind();
    }

    useEffect(function effectSetItunesSongs() {
        fetchItunesSongs();
    }, []);

    return (
        <div className="col-12">
            <div className="row">

                <div className="col-12">
                    <form onSubmit={handleSubmit}>
                        <div className="input-group mb-3 mt-3">
                            <input type="text" name="searchTerms" id="searchTerms" className="form-control bg-dark" placeholder="¿Que deseas buscar?" />
                            <button className="btn btn-outline-secondary" type="submit"><i className="fas fa-search"></i></button>
                        </div>
                    </form>
                </div>
                <div className="col-12 mt-5 mb-5">
                    <div className="row">
                        <h1>Canciones (iTunes)</h1>
                        {
                            itunesSongs.length > 0 ? itunesSongs.map(song => (
                                <ItunesCard image={song.artworkUrl100} title={song.trackName} link={song.trackViewUrl} media={song.previewUrl} />
                            )) : <>Sin resultados ...</>
                        }
                    </div>
                </div>

                <div className="col-12 mt-5 mb-5">
                    <div className="row">
                        <h1>Películas (iTunes)</h1>
                        {
                            itunesMovies.length > 0 ? itunesMovies.map(movie => (
                                <ItunesCard image={movie.artworkUrl100} title={movie.trackName} link={movie.trackViewUrl} media={movie.previewUrl} />
                            )) : <>Sin resultados ...</>
                        }
                    </div>
                </div>

                <div className="col-12 mt-5 mb-5">
                    <div className="row">
                        <h1>Ebooks (iTunes)</h1>
                        {
                            itunesEbooks.length > 0 ? itunesEbooks.map(book => (
                                <ItunesCard image={book.artworkUrl100} title={book.trackName} link={book.trackViewUrl} media={book.previewUrl} />
                            )) : <>Sin resultados ...</>
                        }
                    </div>
                </div>

                <div className="col-12 mt-5 mb-5">
                    <div className="row">
                        <h1>Shows TV (TV Maze)</h1>
                        {
                            tvmaze.length > 0 ? tvmaze.map(tvshow => (
                                <TvMazeCard image={tvshow.show.image !== null ? tvshow.show.image.original : ""} title={tvshow.show.name} link={tvshow.show.url} />
                            )) : <>Sin resultados ...</>
                        }
                    </div>
                </div>

                <div className="col-12 mt-5 mb-5">
                    <div className="row">
                        <h1>Personas</h1>
                        {
                            crcind != null && crcind.length > 0  ? crcind.map(person => (
                                <CrcindCard id={person.ID} nombre={person.Name} dob={person.DOB} ssn={person.SSN} />
                            )) : <>{
                                typeof crcind == "undefined" ? <>Sin resultados ...</>: <CrcindCard id={crcind.ID} nombre={crcind.Name} dob={crcind.DOB} ssn={crcind.SSN} />
                            }</>
                        }
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Home