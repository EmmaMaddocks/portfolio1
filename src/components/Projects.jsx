import { Box, Typography } from "@mui/material";
import { motion, useTransform } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-cool-inview";
import Css3PlainWordmark from "react-devicons/css3/plain-wordmark";
import Html5Original from "react-devicons/html5/original";
import IllustratorPlain from "react-devicons/illustrator/plain";
import JestPlain from "react-devicons/jest/plain";
import JavascriptPlain from "react-devicons/javascript/plain";
import MaterialuiPlain from "react-devicons/materialui/plain";
import NodejsPlain from "react-devicons/nodejs/plain";
import NpmOriginalWordmark from "react-devicons/npm/original-wordmark";
import PhotoshopPlain from "react-devicons/photoshop/plain";
import PostgresqlPlain from "react-devicons/postgresql/plain";
import ReactOriginal from "react-devicons/react/original";
import VscodeOriginal from "react-devicons/vscode/original";
import YarnOriginal from "react-devicons/yarn/original";
import MicrosoftsqlserverPlain from "react-devicons/microsoftsqlserver/plain";
import {
	Css3OriginalIcon,
	IllustratorPlainIcon,
	JavascriptOriginalIcon,
	JestPlainIcon,
	MaterialuiOriginalIcon,
	NodejsOriginalIcon,
	PhotoshopPlainIcon,
	PostgresqlOriginalIcon,
} from "react-devicons";

const Projects = ({ page, setPage }) => {
	const [visibleState, setVisibleState] = useState("initial");

	const { ref, inView, scrollDirection, entry, observe, unobserve } = useInView(
		{
			threshold: 0.18, // Default is 0
			onChange: ({
				inView,
				scrollDirection,
				entry,
				observe,
				unobserve,
				threshold,
			}) => {
				// If you wanted to apply more states at more steps:
				// if (entry.isIntersecting === true && entry.intersectionRatio < 0.15) {
				//   setVisibleState("partial");
				// } else if (
				//   entry.isIntersecting === true && entry.intersectionRatio > 0.3
				// ) {
				//   setVisibleState("visible");
				// }
			},
			onEnter: ({ scrollDirection, entry, observe, unobserve }) => {
				console.log("visible");
				setPage("projects");

				setVisibleState("visible");
			},
			onLeave: ({ scrollDirection, entry, observe, unobserve }) => {
				console.log("invisible");
				setVisibleState("initial");
			},
		}
	);

	const sectionVariants = {
		// initial: {
		// 	opacity: 0.25,
		// 	scale: 0.9,
		// 	y: 40,
		// 	transition: {
		// 		type: "spring",
		// 		duration: 0.8,
		// 	},
		// },
		// visible: {
		// 	opacity: 1,
		// 	scale: 1,
		// 	y: 0,
		// 	transition: {
		// 		type: "spring",
		// 		duration: 0.8,
		// 	},
		// },
		initial: {
			y: 100,
			opacity: 0,
			transition: {
				type: "spring",
				mass: 1,
				damping: 10,
				stiffness: 80,
			},
		},
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				type: "spring",
				mass: 1,
				damping: 10,
				stiffness: 80,
			},
		},
	};

	return (
		<Box className="container" id="projects">
			<Typography
				component={motion.h1}
				ref={observe}
				initial="initial"
				variants={sectionVariants}
				animate={visibleState}
				sx={{
					fontSize: 80,
					fontFamily: "Playfair Display",
					alignSelf: "flex-start",
				}}
				variant="h1"
			>
				Skills
			</Typography>
			<Box
				sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 6 }}
			>
				<ReactOriginal size="5em" />

				<Css3OriginalIcon size="5em" />
				<Html5Original size="5em" />
				<JestPlain size="5em" />
				<JavascriptOriginalIcon size="5em" />
				<MaterialuiOriginalIcon size="5em" />
				<NpmOriginalWordmark size="5em" />
				<YarnOriginal size="5em" />
				<VscodeOriginal size="5em" />
				<PostgresqlOriginalIcon size="5em" />
				<NodejsOriginalIcon size="5em" />
				<IllustratorPlain size="5em" />
				<PhotoshopPlainIcon size="5em" />
			</Box>
		</Box>
	);
};

export default Projects;
