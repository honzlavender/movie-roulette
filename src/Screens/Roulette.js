import { useState } from "react";
import { useEffect } from "react";
import Navbar from "../Navigation/Navbar";
import styled from "styled-components";

export default function Roulette() {
  //set state of films
  const [films, setFilms] = useState([]);
  const [list, setList] = useState([]);

  //max is # of movies in TMDB according to current documentation
  //upon refresh random movie_id is generated
  //not error proof - some movies have been removed
  //   const max = 768623;
  const max = 10000;
  const movie_id = Math.floor(Math.random() * (max + 1));

  const URL = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=5dcf2c5526f87b6911b959f37dae3423&language=en-US`;
  //768,623

  useEffect(() => {
    fetchRecommended();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setFilms]);

  const refreshPage = (e) => {
    e.preventDefault();
    window.location.reload(false);
  };

  const fetchRecommended = async () => {
    const data = await fetch(URL);
    const movies = await data.json();
    setFilms(movies);
  };

  //add to list
  const addToList = (e) => {
    e.preventDefault();

    list.push(films.original_title);
    setList(list, ...list);

  };

// useEffect(() => {
//   const data = localStorage.getItem('list')
//   if(data){
//     setList(JSON.parse(data))
//   }
// }, [])

useEffect(() => {
  localStorage.setItem('list', JSON.stringify(list, ...list));
  console.log(...list)
});

// useEffect(() => {
// const watchlist = JSON.parse(localStorage.getItem('list'));
// if(watchlist) {
//   setList(watchlist)
// }
// })
  return (
    <div>
      <Navbar list={list}/>
      <FilmContainer>
        {films.adult === false && films.original_title ? (
          <>
            <FilmTitle>{films.original_title}</FilmTitle>
            <FilmInfo>
              {films.poster_path === null ? (
                <h3>no poster :/</h3>
              ) : (
                <Poster
                  src={`http://image.tmdb.org/t/p/w300/${films.poster_path}`}
                  alt="movie poster"
                />
              )}
              <About>{films.overview}</About>
            </FilmInfo>
          </>
        ) : (
          <NotFound>Oops! No movie - try again</NotFound>
        )}
      </FilmContainer>
      <NextButton onClick={refreshPage}>next film</NextButton>
      <AddButton onClick={addToList}>add to list</AddButton>
    </div>
  );
}

const FilmTitle = styled.h2`
  color: #fff;
`;

const FilmInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 60vw;
  margin: 0 auto;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const NextButton = styled.button`
  font-size: 16px;
  position: fixed;
  width: 70px;
  height: 70px;
  top: 100px;
  right: 30px;
  background-color: pink;
  border-radius: 50px;
  &:hover {
    background-color: #000;
    color: pink;
  }
`;

const AddButton = styled.button`
  font-size: 16px;
  position: fixed;
  width: 70px;
  height: 70px;
  top: 200px;
  right: 30px;
  background-color: pink;
  border-radius: 50px;
  &:hover {
    background-color: #000;
    color: pink;
  }
`;

const FilmContainer = styled.div`
  @media (min-width: 1024px) {
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    transform: translate(-50%, -50%);
    position: absolute;
    text-align: center;
  }
`;

const About = styled.p`
  color: #ffffffac;
  text-align: left;
  padding: 0 12px;
  margin: 0;
  font-size: calc(8px + 2vmin);
`;

const NotFound = styled.h2`
  color: #fff;
`;

const Poster = styled.img`
  width: 100%;
  height: auto;
  @media (min-width: 1024px) {
    width: 100%;
  }
`;
