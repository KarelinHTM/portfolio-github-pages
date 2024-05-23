import { cva, type VariantProps } from 'class-variance-authority'

export { default as Button } from './Button.vue'

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 font-bold uppercase border border-transparent',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow md:hover:bg-secondary md:hover:text-secondary-foreground md:hover:border-secondary-foreground',
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm md:hover:bg-destructive/90',
        outline:
          'border-input bg-background shadow-sm md:hover:bg-accent md:hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground shadow-sm md:hover:bg-primary md:hover:text-primary-foreground',
        ghost: 'text-primary underline-offset-4 md:hover:underline',
        link: 'text-primary border-0 border-b-2 rounded-none border-primary md:hover:border-transparent',
      },
      size: {
        default: 'h-9 px-4 py-2',
        xs: 'h-7',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-12 rounded-md px-8',
        icon: 'h-12 w-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
