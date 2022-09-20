import "./App.css"
import Container from "./components/Container"
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
} from "./data"

function App() {
	return (
		<div className="w-[595px] h-[842px] mx-auto my-4 shadow-xl bg-light px-8 py-12 text-xs space-y-8 text-dark font-['Nanum Gothic Coding']">
			{/* Header */}
			<div className="grid grid-cols-12">
				<img src={image} className="h-[128px] shadow col-span-4" />
				<div className="col-span-8">
					<div className="text-5xl space-x-2 text-accent font-['bodoni-moda']">
						<span className="font-semibold">{fullName.split(" ")[0]}</span>
						<span>{fullName.split(" ")[1]}</span>
					</div>
					<div className="text-xl capitalize font-['bodoni-moda']">{title}</div>
					<div className="mt-4">{details.join(" | ") + "."}</div>
				</div>
			</div>
			{/* Spacer */}
			<div className="h-1"></div>
			{/* Competencies */}
			<Container title="competences">
				<ul className="list-disc ">
					{competencies?.map((competence) => (
						<li>{competence}</li>
					))}
				</ul>
			</Container>
			{/* Experience */}
			<Container title="expériences">
				{experiences?.map((experience) => (
					<div className="grid grid-cols-12">
						<span className="col-span-3">{experience[0]}</span>
						<span className="col-span-9">{experience[1]}</span>
					</div>
				))}
			</Container>
			{/* Education */}
			<Container title="éducation">
				{educations?.map((education) => (
					<div className="grid grid-cols-12">
						<span className="col-span-3">{education[0]}</span>
						<span className="col-span-9">{education[1]}</span>
					</div>
				))}
			</Container>
			{/* Grid */}
			<div className="grid grid-cols-2 gap-x-4">
				{/* Hobbies */}
				<Container title="loisirs">
					<div className="capitalize">{hobbies.join(", ") + "."}</div>
				</Container>
				{/* Languages */}
				<Container title="langues">
					{languages?.map((language) => (
						<div>
							<span>{language[0]}</span>
							<div className="relative bg-light-gray h-2 w-full">
								<div
									className={`bg-dark-gray h-full w-${language[1]}/6 absolute top-0 left-0`}
								></div>
							</div>
							<div className="text-dark-gray text-right uppercase text-[.60rem]">
								{language[2]}
							</div>
						</div>
					))}
				</Container>
			</div>
		</div>
	)
}

export default App
