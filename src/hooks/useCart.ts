
import { useState, useEffect } from "react"
import type { CartItem } from "../types"

export const useCart = () => {

    const initialCart = () : CartItem[] => {
        const localStorageCart = localStorage.getItem('cart')

        if (!localStorageCart) return []

        const parsed = JSON.parse(localStorageCart)

        return Array.isArray(parsed)
            ? parsed.filter(item => item && item.quantity)
            : []
    }
    
    const [cart] = useState(initialCart)

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])



    return {
        cart
    }
}
