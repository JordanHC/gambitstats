import axios from "axios";

const getData = () => {
  axios("api/getGambitStats").then(response => {
    console.log(response);
  });
};

const Page = () => (
  <div>
    <p onClick={getData}>get me info!!</p>
  </div>
);

export default Page;
