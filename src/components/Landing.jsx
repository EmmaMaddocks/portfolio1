import {Box, Typography} from "@mui/material";
import {motion, useTransform} from "framer-motion";

const Landing = () => {
	const titleWrapperVariants = {
		initial: {
			opacity: 1,
		},
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.25,
			},
		},
	};

	const titleVariants = {
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
		<Box
			// id="About"
			className="container"
			id="home"
			component={motion.div}
			// className="title"
			variants={titleWrapperVariants}
			animate="visible"
			initial="initial"
		>
			<Typography
				component={motion.div}
				variants={titleVariants}
				sx={{
					fontSize: 80,
					fontFamily: "Playfair Display",
					alignSelf: "flex-start",
				}}
				variant="h1"
			>
				Emma Maddocks
			</Typography>
			<Typography
				sx={{fontSize: 20, fontFamily: "DM Sans"}}
				component={motion.div}
				variants={titleVariants}
			>
				A software engineer passionate about solving problems and creating
				delightful user experiences. <br></br>Currently working full-time as a
				Junior Software Engineer at GS Systems
			</Typography>
		</Box>
	);
};

export default Landing;
