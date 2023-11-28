import axios from 'axios';

function ComponentTestPage() {
    const getInfo = () => {
      axios.get('https://countriesnow.space/api/v0.1/countries/population/cities/filter')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
    }
    return (
      <button onClick={getInfo}>Get Info</button>
    );
  }
  
  export default ComponentTestPage;