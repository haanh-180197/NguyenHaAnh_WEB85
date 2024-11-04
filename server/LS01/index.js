import http from 'http';

const listStudent = [
    {
        id: 1,
        fullName: "Jackie",
        age: 5,
        class: "5A"
    },
    {
        id: 2,
        fullName: "Juli MTP",
        age: 5,
        class: "5A"
    },
    {
        id: 3,
        fullName: "Denis",
        age: 5,
        class: "5B"
    },
]

const app = http.createServer((request,response) => {
    const endpoint = request.url
    switch(endpoint){
        case '/':
            response.end('Hi, my name is chichichic slimsady')
            break;
        case '/students':
            response.end(JSON.stringify(listStudent))
            break;
        default:
            response.end('Error, notFound API!')
            break;
    }
});

app.listen(8080, ()=>{
    console.log('server is running!')
})