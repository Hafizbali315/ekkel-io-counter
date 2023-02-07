import { useEffect, useState } from 'react'

const Multiplier = (props: { count: number }) => {
	const [multiplyResult, setMultiplyResult] = useState<number>(0)
	const { count } = props

	useEffect(() => {
		setMultiplyResult(-5 * count)
	}, [count])

	return (
		<div className="card_container">
			<div className="input_container">-5 * {count}</div>

			<div className="new_value">{multiplyResult}</div>
		</div>
	)
}

export default Multiplier
