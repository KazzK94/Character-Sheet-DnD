
import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardSubtitle, CardContent } from '../components/ui/Card'

export default function CharacterInfoPage() {

	const [section, setSection] = useState('basicInfo')

	const character = {
		name: 'C. Sihl'
	}

	const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSection(event.target.value)
	}

	return (
		<div className='mt-3'>

			<div className='flex justify-end mr-4 mb-3'>
				<select name="section" id="section" onChange={onSelectChange}
					className='text-lg bg-primary border border-gray-200 px-3 py-2 rounded shadow-lg'
				>
					<option value="basicInfo">Información Básica</option>
					<option value="background">Trasfondo</option>
					<option value="traits">Rasgos y Características</option>
					<option value="proficiencies">Competencias</option>
				</select>
			</div>

			{
				section === 'basicInfo' && (
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
				section === 'background' && (
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
				section === 'traits' && (
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
				section === 'proficiencies' && (
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

		</div>
	)
}