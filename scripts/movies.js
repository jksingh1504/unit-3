// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let id;

//  https://www.omdbapi.com/?apikey=6a41ddca&s=avengers

async function searchMovie(){
    try{
        const query=document.querySelector("#search").value;

        const res = await fetch(`https://www.omdbapi.com/?apikey=6a41ddca&s=${query}`);

        const data=await res.json();
        console.log(data);

        const movie = data.Search;

        return movie;



    }catch(err){
        console.log("error", err);
    }
}


async function append(data){
    let movie_div=document.querySelector("#movies")

    movie_div.innerHTML=null;

    data.forEach(function(ele,indx){
        

        let child_div=document.createElement("div")

        let poster=document.createElement("img");
        poster.src= ele.Poster;

        let p=document.createElement("p");

        p.innerText=ele.Title;

        let button=document.createElement("button");
        button.setAttribute("class","book_now");
        // button.addEventListener("click",function(){
        //     BookMovie(indx);
        // })
        button.innerText="Book Now";
        

        child_div.append(poster,p,button);

        movie_div.append(child_div);
    })
}


async function main(){
    let data=await searchMovie();
    console.log("data :",data)

    if(data===undefined){
        return null;
    }

    append(data);
}

function debouncing(callback,delay){
    if(id)
    clearTimeout(id);

    id=setTimeout(function(){
        callback();
    },delay);
}