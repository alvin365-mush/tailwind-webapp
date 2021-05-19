import React from 'react'

function FeatureItems({ title, children }) {
    return (
        <li>
            <div class="flex">
                <div class="flex-shrink-0">
                    <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        {children}
                    </div>
                </div>
                <div class="ml-4">
                    <h4 class="text-lg font-medium leading-6 text-gray-900">{title}</h4>
                    <p class="mt-2 text-base leading-6 text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, sit blanditiis. Non, numquam veniam? Nostrum laboriosam illo corporis dignissimos facilis ad debitis, voluptatem minima, voluptate, explicabo sed dolor sequi ipsum.
                    </p>
                </div>
            </div>
        </li>
    )
}

export default FeatureItems
