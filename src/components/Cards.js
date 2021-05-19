import React from 'react'

function Cards({ imageUrl, title }) {
    return (
        <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
            <div class="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center"
                style={{ backgroundImage: "url(" + imageUrl + ")" }}
            ></div>
            <div style={{ width: 320 }} class="w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
                <div class="header-content inline-flex">
                    <div class="category-badge flex-1 h-4 w-4 m rounded-full m-1 bg-purple-100">
                        <div class="animate-ping h-2 w-2 rounded-full m-1 bg-purple-500">
                        </div>
                    </div>
                    <div class="category-title flex:1 text-sm">{title}</div>
                </div>
                <div class="title-post font-medium">
                    Monte titre
                    </div>
                <div class="summary-post text-base text-justify">
                    The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link
                    </div>
                <button class="bg-gray-200 text-indigo-600px-2 mt-4 block rounded p-2 text-sm">
                    <span>Read more</span>
                </button>
            </div>

        </div>
    )
}

export default Cards
