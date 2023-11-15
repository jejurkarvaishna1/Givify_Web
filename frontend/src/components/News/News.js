import React from "react";
import "./News.css";

const newsData = [
  {
    title: "Local Food Drive Event a Huge Success",
    content:
      "The recent local food drive event brought the community together, collecting thousands of pounds of food donations for those in need. Volunteers and donors celebrated the success of the event, highlighting the power of collective giving.",
  },
  {
    title: "New Partnership Brings Fresh Produce to Food Banks",
    content:
      "In a significant step toward reducing food insecurity, a new partnership between local farmers and food banks is set to deliver fresh produce to those who rely on food assistance. This initiative aims to provide healthier options for families in need.",
  },
  {
    title: "Schools Join Forces to Fight Child Hunger",
    content:
      "Several schools in the area have collaborated to combat child hunger in the community. They have started a program that provides nutritious meals to students who may not have access to regular meals during weekends and school breaks.",
  },
  {
    title: "Restaurant Chain Donates Excess Food to Shelters",
    content:
      "A well-known restaurant chain has taken a proactive step in reducing food waste by donating excess food to local shelters. This initiative not only helps reduce waste but also provides hot meals to individuals experiencing homelessness.",
  },
  {
    title: "Food Donation Drive Aims to Alleviate Winter Hunger",
    content:
      "As winter approaches, a local charity is organizing a food donation drive to help those facing hunger during the cold season. They are seeking non-perishable food items and warm clothing donations to support the less fortunate in the community.",
  },
];

function News() {
  return (
    <div className="news-container">
      <h1>Latest News</h1>
      <div className="news-articles">
        {newsData.map((article, index) => (
          <div key={index} className="article">
            <h2>{article.title}</h2>
            <p>{article.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
