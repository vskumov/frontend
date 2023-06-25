async function getPostAndAuthor() {
    const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
    const postData = await postResponse.json();
    const authorResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${postData.userId}`);
    const authorData = await authorResponse.json();
    return { post: postData, author: authorData };
}
getPostAndAuthor()
    .then(data => console.log(data))
    .catch(error => console.error(error));


// fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//     .then(response => response.json())
//     .then(post => {
//         console.log('Данные поста:', post);
//         const userId = post.userId; // id автора поста
//         // получаем данные автора поста
//         fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//             .then(response => response.json())
//             .then(author => {
//                 console.log('Данные автора:', author);
//             });
//     });

// TODO Задача 1:
// комментарий.
// Используя async await no id комментария выведите в консоль текст поста и
// Для этого нужно отправить два запроса к API jsonplaceholder.com:
// один для получения поста, связанного с данным комментарием -
// https://jsonplaceholder.typicode.com/comments/${commentld},
// и второй - для получения самого комментария -
// https://jsonplaceholder.typicode.com/posts/${comment.postld}
// Здесь функция получает ID комментария в качестве аргумента.

// Задача 2: 
// Доработайте прошлое решение таким образом, чтобы помимо текста поста выводилось имя автора.

// Задача 3: 
// Создать функцию, которая получает id комментария находит id поста. По этому идентификатору необходимо вывести все комментарии к этому посту.



async function getPostAndCommentById(commentId) {

    // Получение комментария по ID
    const commentResponse = await fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`);
    const comment = await commentResponse.json();

    // Получение поста по ID комментария
    const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${comment.postId}`);
    const post = await postResponse.json();

    // Получение имени юзера
    const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
    const user = await userResponse.json();

    console.log(`Post title: ${post.title}\n Post autor: ${user.name}\n\nComment: ${comment.body}`);

}

// Пример использования
getPostAndCommentById(1);


async function getCommentsByPostId(commentId) {
    const commentResponse = await fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`);
    const comment = await commentResponse.json();

    // С переменной
    // const postId = comment.postId;
    // const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);

    // Без дополнительной переменной
    const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${comment.postId}/comments`);
    const postComments = await postResponse.json();

    return postComments;
}

getCommentsByPostId(1)
    .then((postComments) => console.log(postComments))
    .catch((error) => console.error(error));

const form = document.querySelector('#form');
const btn = document.querySelector('#btn');
const input = document.querySelector('#idPost');
const listComments = document.querySelector('#list');

async function returnComments(postId){
    const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    const comments = await commentsResponse.json();

    return comments;
};

form.onsubmit = async(e) => {
    e.preventDefault();
    listComments.innerHTML = "";
    const comments = await returnComments(parseInt(input.value));
    comments.forEach(elem => {
        const comment = document.createElement("li");
        comment.innerText = elem.body
        listComments.append(comment);
    }
        )
form.reset();

}