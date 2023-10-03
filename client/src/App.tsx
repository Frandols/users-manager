import { Header, Users } from '@/components'
import { useUsers } from '@/hooks'

const App = () => {
	const { loading, users, getUsersHandler } = useUsers()

	return (
		<>
			<Header getUsersHandler={getUsersHandler} />
			<main>
				<Users
					loading={loading}
					users={users}
					getUsersHandler={getUsersHandler}
				/>
			</main>
		</>
	)
}

export default App
