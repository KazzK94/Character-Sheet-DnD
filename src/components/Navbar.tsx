
import { PageKey } from '../types'
import { Container } from './Container'


import { GiCharacter, GiDiceTwentyFacesOne, GiBattleGear, GiBookmarklet, GiBackpack, GiCardExchange } from 'react-icons/gi'
const links = [
	{
		"title": "Personaje",
		"toPage": "HOME",
		"icon": <GiCharacter />
	},
	{
		"title": "Tiradas",
		"toPage": "ROLLS",
		"icon": <GiDiceTwentyFacesOne />
	},
	{
		"title": "Combate",
		"toPage": "COMBAT",
		"icon": <GiBattleGear />
	},
	{
		"title": "Magias",
		"toPage": "SPELLS",
		"icon": <GiBookmarklet />
	},
	{
		"title": "Inventario",
		"toPage": "INVENTORY",
		"icon": <GiBackpack />
	},
	{
		"title": "Cambiar de PJ",
		"toPage": "SWAP",
		"icon": <GiCardExchange />
	}
]

interface NavbarProps {
	currentPage: string,
	onPageChange: (toPage: PageKey) => void,
	className?: string
}

export function Navbar({ currentPage, onPageChange, className = '' }: NavbarProps) {
	return (
		<nav className={`bg-primary text-white h-16 px-2 flex items-center ${className}`}>
			{/* Links: */}
			<Container>
				<ul className="flex gap-1 md:gap-2 justify-around md:justify-normal text-3xl md:text-lg">
					{
						links.map((link, index) => {
							return (<li key={index} className=''>
								{ /* TODO: Remove onClick, make it handle it using toPage and the info of the page on the context (useContext) */ }
								<NavbarLink toPage={link.toPage as PageKey} onClick={() => onPageChange(link.toPage as PageKey)} className={`flex items-center gap-2 ${currentPage === link.toPage ? 'bg-blue-800' : 'hover:bg-blue-900'}`}>
									<span>{link.icon}</span>
									<span className='hidden md:block'>{link.title}</span>
								</NavbarLink>
							</li>)
						})
					}
				</ul>
			</Container>
		</nav>
	)
}


interface NavbarLinkProps {
	toPage?: string
	className?: string
	onClick: () => void
	children: React.ReactNode
}

export function NavbarLink({ className = '', onClick, toPage, children }: NavbarLinkProps) {

	const handleClick = () => {
		// TODO: Replace onClick call, use useContext and toPage
		onClick()
		console.log(toPage)
	}

	return (
		<a onClick={handleClick} className={`px-2 py-2 rounded cursor-pointer ${className}`}>
			{children}
		</a>
	)
}
