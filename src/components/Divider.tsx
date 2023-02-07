import { useEffect, useState } from 'react'

const Divider = (props: { count: number }) => {
	const [divideResult, setDivideResult] = useState<number>(0)
	const { count } = props

	useEffect(() => {
		setDivideResult(6 / count)
	}, [count])

	return (
		<div className="card_container">
			<div className="input_container">6 / {count}</div>

			<div className="new_value">{divideResult}</div>
		</div>
	)
}

export default Divider
