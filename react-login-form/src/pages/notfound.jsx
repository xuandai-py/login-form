import {useNavigate} from 'react-router-dom'

export default function Error404() {
	const navigate = useNavigate();

	return (
		<div className='notfound-wrapper'>
			<div className='notfound-content'>
				<h2>Error404</h2>
				<button className="btn btn-submit" onClick={() => navigate('/')}>
					Go back
				</button>
			</div>
		</div>
	)
}