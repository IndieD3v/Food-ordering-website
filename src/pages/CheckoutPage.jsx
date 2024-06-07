import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'


export default function CheckoutPage({ cartItems }) {
    const [cart, setCart] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        setCart(cartItems)
    }, [cartItems])

    console.log(cart)

    const subTotal = cart.reduce((acc, item) => acc + item.quantity * item.price, 0)
    const shipping = Math.floor(Math.random() * 10)
    const disscount = Math.floor(Math.random() * 15)
    const total = subTotal + shipping + disscount

    return (
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mt-10 mx-auto py-12 px-4 md:px-6">
            <button className="fixed top-17 left-5 p-3 border max-md:shadow-xl max-md:border-gray-400/50 hover:shadow-md transition-all duration-200 hover:border-gray-100 hoveer bg-white rounded-md" onClick={() => navigate(-1)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
            </button>

            <div className="grid gap-8">
                <Card className="shadow-md">
                    <CardHeader>
                        <CardTitle>Shipping Address</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form className="grid gap-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="firstName">First Name</Label>
                                    <Input id="firstName" placeholder="John" />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="lastName">Last Name</Label>
                                    <Input id="lastName" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="address">Address</Label>
                                <Input id="address" placeholder="123 Main St" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="city">City</Label>
                                    <Input id="city" placeholder="New York" />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="state">State</Label>
                                    <Input id="state" placeholder="NY" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="zip">Zip Code</Label>
                                    <Input id="zip" placeholder="10001" />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="country">Country</Label>
                                    <Input id="country" placeholder="United States" />
                                </div>
                            </div>
                        </form>
                    </CardContent>
                </Card>

                <Card className="shadow-md">
                    <CardHeader>
                        <CardTitle>Payment Method</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form className="grid gap-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="cardName">Name on Card</Label>
                                    <Input id="cardName" placeholder="John Doe" />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="cardNumber">Card Number</Label>
                                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="expMonth">Exp. Month</Label>
                                    <Select id="expMonth">
                                        <SelectTrigger>
                                            <SelectValue placeholder="Month" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="01">January</SelectItem>
                                            <SelectItem value="02">February</SelectItem>
                                            <SelectItem value="03">March</SelectItem>
                                            <SelectItem value="04">April</SelectItem>
                                            <SelectItem value="05">May</SelectItem>
                                            <SelectItem value="06">June</SelectItem>
                                            <SelectItem value="07">July</SelectItem>
                                            <SelectItem value="08">August</SelectItem>
                                            <SelectItem value="09">September</SelectItem>
                                            <SelectItem value="10">October</SelectItem>
                                            <SelectItem value="11">November</SelectItem>
                                            <SelectItem value="12">December</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="expYear">Exp. Year</Label>
                                    <Select id="expYear">
                                        <SelectTrigger>
                                            <SelectValue placeholder="Year" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="2023">2023</SelectItem>
                                            <SelectItem value="2024">2024</SelectItem>
                                            <SelectItem value="2025">2025</SelectItem>
                                            <SelectItem value="2026">2026</SelectItem>
                                            <SelectItem value="2027">2027</SelectItem>
                                            <SelectItem value="2028">2028</SelectItem>
                                            <SelectItem value="2029">2029</SelectItem>
                                            <SelectItem value="2030">2030</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="cvc">CVC</Label>
                                    <Input id="cvc" placeholder="123" />
                                </div>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
            <div className="grid gap-8 h-fit">
                <Card className="shadow-md">
                    <CardHeader>
                        <CardTitle>Order Summary</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4">
                            <div className="grid grid-cols-2 items-center">
                                <div>Subtotal</div>
                                <div className="text-right">₹{subTotal.toFixed(2)}</div>
                            </div>
                            <div className="grid grid-cols-2 items-center">
                                <div>Shipping</div>
                                <div className="text-right">₹{shipping.toFixed(2)}</div>
                            </div>
                            <div className="grid grid-cols-2 items-center">
                                <div>Discount</div>
                                <div className="text-right">-₹{disscount.toFixed(2)}</div>
                            </div>
                            <Separator />
                            <div className="grid grid-cols-2 items-center font-bold">
                                <div>Total</div>
                                <div className="text-right">₹{total.toFixed(2)}</div>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Link to={`/checkout`} className="w-full py-3 text-center text-white font-medium rounded-md hover:bg-white hover:text-red-500 hover:border hover:border-red-500 transition-all duration-200 bg-red-500">
                            Place Order
                        </Link>
                    </CardFooter>
                </Card>
                <Card className="shadow-md max-h-[300px] overflow-scroll">
                    <CardHeader>
                        <CardTitle>Cart Items</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4">
                            {cart?.map((cartItem) => (
                                <div key={cartItem.name} className="grid grid-cols-[80px_1fr_80px] items-center gap-5">
                                    <img src={`${cartItem.image_src ? cartItem.image_src : 'https://img.freepik.com/free-photo/abstract-surface-textures-white-concrete-stone-wall_74190-8184.jpg'}`} alt={cartItem.name} className="rounded-md object-cover" />
                                    <div>
                                        <div className="flex flex-row gap-2 items-center">
                                            <p className="font-medium">{cartItem.name}</p>
                                            <span className="text-xs text-white bg-red-500 rounded-full px-2">{cartItem.quantity}</span>
                                        </div>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">x{cartItem.description}</p>
                                    </div>

                                    <div className="font-medium text-red-500">₹{cartItem.price}</div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}