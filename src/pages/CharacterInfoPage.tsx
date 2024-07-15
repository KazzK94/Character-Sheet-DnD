
import { GiCharacter, GiBootPrints, GiChaingun, GiBowman } from 'react-icons/gi'

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardSubtitle, CardContent } from '../components/ui/Card'
import { Container } from '../components/Container'

const links = [
	{
		"title": "Información Básica",
		"toSection": "BASIC_INFO",
		"icon": <GiCharacter />
	},
	{
		"title": "Trasfondo",
		"toSection": "BACKGROUND",
		"icon": <GiBootPrints />
	},
	{
		"title": "Rasgos y Características",
		"toSection": "TRAITS",
		"icon": <GiChaingun />
	},
	{
		"title": "Competencias",
		"toSection": "PROFICIENCIES",
		"icon": <GiBowman />
	},
]

export default function CharacterInfoPage() {

	const [section, setSection] = useState('BASIC_INFO')

	const character = {
		name: 'C. Sihl'
	}

	const onSecondarySectionChange = (secondarySection: string) => {
		setSection(secondarySection)
	}

	return (
		<div className='h-full flex flex-col-reverse md:flex-col'>
			{/* Submenu: */}
			<div className='h-12 bg-blue-900 text-white px-3 rounded-t md:rounded-t-none md:rounded-b flex items-center sticky bottom-0 md:top-0 md:bottom-auto  flex-shrink-0'>
				<Container>
					<ul className="flex gap-1 md:gap-2 justify-around md:justify-normal text-2xl md:text-base">
						{
							links.map((link, index) => {
								return (<li key={index} className=''>
									{ /* TODO: Remove onClick, make it handle it using toPage and the info of the page on the context (useContext) */}
									<SubNavbarLink
										onClick={() => onSecondarySectionChange(link.toSection)}
										className={`flex items-center gap-2 ${section === link.toSection ? 'bg-blue-600' : 'hover:bg-blue-700'}`}
									>
										<span>{link.icon}</span>
										<span className='hidden md:block'>{link.title}</span>
									</SubNavbarLink>
								</li>)
							})
						}
					</ul>
				</Container>
			</div>
			<Container className='py-3 flex-grow overflow-y-scroll'>
				{
					section === 'BASIC_INFO' && (
						<Card className='mx-4'>
							<CardHeader>
								<CardTitle>{character.name}</CardTitle>
								<CardSubtitle>Información del Personaje</CardSubtitle>
							</CardHeader>
							<CardContent>
								<div>Clase: Paladín (Nv. 3)</div>
								<div>Raza: Humano</div>
								<div>Alineamiento: Legal/Bueno</div>
								<div>Tipo: Humanoide</div>
								<div>Tamaño: Mediano</div>
								<div>Trasfondo: Héroe del Pueblo</div>
								<div>Jugador: Kazz</div>
							</CardContent>
						</Card>
					)
				}

				{
					section === 'BACKGROUND' && (
						<Card className='mx-4'>
							<CardHeader>
								<CardTitle>{character.name}</CardTitle>
								<CardSubtitle>Trasfondo</CardSubtitle>
							</CardHeader>
							<CardContent>
								<div className="flex flex-col gap-2">
									<Card>
										<CardHeader>
											<CardTitle>Rasgos de Personalidad</CardTitle>
										</CardHeader>
										<CardContent>
											<p>Inquebrantable. "Me mantengo firme en mis principios, guiado siempre por la ley y la justicia."</p>
										</CardContent>
									</Card>
									<Card>
										<CardHeader>
											<CardTitle>Ideales</CardTitle>
										</CardHeader>
										<CardContent>
											<p>Responsabilidad: "Es mi deber proteger a los inocentes y luchar contra la injusticia en cualquier rincón del mundo."</p>
										</CardContent>
									</Card>
									<Card>
										<CardHeader>
											<CardTitle>Vínculo</CardTitle>
										</CardHeader>
										<CardContent>
											<p>Devoción: "Mi fe me guía por el buen camino. Debo salvar a todos aquellos que necesiten ser salvados."</p>
										</CardContent>
									</Card>
									<Card>
										<CardHeader>
											<CardTitle>Defecto</CardTitle>
										</CardHeader>
										<CardContent>
											<p>Autoexigencia: "Me impongo estándares demasiado altos, hasta el punto de cuestionar mi valía por cualquier error."</p>
										</CardContent>
									</Card>
								</div>
							</CardContent>
						</Card>
					)
				}

				{
					section === 'TRAITS' && (
						<Card className='mx-4'>
							<CardHeader>
								<CardTitle>{character.name}</CardTitle>
								<CardSubtitle>Rasgos y Características</CardSubtitle>
							</CardHeader>
							<CardContent>
								<Card className='mb-2'>
									<CardHeader>
										<CardTitle>Deidad Adorada</CardTitle>
									</CardHeader>
									<CardContent>
										<p>
											Torm, el dios del coraje y el sacrificio.
										</p>
									</CardContent>
								</Card>
								<Card>
									<CardHeader>
										<CardTitle>Sentido Divino</CardTitle>
										<CardSubtitle>1 acción | Usos: 1 + CAR (recupera en DL)</CardSubtitle>
									</CardHeader>
									<CardContent>
										<p>
											Detectas la ubicación de celestiales, demonios y no-muertos, además de objetos consagrados o profanados, en un radio de 60 pies.
										</p>
									</CardContent>
								</Card>
							</CardContent>
						</Card>
					)
				}

				{
					section === 'PROFICIENCIES' && (
						<Card className='mx-4'>
							<CardHeader>
								<CardTitle>{character.name}</CardTitle>
								<CardSubtitle>Competencias</CardSubtitle>
							</CardHeader>
							<CardContent>
								<p>(Contenido pendiente de cumplimentar)</p>
							</CardContent>
						</Card>
					)
				}
			</Container>
		</div>
	)
}


interface NavbarLinkProps {
	toPage?: string
	className?: string
	onClick: () => void
	children: React.ReactNode
}

export function SubNavbarLink({ className = '', onClick, toPage, children }: NavbarLinkProps) {

	const handleClick = () => {
		// TODO: Replace onClick call, use useContext and toPage
		onClick()
		console.log(toPage)
	}

	return (
		<a onClick={handleClick} className={`px-2 py-1 rounded cursor-pointer ${className}`}>
			{children}
		</a>
	)
}
