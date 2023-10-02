import React, { useState } from "react";
import "./App.css";
import data from "./data";

const App = () => {
  const [articles, setArticles] = useState(data);
  const [sortOrder, setSortOrder] = useState("upvotes"); // Default sort order

  const handleSort = (sortBy) => {
    if (sortBy === "upvotes") {
      setArticles([...articles].sort((a, b) => b.upvotes - a.upvotes));
    } else if (sortBy === "date") {
      setArticles(
        [...articles].sort((a, b) => new Date(b.date) - new Date(a.date))
      );
    }
    setSortOrder(sortBy);
  };

  return (
    <>
      <div style={{ marginTop: 50 }}>
        <table cellPadding={5} cellSpacing={5} width={"70%"}>
          <thead>
            <tr className="row">
              <th>Title</th>
              <th>Upvotes</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article, index) => (
              <tr className="row" key={index}>
                <td className="txt">{article.title}</td>
                <td className="txt">{article.upvotes}</td>
                <td className="txt">{article.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="btn">
        <button onClick={() => handleSort("upvotes")}>Most Upvoted</button>
        <button onClick={() => handleSort("date")}>Most Recent</button>
        </div>
      </div>
    </>
  );
};

export default App;
