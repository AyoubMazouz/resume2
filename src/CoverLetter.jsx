import React from "react"
import Container from "./components/Container"
import { details, fullName } from "./data"

const CoverLetter = () => {
	return (
		<div className="w-[595px] h-[842px] mx-auto my-1 shadow-xl bg-light px-8 py-12 text-xs space-y-24 text-dark font-dm">
			{/* Head */}
			<div className="flex justify-between">
				<div>
					<div className="text-accent font-bold text-base font-lora">
						{fullName}
					</div>
					<ul className="">
						{details.map((detail) => (
							<li>{detail}</li>
						))}
					</ul>
				</div>
				<div className="text-right max-w-[16ch]">
					<div>20 Septemble 2022</div>
					<div>{"<COORDONNÉES DU DESTINATAIRE>"}</div>
				</div>
			</div>
			{/* Body */}
			<div className="space-y-2">
				<div className="text-accent font-bold text-base mb-12">
					Object: <span>Demande de stage</span>
				</div>
				<p className="font-semibold text-accent pb-2">Monsieur/Madam</p>
				<p className="indent-4">
					J'ai l'honneur de vous demander m'accorder un stage conventionné d'une
					durée de trois mois, au sein de votre société {"<COMPANY NAME>"}.
				</p>
				<p className="indent-4">
					Après avoir fait des recherches sur votre organisation, j'ai été
					attiré par votre solide bilan de réalisations et les valeurs de votre
					entreprise.
				</p>
				<p className="indent-4">
					En plus d'être un bon auditeur, un collaborateur, un apprenant rapide
					qui nécessite peu de supervision et prêt à assumer toutes les tâches,
					quelle que soit leur complexité.
				</p>
				<p className="indent-4">
					Je suis disponible pour un entretien à court terme et j'apprécierais
					beaucoup l'opportunité de vous démontrer mes compétences et mes
					qualités.
				</p>
				<p className="indent-4">
					Veulliez recevoir, mes salutations distinguées.
				</p>
				<p className="indent-4">
					Veuillez trouver ci-joint mon CV à l'appui de ma candidature.
				</p>
				<div className="text-accent font-bold text-right pt-12">
					Mazouz Ayoub
				</div>
			</div>
		</div>
	)
}

export default CoverLetter
