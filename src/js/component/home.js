import React, { useState, useEffect } from "react";

//create your first component
export function Home() {
	const [time, setTime] = useState(0);
	const [time2, setTime2] = useState(0);
	const [time3, setTime3] = useState(0);
	const [time4, setTime4] = useState(0);
	const [time5, setTime5] = useState(0);

	const runCounter = () => {
		setInterval(() => {
			setTime(time => time + 1);
		}, 1000);
	};

	useEffect(() => {
		runCounter();
	}, []);

	if (time === 10) {
		setTime(0);
		setTime2(time2 + 1);
	}
	if (time2 === 10) {
		setTime(0);
		setTime2(0);
		setTime3(time3 + 1);
	}
	if (time3 === 10) {
		setTime(0);
		setTime2(0);
		setTime3(0);
		setTime4(time4 + 1);
	}
	if (time4 === 10) {
		setTime(0);
		setTime2(0);
		setTime3(0);
		setTime4(0);
		setTime5(time5 + 1);
	}

	return (
		<div className="row" style={{ paddingLeft: 500 + "px" }}>
			<div className=" bg-dark text-white">
				<div className="card-body">
					<i className="fas fa-clock"></i>
				</div>
			</div>
			<div className=" bg-dark text-white">
				<div className="card-body">{time5}</div>
			</div>

			<div className=" bg-dark text-white">
				<div className="card-body">{time4}</div>
			</div>

			<div className=" bg-dark text-white">
				<div className="card-body">{time3}</div>
			</div>
			<div className=" bg-dark text-white">
				<div className="card-body">{time2}</div>
			</div>
			<div className=" bg-dark text-white">
				<div className="card-body">{time}</div>
			</div>
		</div>
	);
}
export default Home;
