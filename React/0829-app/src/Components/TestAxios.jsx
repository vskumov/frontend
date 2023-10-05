import axios from "axios";

function TestAxios() {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts/")
  //     .then((response) => console.log(response.data))
  //     .catch((err) => console.log(err));

  //   const newPost = {
  //     title: "Hello!",
  //     body: "World",
  //     userId: 1,
  //   };

  //   axios
  //     .post("https://jsonplaceholder.typicode.com/posts/", newPost)
  //     .then((response) => console.log(response))
  //     .catch((err) => console.log(err));

  // DELETE

//   axios({
//     method: "delete",
//     url: "https://jsonplaceholder.typicode.com/posts/2",
//     data: { id: 100, title: "blahblah" },
//     // Информацию о том, какие данные нужно передать для удаления, сообщает BackEnd
//   })
//     .then((response) => console.log(response))
//     .catch((err) => console.log(err));


// --------


// async function getData() {
//     try {
//         const response = await axios.get("https://jsonplaceholder.typicode.com/posts/");
//         console.log(response.data);
//     }
//     catch(err) {
//         console.log(err);
//     }
// }

// getData();

  return <div>TestAxios</div>;
}

export default TestAxios;
