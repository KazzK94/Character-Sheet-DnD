
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
				<select name="section" id="section" onChange={onSelectChange} className='text-black text-lg px-3 py-2'>
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
							<div className='mb-2'>
								<p>RASGOS DE PERSONALIDAD: Nadie sufrirá mientras yo pueda evitarlo.</p>
							</div>
							<div className='mb-2'>
								<p>IDEALES: Honor. Soy un firme seguidor de mi fe, que me lleva por el camino del honor y la benevolencia..</p>
							</div>
							<div className='mb-2'>
								<p>VÍNCULO: He sido testigo de innumerables crímenes, uno de ellos causando la muerte de mi hermano pequeño a sus 6 años. No toleraré que siga habiendo injusticias así en el mundo.</p>
							</div>
							<div className='mb-2'>
								<p>DEFECTO: Mi obsesión por un mundo ideal a veces me lleva a tomar malas decisiones sin darme cuenta. Y ni hablemos de esa estúpida maldición...</p>
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
							<p>(Contenido pendiente de cumplimentar)</p>
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