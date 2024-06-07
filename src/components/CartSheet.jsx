import { useState, useEffect } from "react"
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

import { Link } from 'react-router-dom';

export default function CartSheet({ cartItems, isCartOpen, cartTrigger, updateCartItemTrigger }) {
    const [cart, setCart] = useState([])

    useEffect(() => {
        setCart(cartItems)
    }, [cartItems])


    const removeFromCart = (itemToRemove) => {
        setCart((prevCart) => prevCart.filter((item) => item.name !== itemToRemove.name));
    };

    const total = cart?.reduce((acc, item) => acc + item?.quantity * item?.price, 0)

    return (
        <Sheet open={isCartOpen} onOpenChange={cartTrigger}>
            <SheetContent className="w-full max-w-md flex flex-col justify-between overflow-scroll">
                <div>
                    <SheetHeader>
                        <SheetTitle>Your Cart</SheetTitle>
                        <SheetDescription>Review and checkout your items.</SheetDescription>
                    </SheetHeader>
                    <div className="grid gap-6 py-4">
                        {cartItems?.map((item, index) => (
                            <div key={index} className="grid grid-cols-[80px_1fr_auto] items-center gap-4">
                                <img src={`${item?.image_src ? item.image_src : 'https://img.freepik.com/free-photo/abstract-surface-textures-white-concrete-stone-wall_74190-8184.jpg'}`} alt={item?.name} width={80} height={80} className="rounded-md object-cover" />
                                <div className="grid gap-2">
                                    <h3 className="font-medium text-sm">{item?.name}</h3>
                                    <p className="text-ellipsis overflow-hidden text-xs text-gray-500 dark:text-gray-400">{item?.description}</p>
                                    <span className="text-red-500 text-sm font-medium">₹{item['price']?.toFixed(2)}</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Button
                                        size="icon"
                                        variant="outline"
                                        onClick={() => updateCartItemTrigger(item?.name, -1)}
                                    >
                                        <MinusIcon className="h-3 w-3" />
                                    </Button>
                                    <span className="text-sm font-medium">{item?.quantity}</span>
                                    <Button size="icon" variant="outline" onClick={() => updateCartItemTrigger(item?.name, 1)}>
                                        <PlusIcon className="h-3 w-3" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                        <span className="text-lg font-medium">Total</span>
                        <span className="text-lg font-medium">₹{total?.toLocaleString()}</span>
                    </div>
                    <Link to={`/checkout`} onClick={() => cartTrigger(false)} className="w-full py-3 text-center text-white font-medium rounded-md hover:bg-white hover:text-red-500 hover:border hover:border-red-500 transition-all duration-200 bg-red-500">Checkout</Link>
                </div>
            </SheetContent>
        </Sheet>
    )
}

function MinusIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
        </svg>
    )
}


function PlusIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
        </svg>
    )
}