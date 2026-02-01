import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
        const baseStyles = "premium-button inline-flex items-center justify-center font-bold transition-all";

        const variants = {
            primary: 'bg-gradient-to-r from-purple-600 to-purple-800 text-white hover:shadow-xl hover:shadow-purple-500/50',
            secondary: 'bg-gradient-to-r from-pink-500 to-rose-600 text-white hover:shadow-xl hover:shadow-pink-500/50',
            outline: 'bg-white border-2 border-purple-200 text-purple-700 hover:border-purple-400 hover:bg-purple-50',
            ghost: 'bg-transparent hover:bg-purple-50 text-purple-700',
        };

        const sizes = {
            sm: 'h-10 px-6 text-sm',
            md: 'h-12 px-8 text-base',
            lg: 'h-14 px-10 text-lg',
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    baseStyles,
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props as any}
            >
                {children}
            </motion.button>
        );
    }
);
Button.displayName = "Button";

export { Button };
