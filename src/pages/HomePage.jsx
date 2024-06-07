import RestaurantCard from '../components/RestaurantCard'

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

function HomePage({ restaurants }) {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <main className="flex-1">
                <section className="w-full py-36 mt-10 px-10 max-md:py-24 max-lg:py-32 bg-gradient-to-b from-red-50">
                    <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                    Delicious Meals Delivered to Your Door
                                </h1>
                                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                                    Discover a world of flavors with our wide selection of mouthwatering dishes, delivered straight to
                                    your doorstep.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <a
                                    className="inline-flex h-10 items-center justify-center rounded-md bg-red-500 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-red-500/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-500 disabled:pointer-events-none disabled:opacity-50 dark:bg-red-500 dark:text-gray-900 dark:hover:bg-red-500/90 dark:focus-visible:ring-red-500"
                                    href="#menu"
                                >
                                    Order Now
                                </a>
                                <a
                                    className="inline-flex h-10 items-center justify-center rounded-md border border-red-500 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-red-600/10 hover:text-[#FF6B6B] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FF6B6B] disabled:pointer-events-none disabled:opacity-50 dark:border-red-600 dark:bg-gray-950 dark:hover:bg-red-600/20 dark:hover:text-red-600 dark:focus-visible:ring-red-600"
                                    href="#menu"
                                >
                                    View Menu
                                </a>
                            </div>
                        </div>
                        <img
                            src="https://cdni.iconscout.com/illustration/premium/thumb/food-delivery-service-5969300-4948872.png"
                            width="550"
                            height="550"
                            alt="Hero"
                            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                        />
                    </div>
                </section>
                
                <section id="menu" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-t from-gray-100">
                    <div className="container space-y-12 px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Restaurants</h2>
                                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    From classNameic favorites to innovative creations,<br /> our menu offers a diverse range of mouthwatering
                                    dishes to <br />satisfy every craving.
                                </p>
                            </div>
                        </div>

                        <div className="mx-auto  grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
                            {restaurants.map((restaurant) => (
                                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                            ))}
                        </div>
                    </div>
                </section>



                <section id="delivery" className="w-full py-12 px-12 md:py-24 lg:py-32">
                    <div className="container grid gap-6 md:px-6 lg:grid-cols-2 lg:gap-12">
                        <img
                            src="https://cdni.iconscout.com/illustration/premium/thumb/delivery-man-giving-delivery-parcel-to-the-owner-3323742-2791571.png"
                            width="550"
                            height="550"
                            alt="Delivery"
                            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                        />
                        <div className="flex flex-col justify-center space-y-6">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Effortless Delivery, Every Time</h2>
                                <p className="text-lg max-w-[600px] text-gray-500 max-md:text-md dark:text-gray-400">
                                    Our streamlined delivery process ensures your meals arrive fresh and hot, right to your doorstep.
                                    Track your order every step of the way.
                                </p>
                            </div>
                            <div className="grid gap-6">
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold">Order</h3>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Select your favorite dishes from our menu and place your order.
                                    </p>
                                </div>
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold">Prepare</h3>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Our chefs carefully prepare your order with the freshest ingredients.
                                    </p>
                                </div>
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold">Deliver</h3>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Your meal is delivered straight to your door, hot and ready to enjoy.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-t from-red-50">
                    <div className="container space-y-12 px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Customers Say</h2>
                                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Hear from our satisfied customers about their experience with Tasty Bites.
                                </p>
                            </div>
                        </div>

                        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
                            <div className="rounded-xl bg-white p-4 shadow-md dark:bg-gray-950">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <span className="relative flex shrink-0 overflow-hidden rounded-full h-10 w-10">
                                            <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">JP</span>
                                        </span>
                                        <div>
                                            <h4 className="text-lg font-bold">John Doe</h4>
                                            <p className="text-gray-500 dark:text-gray-400">Satisfied Customer</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        "Tasty Bites has become my go-to for delicious and convenient meals. The food is always fresh and
                                        flavorful,
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-xl bg-white p-4 shadow-md dark:bg-gray-950">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <span className="relative flex shrink-0 overflow-hidden rounded-full h-10 w-10">
                                            <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">JP</span>
                                        </span>
                                        <div>
                                            <h4 className="text-lg font-bold">John Doe</h4>
                                            <p className="text-gray-500 dark:text-gray-400">Satisfied Customer</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        "Tasty Bites has become my go-to for delicious and convenient meals. The food is always fresh and
                                        flavorful,
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-xl bg-white p-4 shadow-md dark:bg-gray-950">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <span className="relative flex shrink-0 overflow-hidden rounded-full h-10 w-10">
                                            <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">JP</span>
                                        </span>
                                        <div>
                                            <h4 className="text-lg font-bold">John Doe</h4>
                                            <p className="text-gray-500 dark:text-gray-400">Satisfied Customer</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        "Tasty Bites has become my go-to for delicious and convenient meals. The food is always fresh and
                                        flavorful,
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-xl bg-white p-4 shadow-md dark:bg-gray-950">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <span className="relative flex shrink-0 overflow-hidden rounded-full h-10 w-10">
                                            <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">JP</span>
                                        </span>
                                        <div>
                                            <h4 className="text-lg font-bold">John Doe</h4>
                                            <p className="text-gray-500 dark:text-gray-400">Satisfied Customer</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        "Tasty Bites has become my go-to for delicious and convenient meals. The food is always fresh and
                                        flavorful,
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-xl bg-white p-4 shadow-md dark:bg-gray-950">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <span className="relative flex shrink-0 overflow-hidden rounded-full h-10 w-10">
                                            <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">JP</span>
                                        </span>
                                        <div>
                                            <h4 className="text-lg font-bold">John Doe</h4>
                                            <p className="text-gray-500 dark:text-gray-400">Satisfied Customer</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        "Tasty Bites has become my go-to for delicious and convenient meals. The food is always fresh and
                                        flavorful,
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-xl bg-white p-4 shadow-md dark:bg-gray-950">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <span className="relative flex shrink-0 overflow-hidden rounded-full h-10 w-10">
                                            <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">JP</span>
                                        </span>
                                        <div>
                                            <h4 className="text-lg font-bold">John Doe</h4>
                                            <p className="text-gray-500 dark:text-gray-400">Satisfied Customer</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        "Tasty Bites has become my go-to for delicious and convenient meals. The food is always fresh and
                                        flavorful,
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact" className="w-full py-12 md:py-24 lg:py-32 ">
                    <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
                        <div className="space-y-3">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
                            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Have a question or feedback? We'd love to hear from you.
                            </p>
                        </div>
                        <div className="mx-auto w-full max-w-sm space-y-2">
                            <form className="flex flex-col space-y-2">
                                <Input type="text" placeholder="Name" className="max-w-lg flex-1" />
                                <Input type="email" placeholder="Email" className="max-w-lg flex-1" />
                                <Textarea placeholder="Message" className="max-w-lg flex-1" />
                                <a className="inline-flex h-10 items-center justify-center rounded-md bg-red-500 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-red-500/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-500 disabled:pointer-events-none disabled:opacity-50 dark:bg-red-500 dark:text-gray-900 dark:hover:bg-red-500/90 dark:focus-visible:ring-red-500"
                                    href="#">
                                    Submit
                                </a>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default HomePage
