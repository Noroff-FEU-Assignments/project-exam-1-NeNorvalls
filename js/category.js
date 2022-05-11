



















// const url = document.querySelector("https://nenorvalls.no/flower-power/nenorvalls-blog/wp-json/wp/v2/blogposts?acf_format=standard&orderby=date&_embed");
// const categories = document.querySelector(".filter-link");
// const blogs = document.querySelector(".blog-container");

// fetch(url)
//     .then(results => results.json())
//     .then (json => {
//         for(value of json) {
//             addElement(blogs, value);
//         }
//     });



//     const categoryTitle = document.querySelectorAll('.category-title');
//     const allCategoryPosts = document.querySelectorAll('.all');
    
//     for(let i = 0; i < categoryTitle.length; i++){
//         categoryTitle[i].addEventListener('click', filterPosts.bind(this, categoryTitle[i]));
//     }
    
//     function filterPosts(item){
//         changeActivePosition(item);
//         for(let i = 0; i < allCategoryPosts.length; i++){
//             if(allCategoryPosts[i].classList.contains(item.attributes.id.value)){
//                 allCategoryPosts[i].style.display = "block";
//             } else {
//                 allCategoryPosts[i].style.display = "none";
//             }
//         }
//     }
    
//     function changeActivePosition(activeItem){
//         for(let i = 0; i < categoryTitle.length; i++){
//             categoryTitle[i].classList.remove('active');
//         }
//         activeItem.classList.add('active');
//     };













// let grid = document.querySelector(".products");
// let filterInput = document.getElementById("filterInput");

// fetch('./database/store.json')
//     .then(res => res.json())
//     .then(json =>{

//         // iterating products
//         for (let value of json){
//             addElement(grid, value)
//         }
        
//     });


// // add event listener
// filterInput.addEventListener('keyup', filterProducts);

// // callback function 
// function filterProducts(){
//     let filterValue = filterInput.value.toUpperCase();
//     let item = grid.querySelectorAll('.item')
//     // console.log(filterValue);

//     for (let i = 0; i < item.length; i++){
//         let span = item[i].querySelector('.title');

//         if(span.innerHTML.toUpperCase().indexOf(filterValue) > -1){
//             item[i].style.display = "initial";
//         }else{
//             item[i].style.display = "none";
//         }

//     }
// }



// // get value from the api create dynamic element
// function addElement(appendIn, value){
//     let div = document.createElement('div');
//     div.className = "item justify-self-center";

//     let { image, title, category, price } = value;

//     div.innerHTML = `
//             <img src="${image}" class="bg-cover img mx-auto" alt="img1">
//             <div class="text-center py-3 font-poppins">
//                 <h1 class="text-lg title">${title}</h1>
//                 <a href="#" class="block"><span class="text-sm text-red-400">${category}</span></a>
//                 <span class="block py-3">$<span class="text-md">${price}</span></span>
//                 <button class="border-2 px-8 py-1 bg-yellow-400 border rounded-md">Buy Now</button>
//             </div>
//     `;
//     appendIn.appendChild(div);
// } m,hn vcn vn vbk, njkl  