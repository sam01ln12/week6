

class OMDBClient {
    constructor(url, api_key) {
        this.url = url;
        this.api_key = api_key;
        this.state = {}
    }

    render(data) {
        console.log(data);
        document.querySelector("#main").innerHTML = data
                .map(movie=> this.render_data_to_dom(movie))
                .join("")
        
        
    }

    

    render_data_to_dom = (data) => {
        let block =  `
            <div class="col-md-6">
            <p><strong>Title:</strong> <small>${data.Title}</small></p>
            <p><strong>Year:</strong> <small>${data.Year}</small></p>
            <p><strong>ID:</strong> <small class = "movie_id">${data.imdbID}</small></p>
            <p class = "plot">
            </div>
            <div class="col-md-6">
              <img alt="Movie Poster" src=${data.Poster}>
            </div> `
            let plot = document.querySelector
    }

    /*addPlot = (arg)=>{
        let p = document.createElement("p");
        p.setAttribute("class", "plot");
        p.setAttribute("data-id", arg);
        let text = document.createTextNode("Read plot");
        p.appendChild(text);
        document.querySelectorAll(".col-md- 6").appendChild(p);
        
    }*/



    search(keyword) {
        let url = `${this.url}/?apikey=${this.api_key}&s=${keyword}`;
        
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                if(data.Response === 'True') {
                    this.state.search_results = data.Search;
                    this.render(this.state.search_results);
                

                } else {
                    alert("Failed to load data"); 
                }
            }).catch(err => console.log(err.message));
    }

    get_by_id(id) {
        let url = `${this.url}/?apikey=${this.api_key}&i=${id}`;
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                if(data.Response === 'True') {
                    this.state.movie = data
                } else {
                    alert("Failed to load data"); 
                }
            }).catch(err => console.log(err.message));
    }        
}

