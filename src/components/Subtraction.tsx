import { useEffect, useState } from 'react'

const Subtraction = (props: { count: number }) => {
	const [subtractResult, setSubtractResult] = useState<number>(0)
	const { count } = props

	useEffect(() => {
		setSubtractResult(4 - count)
	}, [count])

	return (
		<div className="card_container">
			<div className="input_container">4 * {count}</div>

			<div className="new_value">{subtractResult}</div>
		</div>
	)
}

export default Subtraction
