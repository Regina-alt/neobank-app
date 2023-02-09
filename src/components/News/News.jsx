import React from "react";
import "./News.css";


function News() {
  let curPage = 1;
  let pageSize = 3;

  if (window.matchMedia("(max-width: 1300px)").matches) {
    pageSize = 2;
  }

  async function gerPosts(page = 1) {
    let res = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ba87f9ce8b3d495c8d33a8026f9b375f"
    );
    let posts = await res.json();

    let numPages = Math.ceil(posts.articles.length / pageSize);

    if (page == 1) {
      document.getElementById("prevButton").disabled = true;
    } else {
      document.getElementById("prevButton").disabled = false;
    }

    if (page === numPages) {
      document.getElementById("nextButton").disabled = true;
    } else {
      document.getElementById("nextButton").disabled = false;
    }

    document.querySelector(".post-list").innerHTML = "";

    posts.articles
      .filter((row, index) => {
        let start = (curPage - 1) * pageSize;
        let end = curPage * pageSize;
        if (index >= start && index < end) return true;
      })
      .forEach((article) => {
        if (article.description != null || article.urlToImage != null) {
          document.querySelector(".post-list").innerHTML += `
            <div class="card" style="">
                <div class="card-body">
                <a href="${article.url}">
                    <img src="${article.urlToImage}">
                    <h2 class="card-title">${article.title}</h5>
                    <p class="card-text">${article.description}</p>
                </a>
                </div>
                </div>
            `;
        }
      });
  }

  async function nextPage() {
    let res = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ba87f9ce8b3d495c8d33a8026f9b375f"
    );
    let posts = await res.json();
    if (curPage * pageSize < posts.articles.length) {
      curPage++;
      gerPosts(curPage);
    }
  }

  const previousPage = () => {
    if (curPage > 1) {
      curPage--;
      gerPosts(curPage);
    }
  };
  gerPosts();

  return (
    <>
      <p className="title-news">Current news from the world of finance</p>
      <p className="subtitle-news">
        We update the news feed every 15 minutes. You can learn more by clicking
        on the news you are interested in.
      </p>
      <div className="container-news">
        <div className="row post-list">
          <div className="card">
            <div className="card-body">
              <a href="#">
                <img src="#" />
                <h2 className="card-title">Новости</h2>
                <p className="card-text"></p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <ul className="pagination">
        <li className="page-item">
          <button onClick={previousPage} className="page-link" id="prevButton" data-testid = "prevButton">
            <img src="./assets/lineleft.svg" width="50%" height="50%" />
          </button>
        </li>
        <li className="page-item">
          <button onClick={nextPage} className="page-link" id="nextButton" data-testid = "nextButton">
            <img
              src="./assets/lineleft.svg"
              width="50%"
              height="50%"
              className="right-bth"
            />
          </button>
        </li>
      </ul>
    </>
  );
}

export default News;
