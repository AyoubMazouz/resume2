import { useState, useRef } from "react"
import emailjs from "emailjs-com"
import ProjectCard from "./components/ProjectCard"
import {
	competencies,
	details,
	educations,
	experiences,
	fullName,
	hobbies,
	image,
	languages,
	title,
	programmingLangues,
	projects,
} from "./data"

const Home = () => {
	const form = useRef()
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [msg, setMsg] = useState("")
	const [feedbackMsg, setFeedbackMsg] = useState("")
	const sendEmail = (e) => {
		e.preventDefault()
		emailjs
			.sendForm(
				"service_a5he7k9",
				"template_49l84no",
				form.current,
				"Aqf6ll3x8Oeh4hmcK"
			)
			.then(
				(result) => {
					setFeedbackMsg("Message has been sent successfully!")
					console.log(result.text)
				},
				(error) => {
					setFeedbackMsg("Something went wrong! Please try again.")
					setTimeout(() => setFeedbackMsg(""), 5000)
					console.log(error.text)
				}
			)
	}
	return (
		<div className="flex justify-center bg-light font-dm">
			<div className="relative grid gap-x-16 gap-y-36 lg:grid-cols-2 max-w-[1400px] px-10">
				<div className="hidden lg:block"></div>
				<div className="flex flex-col h-full pt-20 lg:fixed">
					{/* Header */}
					<div className="text-7xl lg:text-8xl text-accent font-extra-light font-lora mb-2">
						{fullName[1]}
					</div>
					<div className="text-7xl lg:text-8xl text-accent font-bold font-lora ">
						{fullName[0]}
					</div>
					<div className="text-2xl lg:text-3xl text-accent font-lora">
						{title}
					</div>
					<p className="mt-10 max-w-[50ch]">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
						odit quibusdam, sunt, reiciendis unde accusantium vitae assumenda
						praesentium possimus quia eveniet eaque porro libero provident harum
						reprehenderit in placeat esse voluptates pariatur! Quae quas dolores
						hic eligendi sed?
					</p>
					{/* Contact Form */}
					<form
						onSubmit={sendEmail}
						method="post"
						ref={form}
						className="text-sm text-accent font-semibold space-y-3 mt-10"
					>
						<div>
							<label htmlFor="name">Full Name</label>
							<input
								type="text"
								name="name"
								required
								className="px-2 py-3 text-dark-gray font-semibold w-full"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div>
							<label htmlFor="email">Email</label>
							<input
								type="email"
								name="email"
								required
								className="px-2 py-3 text-dark-gray font-semibold w-full"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div>
							<label htmlFor="msg">Message</label>
							<input
								type="text"
								name="msg"
								required
								className="px-2 py-3 text-dark-gray font-semibold w-full"
								value={msg}
								onChange={(e) => setMsg(e.target.value)}
							/>
						</div>
						{feedbackMsg.length ? (
							<button
								type="submit"
								className="px-6 py-2 bg-dark-gray border-2 border-dark-gray uppercase font-bold text-light-gray disabled w-full"
							>
								message has been sent successfully
							</button>
						) : (
							<button
								type="submit"
								className="px-6 py-2 bg-accent hover:bg-transparent border-2 border-accent uppercase font-bold text-white hover:text-accent transition-all duration-300 w-full"
							>
								Send a Message
							</button>
						)}
					</form>
				</div>
				{/* Projects */}
				<div className="space-y-12 flex flex-col items-center lg:pt-72">
					{projects?.map((project) => (
						<ProjectCard {...project} />
					))}
				</div>
				{/* Nav */}
				<div className="absolute top-8 right-8 flex items-center gap-x-4 text-sm">
					<div className="flex gap-x-2 text-accent font-semibold underline">
						<a
							href="https://www.linkedin.com/in/ayoub-mazouz-8aa85a226/"
							target="_blank"
						>
							LinkedIn
						</a>
						<a href="https://github.com/AyoubMazouz" target="_blank">
							GitHub
						</a>
					</div>
					<a
						download
						href="/resume.pdf"
						className="px-6 py-2 bg-accent hover:bg-transparent border-2 border-accent uppercase font-bold text-white hover:text-accent transition-all duration-300"
					>
						Resume
					</a>
				</div>
				<footer className="mt-16 text-center text-xs text-dark-gray">
					2022 | Mazouz Ayoub
				</footer>
			</div>
		</div>
	)
}

export default Home
