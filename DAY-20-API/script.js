let col = document.querySelector("#col")
let item = 1;


function next(){
            fetch(`https://fakestoreapi.com/products/${item}`)
                .then((data)=> data.json())
                .then((res)=>showdata(res))
                item++;

}



function showdata(obj){
    // console.log(obj)
    col.innerHTML =`
            <div class="card">
                    <img src=${obj.image} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${obj.title}</h5>
                        <h5 class="card-title bg-info">${obj.price}</h5>
                        <p class="card-text">${obj.description}</p>
                        <a href="#" class="btn btn-primary">add item</a>
                    </div>
                </div>
    `
}