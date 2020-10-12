import React from "react";

const Code = ({ data }) => {
  console.log("data", data);

  return (
    <div>
      <h4>New country</h4>

      <style jsx>{`
        h4 {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default Code;

// export async function getStaticProps() {
//   const res = await fetch("https://restcountries.eu/rest/v2/alpha/co");
//   const data = await res.json();

//   return {
//     props: {
//       data,
//     },
//   };
// }
