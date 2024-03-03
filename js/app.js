const loadData = async (searchId='comedy') => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchId}`);
    const allPost = await res.json();
    displayData(allPost) 
    
};

const displayData = (posts) => {


    const allPost = posts.posts;

    const postContainer = document.getElementById('post-container');


    allPost.forEach(post => {
        const newDiv = document.createElement('div');
        newDiv.classList.add('w-full', 'border', 'border-[#797DFC]', 'rounded-3xl', 'flex', 'flex-col', 'px-5', 'gap-5', 'sm:flex-row', '[bg-[#797DFC1A]]', 'p-10')


        newDiv.innerHTML = `
            <div  class="flex justify-center sm:block indicator rounded-3xl">
                <span id="indicator-light" class="indicator-item rounded-[100px] border-2 border-[#ffffff] badge"></span>
                <img class="w-[80px] h-[80px] rounded-lg" src="${post.image}" alt="user image">
            </div>

            

            <div class="space-y-3 mt-3">
                <div class="flex gap-x-5 sm:gap-x-10">
                    <p class="text-sm text-[#12132DCC] font-semibold"># <span>${post.category}</span></p>
                    <p class="text-sm text-[#12132DCC] font-medium">Author : <span>${post.author.name}</span></p>
                </div>

                <div class="space-y-3 border-b border-dashed pb-3 border-[#12132D40]">
                    <h3 class="text-xl my__title text-[#12132D] font-bold title__font">${post.title}</h3>

                    <p class="text-base text-[#12132D99] w-full md:w-[540px]">${post.description}</p>
                </div>

                <div class="flex justify-between">
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-3">
                        <div class="flex gap-x-2">
                             <h4>
                                <img src="./images/comment.png" alt="comment">
                       
                            </h4>

                            <span>${post.comment_count}</span>
                        </div>
                        <div class="flex gap-x-2">
                            <h4>
                                <img src="./images/eye.png" alt="eye">
                        
                            </h4>

                            <span>${post.view_count}</span>
                        </div>
                        <div class="flex gap-x-2">
                            <h4>
                                <img src="./images/clock-hour-9.png" alt="clock">
                        
                            </h4>

                            <span>${post.posted_time} min</span>
                        </div>
                    </div>

                    <button type="submit" >
                        <img onclick="markRead(' ${post.title}', ${post.view_count})" src="./images/email.png" alt="">
                    </button>
                </div>
            </div>
        `

        
        const indeicator = newDiv.querySelector(".indicator-item");
        const status = post.isActive
        
        if (status) {
            indeicator.classList.add('bg-[#10B981]');
            indeicator.classList.remove('bg-[#FF3434]');
        } else {
            indeicator.classList.remove('bg-[#10B981]');
            indeicator.classList.add('bg-[#FF3434]')
        }

        postContainer.appendChild(newDiv)
    });



};


let count = 0;
const myTable = document.getElementById('my-table')
const markRead = (title, eye) => {

    

    count = count + 1;

    const countRead = document.getElementById('count-read');
    countRead.innerText = count
    
   

    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const row = document.createElement('tr');

    row.classList.add('p-3', 'bg-white', 'flex', 'justify-between', 'mb-5', 'rounded-lg', 'items-center', 'w-full')
    td1.classList.add('text-base', 'font-semibold', 'text-[#12132D]', 'w-full', 'lg:w-[150px]')
    td2.classList.add('flex', 'flex-row')


    td1.innerText = title;
    td2.innerHTML = `
    <img src="./images/eye.png" alt="">
    <span>${eye}</span>
    `

    row.appendChild(td1);
    row.appendChild(td2)

    console.log(row)

    myTable.appendChild(row);
}



// Search Function
const handleSearch = () => {
    const searchField = document.getElementById("search-field");
    const searchText = searchField.value;
    loadData(searchText)
    console.log(searchText)
}

loadData();