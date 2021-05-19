import React from 'react'
import Cards from "./Cards";
import Description from "./Description";

function CardsContainer() {
    return (
        <section class="blog text-gray-700 body-font">
            <div class="container px-5 py-24 mx-auto">
                <Description />
                <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                    <Cards
                        title="Awesome"
                        imageUrl="https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
                    <Cards
                        title="Experiences"
                        imageUrl="https://images.unsplash.com/photo-1492681290082-e932832941e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80" />
                    <Cards
                        title="Of people"
                        imageUrl="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
                </div>
            </div>
        </section>
    )
}

export default CardsContainer
