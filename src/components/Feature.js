import React from 'react'
import FeatureHeader from "./FeatureHeader";
import FeatureItems from "./FeatureItems";
function Feature() {
    return (
        <div class="py-12 bg-white">
            <div class="max-w-screen-xl mx-auto px-4 sm-px sm:px-6 lg:px-8">
                <FeatureHeader />
                <div class="mt-10">
                    <ul class="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        <FeatureItems title="Competitive exchange rates">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1M19 10C19 12.3869 18.0518 14.6761 16.364 16.364C14.6761 18.0518 12.3869 19 10 19L19 10ZM19 10C19 7.61305 18.0518 5.32387 16.364 3.63604C14.6761 1.94821 12.3869 1 10 1L19 10ZM19 10H1H19ZM10 19C7.61305 19 5.32387 18.0518 3.63604 16.364C1.94821 14.6761 1 12.3869 1 10L10 19ZM10 19C11.657 19 13 14.97 13 10C13 5.03 11.657 1 10 1V19ZM10 19C8.343 19 7 14.97 7 10C7 5.03 8.343 1 10 1V19Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </FeatureItems>
                        <FeatureItems title="No hidden fees">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 21H15M3 6L6 7L3 6ZM6 7L3 16C3.8657 16.649 4.91852 16.9999 6.0005 16.9999C7.08248 16.9999 8.1353 16.649 9.001 16L6 7ZM6 7L9 16L6 7ZM6 7L12 5L6 7ZM18 7L21 6L18 7ZM18 7L15 16C15.8657 16.649 16.9185 16.9999 18.0005 16.9999C19.0825 16.9999 20.1353 16.649 21.001 16L18 7ZM18 7L21 16L18 7ZM18 7L12 5L18 7ZM12 3V5V3ZM12 21V5V21ZM12 21H9H12Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </FeatureItems>
                        <FeatureItems title="Transfers are instant">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </FeatureItems>
                        <FeatureItems title="Mobile notifications">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 8H17H7ZM7 12H11H7ZM12 20L8 16H5C4.46957 16 3.96086 15.7893 3.58579 15.4142C3.21071 15.0391 3 14.5304 3 14V6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4H19C19.5304 4 20.0391 4.21071 20.4142 4.58579C20.7893 4.96086 21 5.46957 21 6V14C21 14.5304 20.7893 15.0391 20.4142 15.4142C20.0391 15.7893 19.5304 16 19 16H16L12 20Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </FeatureItems>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Feature
