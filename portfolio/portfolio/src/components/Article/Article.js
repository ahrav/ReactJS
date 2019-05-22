import React from 'react'

const article = props => {
    return (
      <section id="four" className="wrapper alt style1">
		<div className="inner">
			<h2 className="major">Personal Projects</h2>
			<p>Here are some of my personal projects that I have worked on. Unfortunately I do not have them currently up and running, but feel free to check out the source code. As you will be able to tell I am not much of of UX person so the majority will be functionality.</p>
			<section className="features">
				<article>
					<img className="image" src="images/travel_buddy.jpg" alt="" />
					<h3 className="major">Travel Buddy</h3>
					<p>Application built with Django/Python and MySQL in order to plan trips all over the globe with as many friends as you like. Simple yet effective.</p>
					<a href="https://github.com/ahrav/travel_buddy" className="special">Source Code</a>
				</article>
				<article>
					<img className="image" src="images/wedding.jpeg" alt="" />
					<h3 className="major">Wedding Planner</h3>
					<p>C#/Asp .NET Core application to schedule weddings. Help reduce stress by getting your guest list in check</p>
					<a href="https://github.com/ahrav/wedding_planner" className="special">Source Code</a>
				</article>
				<article>
					<img className="image" src="images/burger-logo.png" alt="" />
					<h3 className="major">Burger Builder</h3>
					<p>Small ReactJS application built to create your personal burger. Kinda silly, but who doesn't love burgers.</p>
					<a href="https://github.com/ahrav/ReactJS/tree/master/burgerApp" className="special">Source Code</a>
				</article>
				<article>
					<img className="image" src="images/tracker.jpeg" alt="" />
					<h3 className="major">Personal Fitness Tracker</h3>
					<p>Application to track your daily workouts, food, and weight. (Currently in progress)</p>
					<a href="https://github.com/ahrav" className="special">Coming Soon</a>
				</article>
			</section>
			<ul className="actions">
				<li><a href="https://github.com/ahrav" className="button">View All</a></li>
			</ul>
		</div>
		</section>
    )
}

export default article