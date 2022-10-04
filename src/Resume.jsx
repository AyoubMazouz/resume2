import React from "react"
import Container from "./components/Container"
import CoverLetter from "./CoverLetter"
import LanguageMeter from "./components/LanguageMeter"
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
} from "./data"

const Resume = () => {
	return (
		<div className="py-2 space-y-6">
			<CoverLetter />

			<div className="w-[595px] h-[842px] mx-auto my-1 shadow-xl bg-light px-8 py-8 text-xs space-y-6 text-dark font-dm leading-[.9rem]">
				{/* Header */}
				<div className="grid grid-cols-12 pb-4">
					<img src={image} className="h-[128px] shadow col-span-4" />
					<div className="col-span-8">
						<div className="text-5xl space-x-2 text-accent font-lora">
							<span className="font-semibold">{fullName[0]}</span>
							<span>{fullName[1]}</span>
						</div>
						<div className="text-xl capitalize font-lora">{title}</div>
						<div className="mt-4 flex flex-wrap gap-x-1">
							{details?.map((detail, index) => (
								<>
									<div>{detail}</div>
									{index !== details?.length - 1 ? " | " : null}
								</>
							))}
						</div>
					</div>
				</div>
				{/* Formation */}
				<Container title="Formation">
					<div className="space-y-1.5">
						{educations?.map((education) => (
							<div className="grid grid-cols-12">
								<span className="col-span-3">{education[0]}</span>
								<span className="col-span-9">{education[1]}</span>
							</div>
						))}
					</div>
				</Container>
				{/* Competencies */}
				<Container title="competences">
					<ul className="list-disc ">
						{competencies?.map((competence) => (
							<li>{competence}</li>
						))}
						{/* Programming Languages */}
						<li>
							<span>Efficace: </span>
							{programmingLangues.efficient?.map((item, index) => (
								<>
									<span className="text-accent font-semibold">{item}</span>
									{index === programmingLangues.efficient?.length - 1
										? "."
										: ", "}
								</>
							))}
						</li>
						<li>
							<span>Familier: </span>
							{programmingLangues.familiar?.map((item, index) => (
								<>
									<span className="text-accent font-semibold">{item}</span>
									{index === programmingLangues.familiar?.length - 1
										? "."
										: ", "}
								</>
							))}
						</li>
						{/* Portfolio */}
						<li>
							Une liste de mes projets personnels se trouve ici:
							<span className="font-semibold text-accent underline">
								{" "}
								<a href="https://ayoubmazouz.github.io" target="_blank_">
									ayoubmazouz.github.io
								</a>
							</span>
						</li>
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
				{/* Grid */}
				<div className="grid grid-cols-2 gap-x-4">
					{/* Hobbies */}
					<Container title="loisirs">
						<div className="capitalize">{hobbies.join(", ") + "."}</div>
					</Container>
					{/* Languages */}
					<Container title="langues">
						{languages?.map((language) => (
							<LanguageMeter language={language} />
						))}
					</Container>
				</div>
			</div>
		</div>
	)
}

export default Resume
