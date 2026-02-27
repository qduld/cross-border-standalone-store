import * as React from "react"
import { cn } from "@/lib/utils"

const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'outline' | 'ghost' | 'link' | 'gradient'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    const variants = {
      default: 'bg-red-700 hover:bg-red-800 text-white shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200',
      outline: 'border-2 border-red-700 text-red-700 hover:bg-red-50 hover:scale-105 transition-all duration-200',
      ghost: 'hover:bg-red-50 hover:text-red-700 transition-all duration-200',
      link: 'text-red-700 hover:underline underline-offset-4 transition-all duration-200',
      gradient: 'bg-gradient-to-r from-red-700 to-red-600 hover:from-red-800 hover:to-red-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200',
    }

    const sizes = {
      default: 'h-10 px-4 py-2',
      sm: 'h-9 rounded-md px-3 text-sm',
      lg: 'h-12 rounded-lg px-8 text-lg',
      icon: 'h-10 w-10',
    }

    return (
      <button
        className={cn(
          'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium ring-offset-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }