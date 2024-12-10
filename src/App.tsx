import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import {
	FaChevronDown,
	FaChevronLeft,
	FaChevronRight,
	FaClipboard,
	FaLinkedin,
	FaSquareGithub,
	FaReact,
	FaMoneyCheck,
	FaSwift,
} from 'react-icons/fa6';
import {
	SiNextdotjs,
	SiRedux,
	SiWebpack,
	SiExpress,
	SiMongodb,
	SiMixpanel,
} from 'react-icons/si';
import './App.css';
import { BookshelfModel } from './assets/models/BookshelfModel';
import cambridge from '/cambridge.png';
import nyuX from '/nyux.png';
import selfie from '/placeholder.png';
import sfOnline from '/sfOnline.png';
import utn from '/utn.png';

const workExperienceData = [
	{
		name: 'Skill Trees',
		role: 'Solo Founder & Software Engineer',
		timeInCompany: '(2023 - 2024)',
		techUsed: [
			{
				icon: <FaSwift opacity={0.6} color="#FF3D00" />,
				name: 'SwiftUI',
				color: '#FF3D00',
			},
			{
				icon: <SiMixpanel opacity={0.6} color="#800080" />,
				name: 'MixPanel',
				color: '#800080',
			},
			{
				icon: <FaMoneyCheck opacity={0.6} color="#FF1E56" />,
				name: 'RevenueCat',
				color: '#FF1E56',
			},
			{
				icon: <FaReact opacity={0.6} color="#03A9F4" />,
				name: 'React Native',
				color: '#03A9F4',
			},
			{
				icon: <FaSwift opacity={0.6} color="#1976D2" />,
				name: 'TypeScript',
				color: '#1976D2',
			},
			{
				icon: <SiExpress opacity={0.6} color="#008000" />,
				name: 'ExpressJS',
				color: '#008000',
			},
			{
				icon: <SiMongodb opacity={0.6} color="#008000" />,
				name: 'MongoDB',
				color: '#008000',
			},
		],
		description: [
			'I created Skill Trees to make achieving goals more fun by gamifying the process. Initially, I built the Android app using React Native with Skia, but when I decided to focus on iOS, I switched to SwiftUI for better performance.',
			"For the visuals, I developed a custom hierarchical tree layout algorithm inspired by Reingold-Tilford's Algorithm and Sugiyama's Framework, plus a radial layout algorithm to create clean, space-efficient graphs.",
			'The iOS app is built with SwiftUI, SwiftData, and SwiftCharts, while the server runs on ExpressJS to manage user data, RevenueCat webhooks, automated surveys, and SendGrid integration.',
			'The Android version hit a peak of 1,710 users. The iOS version ran much faster on the same tasks compared to the Android one. Both apps launched on their app stores but aren’t available to download anymore.',
		],
		images: [
			{ src: '/projectsScreenshots/skilltrees/4.png', type: 'desktop' },
			{ src: '/projectsScreenshots/skilltrees/5.png', type: 'desktop' },
			{ src: '/projectsScreenshots/skilltrees/1.png', type: 'mobile' },
			{ src: '/projectsScreenshots/skilltrees/2.png', type: 'mobile' },
			{ src: '/projectsScreenshots/skilltrees/3.png', type: 'mobile' },
		],
	},
	{
		name: 'MyBrainPro',
		role: 'Solo Founder & Software Engineer',
		timeInCompany: '(2024)',
		techUsed: [
			{
				icon: <FaSwift opacity={0.6} color="#FF3D00" />,
				name: 'SwiftUI',
				color: '#FF3D00',
			},
			{
				icon: <SiMixpanel opacity={0.6} color="#800080" />,
				name: 'MixPanel',
				color: '#800080',
			},
			{
				icon: <FaMoneyCheck opacity={0.6} color="#FF1E56" />,
				name: 'RevenueCat',
				color: '#FF1E56',
			},
			{
				icon: <FaSwift opacity={0.6} color="#1976D2" />,
				name: 'TypeScript',
				color: '#1976D2',
			},
			{
				icon: <SiExpress opacity={0.6} color="#008000" />,
				name: 'ExpressJS',
				color: '#008000',
			},
			{
				icon: <SiMongodb opacity={0.6} color="#008000" />,
				name: 'MongoDB',
				color: '#008000',
			},
		],
		description: [
			'I created MyBrainPro to help people with ADHD stay focused on long-term projects. I launched it on TestFlight with a group of over 80 testers.',
			'The app is built using SwiftUI, SwiftData, and SwiftCharts, while the server runs on ExpressJS to handle user data, RevenueCat webhooks, and SendGrid integration.',
			"Before launch, I made sure everything worked smoothly by running end-to-end tests using Xcode's test suite.",
		],
		images: [
			{ src: '/projectsScreenshots/mybrainpro/1.png', type: 'mobile' },
			{ src: '/projectsScreenshots/mybrainpro/2.png', type: 'mobile' },
			{ src: '/projectsScreenshots/mybrainpro/3.png', type: 'mobile' },
			{ src: '/projectsScreenshots/mybrainpro/4.png', type: 'mobile' },
			{ src: '/projectsScreenshots/mybrainpro/5.png', type: 'mobile' },
			{ src: '/projectsScreenshots/mybrainpro/6.png', type: 'mobile' },
		],
	},
	{
		name: 'TrackerWallet',
		role: 'Front End Software Engineer',
		timeInCompany: '(2022)',
		techUsed: [
			{
				icon: <SiNextdotjs opacity={0.6} color="#333333" />,
				name: 'NextJs',
				color: '#333333',
			},
			{
				icon: <FaSwift opacity={0.6} color="#1976D2" />,
				name: 'TypeScript',
				color: '#1976D2',
			},
		],
		description: [
			"As the lead developer on this project, I was responsible for selecting the technologies and designing the components and interfaces for the current app and future backend API. I created a mock API to simulate the intended behavior and used local and session storage to ensure data persistence between reloads. I also followed Apple's user experience guidelines to create a smooth and fluid experience for users.",
			'Using TypeScript as the main language, I wrote clean and well-organized code and implemented recursive algorithms to iterate through tree data structures. I modified VisJs to visualize these trees in two different ways, and wrote custom SVG code to render the tree nodes. I also developed the app based on provided Sigma designs and created functions to filter sub-trees and render an account balance across different time periods. Overall, my contributions helped to create a functional and user-friendly app for our users.',
		],
		images: [
			{
				src: '/projectsScreenshots/trackerWallet/dashboard1.png',
				type: 'desktop',
			},
			{
				src: '/projectsScreenshots/trackerWallet/dashboard2.png',
				type: 'desktop',
			},
			{ src: '/projectsScreenshots/trackerWallet/map.png', type: 'desktop' },
			{
				src: '/projectsScreenshots/trackerWallet/mappeditnode.png',
				type: 'desktop',
			},
			{
				src: '/projectsScreenshots/trackerWallet/mapfiltercolor.png',
				type: 'desktop',
			},
			{
				src: '/projectsScreenshots/trackerWallet/maptree.png',
				type: 'desktop',
			},
			{
				src: '/projectsScreenshots/trackerWallet/profile.png',
				type: 'desktop',
			},
		],
	},
	{
		name: 'CreatorSet',
		role: 'Front End Software Engineer',
		timeInCompany: '(2021 - 2022)',
		techUsed: [
			{
				icon: <FaSwift opacity={0.6} color="#1976D2" />,
				name: 'TypeScript',
				color: '#1976D2',
			},
			{
				icon: <FaReact opacity={0.6} color="#03A9F4" />,
				name: 'React',
				color: '#03A9F4',
			},
			{
				icon: <SiRedux opacity={0.6} color="#800080" />,
				name: 'Redux',
				color: '#800080',
			},
			{
				icon: <SiWebpack opacity={0.6} color="#FBA200" />,
				name: 'Webpack',
				color: '#FBA200',
			},
			{
				icon: <SiMongodb opacity={0.6} color="#008000" />,
				name: 'MongoDB',
				color: '#008000',
			},
		],
		description: [
			'As a developer on this project, I was responsible for several key initiatives, including the migration from MUI to custom components for a complete UI overhaul, the partial migration from JavaScript to TypeScript, and the integration with backend APIs to send and receive data that was then rendered as React components. I also created several forms with the option to upload images, videos, and files.',
			'To enhance the user experience, I implemented polling to check the processing state of uploaded files and created a component that allows users to highlight individual frames of a video. I also built a custom video player and used WavesurferJS to visualize the audio track of an uploaded video. Additionally, I implemented undo and redo functionalities that track the entire modal state.',
			'Finally, I created a component that allows users to see how their YouTube thumbnail would look on the YouTube homepage (in both light and dark mode) on different devices (such as a computer, tablet, or mobile phone). I also worked with the YouTube API to provide channel name autocompletion on the edit profile page.',
		],
		images: [
			{
				src: '/projectsScreenshots/creatorSet/captiontool.png',
				type: 'desktop',
			},
			{
				src: '/projectsScreenshots/creatorSet/captiontoolpage.png',
				type: 'desktop',
			},
			{
				src: '/projectsScreenshots/creatorSet/editProfile.png',
				type: 'desktop',
			},
			{ src: '/projectsScreenshots/creatorSet/login.png', type: 'desktop' },
			{
				src: '/projectsScreenshots/creatorSet/newProduct.png',
				type: 'desktop',
			},
			{
				src: '/projectsScreenshots/creatorSet/profanitychecker.png',
				type: 'desktop',
			},
			{ src: '/projectsScreenshots/creatorSet/store.png', type: 'desktop' },
			{
				src: '/projectsScreenshots/creatorSet/thumbnailPreviewer.png',
				type: 'desktop',
			},
		],
	},
];

function App() {
	const [selected, setSelected] = useState<
		(typeof workExperienceData)[0] | null
	>(null);

	return (
		<main className="px-4 w-screen flex justify-center text-[#0C1A27]">
			<div className="w-full max-w-[900px] flex flex-col items-start">
				{/* Hero Section */}
				<div className="bg-pattern w-full min-h-screen flex flex-col items-center py-4 ">
					<div className="flex flex-col md:flex-row flex-1 md:gap-6 md:items-center">
						<img
							src={selfie}
							className="bg-gray-500 w-[345px] h-[405px] object-cover rounded-xl mb-3 shadow-md shadow-slate-400"
						/>

						<div className="flex-1 flex flex-col md:h-[405px]">
							<h1 className=" font-medium text-4xl mb-1 md:text-5xl">
								Lucas Pennice 🇦🇷
							</h1>
							<h2 className="text-[#0B1A28] font-medium text-2xl md:text-3xl opacity-60">
								Software Engineer
							</h2>

							<div className="flex-1" />

							<h2 className="font-normal text-2xl md:text-3xl mb-1 w-[345px]">
								Nice to meet you 👋
							</h2>
						</div>
					</div>

					<FaChevronDown
						color="#0C1A27"
						opacity={0.3}
						className="animate-bounce"
					/>
				</div>

				<div className="py-6" />

				{/* Experience Section */}
				<h1 className=" font-normal text-xl mb-7 md:text-3xl">Experience</h1>

				{workExperienceData.map((item) => {
					return (
						<motion.div
							key={item.name}
							layoutId={`card-container-${item.name}`}
							className="w-full flex items-center anchor rounded-lg py-4 px-2 bg-[#f8fafc] mb-4"
							onClick={() => setSelected(item)}
						>
							<motion.div
								className="flex-1 flex flex-col items-start"
								layoutId={`title-container-${item.name}`}
							>
								<div className="flex items-baseline gap-2">
									<h1 className="font-medium text-2xl md:text-3xl">
										{item.name}
									</h1>
									<h3 className="text-[#0B1A28] font-medium text-sm md:text-lg opacity-60">
										{item.timeInCompany}
									</h3>
								</div>
								<h3 className="text-[#0B1A28] font-medium text-sm md:text-lg opacity-60">
									{item.role}
								</h3>

								{/* Badges */}
								<div className="flex flex-wrap gap-2">
									{item.techUsed.map((badge) => {
										return (
											<div
												key={`card${item.name}${badge.name}`}
												style={{ backgroundColor: `${badge.color}1A` }}
												className={`mt-1 h-6 items-center flex gap-1 rounded-md px-3 py-1 w-fit`}
											>
												{badge.icon}
												<span
													className={`font-medium text-sm opacity-80`}
													style={{ color: badge.color }}
												>
													{badge.name}
												</span>
											</div>
										);
									})}
								</div>
							</motion.div>
							<FaChevronRight color="#0C1A27" opacity={0.5} />
						</motion.div>
					);
				})}

				<div className="py-12" />

				{/* Formal Education */}
				<h1 className=" font-normal text-xl mb-7 md:text-3xl">
					Formal Education
				</h1>

				{/* UTN */}
				<a className="w-full flex items-center mb-12 rounded-lg py-4 px-2">
					<img src={utn} className="w-[42px] h-[42px] rounded-sm mr-4" />
					<div className="flex-1 flex flex-col items-start">
						<h1 className="font-medium text-lg leading-5">
							Bachelor of Engineering in Information Systems
						</h1>

						<h3 className="text-[#0B1A28] font-medium text-sm opacity-60">
							(2021 - 2026)
						</h3>
					</div>
				</a>

				{/* Machine learning Spec. */}
				<a
					className="w-full flex items-center mb-12 rounded-lg py-4 px-2"
					href="https://www.coursera.org/account/accomplishments/specialization/G42NIG1TGXI8"
					target="_blank"
				>
					<img src={sfOnline} className="w-[42px] h-[42px] rounded-sm mr-4" />
					<div className="flex-1 flex flex-col items-start">
						<h1 className="font-medium text-lg leading-5">
							Machine Learning Specialization
						</h1>

						<h3 className="text-[#0B1A28] font-medium text-sm opacity-60">
							(2024) Stanford Online
						</h3>
					</div>
					<FaChevronRight color="#0C1A27" opacity={0.5} />
				</a>

				{/* NYU. */}
				<a
					href="https://credentials.edx.org/credentials/2f22b253e7b34eeab6d2c6f207484e0f/"
					target="_blank"
					className="w-full flex items-center mb-12 rounded-lg py-4 px-2"
				>
					<img src={nyuX} className="w-[42px] h-[42px] rounded-sm mr-4" />
					<div className="flex-1 flex flex-col items-start">
						<h1 className="font-medium text-lg leading-5">
							Programming & Data Structures
						</h1>

						<h3 className="text-[#0B1A28] font-medium text-sm opacity-60">
							(2022) NYUx
						</h3>
					</div>
					<FaChevronRight color="#0C1A27" opacity={0.5} />
				</a>

				{/* Cambridge. */}

				<a className="w-full flex items-center rounded-lg py-4 px-2">
					<img src={cambridge} className="w-[42px] h-[42px] rounded-sm mr-4" />
					<div className="flex-1 flex flex-col items-start">
						<h1 className="font-medium text-lg leading-5">
							Expert English Level
						</h1>

						<h3 className="text-[#0B1A28] font-medium text-sm opacity-60">
							(2019) Cambridge University Press
						</h3>
					</div>
				</a>

				<div className="py-12" />

				{/* About Me */}
				<h1 className=" font-normal text-xl mb-7 md:text-3xl">About Me</h1>

				<p className="text-base md:text-lg leading-7 mb-8 md:w-[30em]">
					My name is Lucas Pennice, a Software Developer with a strong
					background in React, React Native, and SwiftUI. I love finding
					problems and coming up with software solutions to fix them. This
					passion has led me to create a bunch of mobile apps to tackle issues
					people talk about in forums. Lately, I've been focusing on solving
					everyday problems that small businesses face.
				</p>

				<p className="text-base md:text-lg leading-7 mb-8 md:w-[30em]">
					I started coding back in high school when I took a class on C. After
					that, I decided to go all in and pursue a degree in Systems
					Engineering, which I'm set to finish by 2026.
				</p>

				<p className="text-base md:text-lg leading-7 mb-4 md:w-[30em]">
					When I'm not coding, I'm probably reading about business, philosophy,
					or fantasy. I also love knifemaking, mechanical keyboards, cars, and
					hitting the gym. These hobbies keep me curious, creative, and, most
					importantly, clear-minded, which helps a lot in my work.
				</p>

				<div className="py-12" />

				{/* Supplementary Education */}
				<h1 className=" font-normal text-xl mb-8 md:text-3xl">
					Supplementary Education
				</h1>

				<h1 className="font-medium text-2xl md:text-3xl mb-2">Books</h1>

				<div className="cursor-grab bg-[#F3F5F7] rounded-lg h-[115px] md:h-[160px] w-full mb-4">
					<Canvas camera={{ position: [-25, 5, -25], fov: 15, zoom: 1.5 }}>
						<OrbitControls
							autoRotate={true}
							enablePan={false}
							enableZoom={false}
						/>
						<ambientLight intensity={1.5} />
						<pointLight position={[0, 20, 10]} intensity={2.5} />
						<BookshelfModel />
					</Canvas>
				</div>

				<div className="mb-4">
					<h1 className="font-light text-lg">Clean Code</h1>

					<h3 className="text-[#0B1A28] font-normal text-sm opacity-60">
						Robert C. Martin
					</h3>
				</div>

				<div className="mb-4">
					<h1 className="font-light text-lg">The Clean Coder</h1>

					<h3 className="text-[#0B1A28] font-normal text-sm opacity-60">
						Robert C. Martin
					</h3>
				</div>

				<div className="mb-4">
					<h1 className="font-light text-lg">Test-Driven Development</h1>

					<h3 className="text-[#0B1A28] font-normal text-sm opacity-60">
						Kent Beck
					</h3>
				</div>

				<div className="mb-4">
					<h1 className="font-light text-lg">
						The Philosophy of Software Design
					</h1>

					<h3 className="text-[#0B1A28] font-normal text-sm opacity-60">
						John Ousterhout
					</h3>
				</div>

				<div className="mb-4">
					<h1 className="font-light text-lg">The Pragmatic Programmer</h1>

					<h3 className="text-[#0B1A28] font-normal text-sm opacity-60">
						Andy Hunt & Dave Thomas
					</h3>
				</div>

				<div className="mb-4">
					<h1 className="font-light text-lg">Eloquent JavaScript</h1>

					<h3 className="text-[#0B1A28] font-normal text-sm opacity-60">
						Marijn Haverbeke
					</h3>
				</div>

				<div className="mb-4">
					<h1 className="font-light text-lg">RefactoringUI</h1>

					<h3 className="text-[#0B1A28] font-normal text-sm opacity-60">
						Adam Wathan & Steve Schoger
					</h3>
				</div>

				{/* <div className="py-6" />

				<h1 className="font-medium text-2xl md:text-3xl mb-2">Courses</h1>

				<div className="cursor-grab bg-[#F3F5F7] rounded-lg h-[115px] md:h-[160px] w-full mb-4">
					<Canvas camera={{ position: [-25, 5, -25], fov: 15, zoom: 1 }}>
						<OrbitControls
							autoRotate={true}
							enablePan={false}
							enableZoom={false}
						/>
						<ambientLight intensity={1.5} />
						<pointLight position={[0, 20, 10]} intensity={2.5} />
						<ReactModel />
					</Canvas>
				</div>

				<div>
					<h1 className="font-light text-lg mb-4">
						Advanced CSS and Sass Link
					</h1>
					<h1 className="font-light text-lg mb-4">
						Typescript: The Complete Developer's Guide
					</h1>
					<h1 className="font-light text-lg mb-4">
						Object-oriented Programming in JavaScript
					</h1>
					<h1 className="font-light text-lg mb-4">
						Building Web Applications with React
					</h1>
					<h1 className="font-light text-lg mb-4">
						Working with REST APIs in JavaScript
					</h1>
				</div> */}

				<div className="py-12" />

				{/* Contact */}
				<div className="w-full min-h-screen md:min-h-0 md:h-[50vh] flex flex-col py-4">
					<h1 className=" font-normal text-xl mb-7 md:text-3xl">
						Let's get in touch
					</h1>

					<div className="flex-1" />

					<button
						className="flex gap-2 md:gap-4 items-center justify-start bg-[#F3F5F7] rounded-xl w-full px-4 md:px-8 py-2 md:p-4 transition-all active:bg-[#4CAF501A] mb-4 relative"
						onClick={() => {
							navigator.clipboard.writeText('lucaspennice@gmail.com');
						}}
					>
						<FaClipboard opacity={0.5} color="#0C1A27" size={18} />
						<span className="font-medium md:text-3xl text-xl">
							lucaspennice@gmail.com
						</span>
					</button>

					<div className="flex-1" />

					<a
						href="https://www.linkedin.com/in/lucas-pennice/"
						target="_blank"
						className="w-full mt-1 h-12 bg-opacity-10 bg-[#03A9F4] items-center flex rounded-lg px-3 py-1 mb-4"
					>
						<FaLinkedin opacity={0.4} color="#03A9F4" size={32} />
						<span className="text-[#03A9F4] font-medium text-xl opacity-80 ml-2">
							My LinkedIn
						</span>

						<div className="flex-1" />

						<FaChevronRight color="#03A9F4" opacity={0.6} />
					</a>

					<a
						href="https://github.com/LucasPennice"
						target="_blank"
						className="w-full mt-1 h-12 bg-opacity-10 bg-[#333333] items-center flex rounded-lg px-3 py-1"
					>
						<FaSquareGithub opacity={0.4} color="#333333" size={32} />
						<span className="text-[#333333] font-medium text-xl opacity-80 ml-2">
							My GitHub
						</span>

						<div className="flex-1" />

						<FaChevronRight color="#333333" opacity={0.6} />
					</a>
				</div>

				<AnimatePresence>
					{selected && (
						<Item
							key={Item.name}
							item={selected}
							close={() => {
								setSelected(null);
							}}
						/>
					)}
				</AnimatePresence>
			</div>
		</main>
	);
}

