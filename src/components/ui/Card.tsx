
interface GenericComponentProps {
	children: React.ReactNode;
	className?: string;
}

export function Card({ children, className = '' }: GenericComponentProps) {
	return (
		<div className={`rounded-lg border shadow-sm bg-primary ${className}`}>
			{children}
		</div>
	)

}

export function CardHeader({ children, className = '' } : GenericComponentProps) {
	return (
		<div className={`flex flex-col space-y-1.5 p-6 pb-4 ${className}`}>{children}</div>
	)
}


export function CardTitle({ children, className = '' } : GenericComponentProps) {
	return (
		<div className={`text-2xl font-semibold leading-none tracking-tight ${className}`}>{children}</div>
	)
}

export function CardSubtitle({ children, className = '' } : GenericComponentProps) {
	return (
		<div className={`text-sm text-white text-opacity-75 ${className}`}>{children}</div>
	)
}

export function CardContent ({ children, className = '' } : GenericComponentProps) {
	return (
		<div className={`p-6 pt-0 ${className}`}>{children}</div>
	)
}

export function CardFooter ({ children, className = '' } : GenericComponentProps) {
	return (
		<div className={`flex items-center p-6 pt-0 ${className}`}>{children}</div>
	)
}