const loadData = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
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
                    <h3 class="text-xl text-[#12132D] font-bold title__font">${post.title}</h3>

                    <p class="text-base text-[#12132D99]">${post.description}</p>
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

                    <h2>
                        <img src="./images/email.png" alt="">
                    </h2>
                </div>
            </div>
        `

        


        postContainer.appendChild(newDiv)
    });



}

loadData();