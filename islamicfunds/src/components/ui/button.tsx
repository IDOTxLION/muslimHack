import React from 'react'

type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'outline'
  href?: string
  onClick?: () => void
}

export function Button({ children, variant = 'primary', href, onClick }: ButtonProps) {
  const baseStyles = 'font-semibold px-6 py-3.5 rounded-xl text-sm text-center transition-all active:scale-95 cursor-pointer block'
  const variants = {
    primary: 'bg-primary text-black hover:scale-105 hover:opacity-90',
    outline: 'border border-neutral-700 text-white hover:bg-neutral-800',
  }
  const className = `${baseStyles} ${variants[variant]}`

  if (href) {
    return <a href={href} className={className}>{children}</a>
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  )
}
