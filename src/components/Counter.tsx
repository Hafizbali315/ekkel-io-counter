import { useState } from 'react'
import Multiplier from './Multiplier'
import Subtraction from './Subtraction'
import Divider from './Divider'

const Counter = () => {
	const [count, setCount] = useState<number>(0)

	return (
		<div className="counter">
			<Multiplier count={count} />

			<Subtraction count={count} />

			<Divider count={count} />

			<div className="card_container">
				<button className="count-btn" onClick={() => setCount(count - 1)}>
					{' '}
					-{' '}
				</button>

				<input id="counter-value" className="count-value" value={count} readOnly />

				<button className="count-btn" onClick={() => setCount(count + 1)}>
					+
				</button>
			</div>
		</div>
	)
}

export default Counter
