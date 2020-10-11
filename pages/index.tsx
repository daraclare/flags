import React from "react";
import Head from "next/head";
import Nav from "../components/nav";

const Home = ({ data }) => {
  console.log("data", data);

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <div className="title">
        <h1>Welcome to the Flag App!</h1>
        <p>Find a country below and click to find their bordering countries</p>
      </div>

      <main>
        {data.map((country) => {
          return (
            <div className="card">
              <img width="50px" src={country.flag} alt="" />
              <h2>{country.name}</h2>
              <p>NativeName: {country.nativeName}</p>
              <p>Capital: {country.capital}</p>
            </div>
          );
        })}
      </main>

      <style jsx>{`
        main {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .title {
          width: 100%;
          color: #333;
          text-align: center;
        }

        .card {
          padding: 18px 18px 24px;
          width: 300px;
          border: 1px solid #9b9b9b;
          margin: 5px;
        }
        .card :hover {
          background: lightgrey;
        }
      `}</style>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default Home;
