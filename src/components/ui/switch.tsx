"use client"
import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"
//= Utils
import { cn } from "@/utils";
//= I18n
import useDictionary from '@/dictionaries/clientDictionary';

const Switch = React.forwardRef<React.ElementRef<typeof SwitchPrimitives.Root>, React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>>(({ className, ...props }, ref) => {
  const { translations, locale } = useDictionary();

  return (

    <SwitchPrimitives.Root
      className={cn(
        "peer inline-flex h-6 w-12 shrink-0 cursor-pointer items-center rounded-full border-1 border-[rgba(var(--main-background-rgb), 0.4)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        className
      )}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0 border-1 border-[rgba(var(--main-background-rgb), 0.4)]",
          locale === 'ar' ? 'data-[state=checked]:translate-x-[-1.5rem]' : ''
        )}
      />
    </SwitchPrimitives.Root>
  )
})
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
