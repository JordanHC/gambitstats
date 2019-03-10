import axios from 'axios'

const getData = () => {
  axios('api/getProfile', {
    // method: 'GET',
    // headers: {
    //   'Content-Type': "application/json",
    //   'X-API-Key': "66448c4e2f7d41e993b00bea2f9070a6"
    // },
    // params: {
    //   components: "202"
    // }
  }).then( response => {
    console.log(response);
  });
}

const Page = () => (
    <div>
       <p onClick={getData}>get me info!!</p>
    </div>
);

export default Page;