export default App;

export function Item({
	item,
	close,
}: {
	item: (typeof workExperienceData)[0];
	close: () => void;
}) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.2, delay: 0.1 }}
			style={{ pointerEvents: 'auto' }}
			className="overlay bg-slate-500 bg-opacity-10 flex justify-center items-center"
			onClick={close}
		>
			<motion.div
				className="pointer-events-auto relative bg-[#f8fafc] overflow-y-scroll open w-full max-w-[900px] z-10 h-full md:h-fit md:rounded-lg px-8 pb-4 md:shadow-md md:shadow-[#0B1A281A] max-h-[700px]"
				layoutId={`card-container-${item.name}`}
			>
				<button className="text-[#649ACB] flex gap-2 items-center w-full max-w-[900px] fixed py-4 z-10 bg-[#f8fafc]/90 backdrop-blur-lg md:rounded-t-lg ml-[-32px] pl-4">
					<FaChevronLeft color="#649ACB" size={14} />
					<p className="text-md">Home</p>
				</button>
				<motion.div
					className="flex-1 flex flex-col items-start mb-4 mt-14 "
					layoutId={`title-container-${item.name}`}
				>
					<div className="flex items-baseline gap-2">
						<h1 className="font-medium text-2xl md:text-3xl">{item.name}</h1>
						<h3 className="text-[#0B1A28] font-medium text-sm md:text-lg opacity-60">
							{item.timeInCompany}
						</h3>
					</div>
					<h3 className="text-[#0B1A28] font-medium text-sm md:text-lg opacity-60">
						{item.role}
					</h3>

					{/* Badges */}
					<div className="flex flex-wrap gap-2 mb-6">
						{item.techUsed.map((badge) => {
							return (
								<div
									key={`card${item.name}${badge.name}`}
									style={{ backgroundColor: `${badge.color}1A` }}
									className={`mt-1 h-6 items-center flex gap-1 rounded-md px-3 py-1 w-fit`}
								>
									{badge.icon}
									<span
										className={`font-medium text-sm opacity-80`}
										style={{ color: badge.color }}
									>
										{badge.name}
									</span>
								</div>
							);
						})}
					</div>
				</motion.div>

				<motion.div animate>
					{item.description.map((p, idx) => {
						return (
							<p
								key={item.name + idx}
								className="text-base md:text-lg leading-7 mb-6 md:w-[33em]"
							>
								{p}
							</p>
						);
					})}

					<div className="h-8" />

					<div className="flex flex-wrap justify-center">
						{item.images.map((img, idx) => {
							return (
								<img
									key={item.name + idx + 'src'}
									src={img.src}
									className={`rounded-lg mb-6 ${
										img.type == 'mobile' && 'max-w-[250px]'
									} `}
								/>
							);
						})}
					</div>
				</motion.div>
			</motion.div>
		</motion.div>
	);
}
