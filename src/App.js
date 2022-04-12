// import { useState } from "react";
import "./styles.css";
// Each movie should have movie name, rating, released date

const data = [
  {
    key: "1",
    movieName: "K.G.F-Chapter-2",
    rating: "4.5",
    releasedData: "14-04-2022"
  },
  {
    key: "2",
    movieName: "Jersey",
    rating: "3.5",
    releasedData: "22-04-2022"
  },
  {
    key: "3",
    movieName: "Operation Romeo",
    rating: "4.0",
    releasedData: "22-04-2022"
  },
  {
    key: "4",
    movieName: "Horipanti 2",
    rating: "3.5",
    releasedData: "29-04-2022"
  },
  {
    key: "5",
    movieName: "Runway 34",
    rating: "4.2",
    releasedData: "29-04-2022"
  },
  {
    key: "6",
    movieName: "Mera Deah ki Dharti",
    rating: "3.5",
    releasedData: "06-05-2022"
  },
  {
    key: "7",
    movieName: "The Conversion",
    rating: "4.3",
    releasedData: "06-05-2022"
  },
  {
    key: "8",
    movieName: "Rocket Gang",
    rating: "4.0",
    releasedData: "06-05-2022"
  },
  {
    key: "9",
    movieName: "Thar[digital release only]",
    rating: "3.5",
    releasedData: "06-05-2022"
  },
  {
    key: "10",
    movieName: "Jayeshbhai Jordaar",
    rating: "3.0",
    releasedData: "13-05-2022"
  },
  {
    key: "11",
    movieName: "Aankh Micholi",
    rating: "3.8",
    releasedData: "13-05-2022"
  },
  {
    key: "12",
    movieName: "Bhol Bhulaiyaa 2",
    rating: "4.5",
    releasedData: "20-05-2022"
  },
  {
    key: "13",
    movieName: "Hit-The First Case",
    rating: "3.0",
    releasedData: "20-05-2022"
  },
  {
    key: "14",
    movieName: "Mrs.Chatterjee Vs Norway",
    rating: "4.0",
    releasedData: "20-05-2022"
  },
  {
    key: "15",
    movieName: "Dhaakd",
    rating: "4.6",
    releasedData: "27-05-2022"
  },
  {
    key: "16",
    movieName: "Major",
    rating: "4.3",
    releasedData: "27-05-2022"
  },
  {
    key: "17",
    movieName: "Prithviraj",
    rating: "4.0",
    releasedData: "03-06-2022"
  },
  {
    key: "18",
    movieName: "Maidaan",
    rating: "3.5",
    releasedData: "03-06-2022"
  },
  {
    key: "19",
    movieName: "Nikamma",
    rating: "3.5",
    releasedData: "17-06-2022"
  },
  {
    key: "20",
    movieName: "Doctor G",
    rating: "3.5",
    releasedData: "17-06-2022"
  }
];

function MoviesDetail() {
  return (
    <div className="main">
      <div className="header">
        <div> Movie Name</div>
        <div> rating</div>
        <div> Release Date</div>
      </div>
      {data.map((item) => {
        return (
          <div className="movies-detail">
            {/* {" "} */}

            <div> {item.movieName}</div>
            <div className="rating"> {item.rating}</div>
            <div> {item.releasedData}</div>
          </div>
        );
      })}
    </div>
  );
}
export default function App() {
  return (
    <div className="App">
      <MoviesDetail />
    </div>
  );
}
