
// Hooks
import { useState } from 'react'

// Components
import { Navbar } from './components/Navbar'

// Types
import { PageKey } from './types'

// Pages
import CharacterInfoPage from './pages/CharacterInfoPage'
import { FillerPage } from './components/toDelete/FillerPage'

const Pages = {
	HOME: CharacterInfoPage,
	ROLLS: FillerPage,
	COMBAT: FillerPage,
	SPELLS: FillerPage,
	INVENTORY: FillerPage,
	SWAP: FillerPage
}

export default function App() {

	const [page, setPage] = useState<PageKey>('HOME')
	const CurrentPageComponent = Pages[page as PageKey]

	return (
		<div className='h-screen bg-black flex flex-col-reverse md:flex-col'>
			<Navbar currentPage={page} onPageChange={setPage} />
			{/** HEADER HERE (with current page name) */}
			<main className='flex-1 overflow-y-auto scrollbar-thumb-green-700'>
				<CurrentPageComponent />
			</main>
		</div>
	)
}
