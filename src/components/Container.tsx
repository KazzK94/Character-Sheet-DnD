
interface ContainerProps {
	className?: string
	children?: React.ReactNode
}

export function Container({ className = '', children }: ContainerProps) {
	return (
		<div className={`w-full max-w-7xl m-auto ${className}`}>
			{children}
		</div>
	)
}
