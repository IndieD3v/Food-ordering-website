import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'

export default function RestaurantPage({ restaurants, addFoodToCart }) {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        // Find the restaurant with the matching id
        const foundRestaurant = restaurants.find(restaurant => restaurant.id === parseInt(id));
        // Update the state with the found restaurant
        setRestaurant(foundRestaurant);
    }, [id, restaurants]);

    if (!restaurant) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-gray-900 text-white py-12 md:py-16 mt-10">
                <div className="container mx-auto px-4 md:px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <p className="text-gray-300/50 text-lg mb-4">{restaurant.location}</p>
                            <h1 className="text-3xl md:text-4xl font-bold mb-2">{restaurant.name}</h1>
                            <p className="text-gray-300 text-lg mb-4">{restaurant.description}</p>
                            <div className="flex items-center space-x-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-5 h-5 text-yellow-500"
                                >
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                </svg>
                                <span className="text-gray-300 font-medium">{restaurant.rating}</span>
                                <span className="text-gray-500">{Math.floor(Math.random() * 500)} reviews</span>
                            </div>
                        </div>
                        <img src={`${restaurant.image_src ? restaurant.image_src : 'https://lh3.googleusercontent.com/p/AF1QipOSfL_pDye7NZI2YfBdN9FWtuW967EPUA-zJfrq=s1360-w1360-h1020'}`}
                            width="600" height="400" alt="Restaurant" className="rounded-lg object-cover" />

                    </div>
                </div>
            </header>

            <main className="flex-1">
                <section className="py-12 md:py-16">
                    <div className="container mx-auto px-4 md:px-6 lg:px-8">
                        <h2 className="text-2xl md:text-3xl font-bold mb-8">Menu</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            
                            {restaurant['menu'].map((restaurantObj) => (
                                <div className="grid grid-cols-[80px_1fr_80px] items-center gap-5">
                                    <img src={`${restaurantObj.image_src ? restaurantObj.image_src : 'https://img.freepik.com/free-photo/abstract-surface-textures-white-concrete-stone-wall_74190-8184.jpg'}`} alt={restaurantObj.name} className="rounded-md object-cover" />
                                    <div>
                                        <o className="font-medium">{restaurantObj.name}</o>
                                        <p className="text-sm text-gray-500 w-[70%] dark:text-gray-400">{restaurantObj.description}</p>
                                        <p className="font-medium text-red-500">₹{restaurantObj.price}</p>
                                    </div>
                                    <button onClick={() => addFoodToCart(restaurantObj)} class="px-5 -ml-9 inline-flex items-center text-red-500 border border-red-500 justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-red-100/50 hover:text-red-500 h-9 rounded-md">
                                        Add to cart
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
