let url = 'http://omdbapi.com';
let api_key = '917ae16d';


let client = new OMDBClient(url, api_key);

document.querySelector("#search").addEventListener('click', (e)=> {
    let keyword = document.querySelector(".Search_bar").value;
    client.search(keyword);
})


/*window.load = () => {
    document.querySelectorAll(".plot").forEach(element=> {
        element.addEventListener('click', (e) => {
            alert(e.dataset.id);
        } )
    })
    
    }*/




