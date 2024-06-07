import { Link } from 'react-router-dom';

export default function RestaurantCard({ restaurant }) {
    return (
        <div className="rounded-xl bg-white p-4 shadow-md dark:bg-gray-950">
            <img
                src={`${restaurant.image_src ? restaurant.image_src : 'https://img.freepik.com/free-photo/abstract-surface-textures-white-concrete-stone-wall_74190-8184.jpg'}`}
                width="300"
                height="200"
                alt="Dish"
                className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center"
            />
            <div className="space-y-5 p-4">
                <div className='space-y-3'>
                    <div className='flex flex-row justify-between items-center'>
                        <h3 className="text-md font-bold">{restaurant.name}</h3>
                        <div className="flex items-center gap-1 text-yellow-500">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="h-4 w-4"
                            >
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                            <span>{restaurant.rating}</span>
                        </div>
                    </div>

                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                        {restaurant.description}
                    </p>

                    <p className="text-sm font-medium">{restaurant.location}</p>
                </div>
                <div className="flex items-center justify-between">
                    <Link to={`/restaurants/${restaurant.id}`} className="w-full inline-flex items-center text-red-500 border border-red-500 justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-red-100/50 hover:text-red-500 h-9 rounded-md px-5">
                        View menu
                    </Link>
                </div>
            </div>
        </div>
    )
}
