import { HashLink } from "react-router-hash-link";
import { motion, useTransform } from "framer-motion";
import { useState } from "react";

const Nav = ({ page, setPage }) => {
	const [isColumn, setIsColumn] = useState(window.innerWidth <= 715);

	return (
		<nav className="nav">
			<ul className="nav-links">
				{/* <motion.li
					animate={{
						x: 0,
						y: 0,
						opacity: 1,
						// transition: {delay: (i + 1) / 10},
					}}
					initial={{
						x: isColumn ? 1000 : 0,
						y: isColumn ? 0 : 1000,
						opacity: 0,
					}}
					exit={{
						x: isColumn ? -1000 : 0,
						y: isColumn ? 0 : -1000,
						opacity: 0,
						// transition: {delay: itemtransition[i]},
					}}
				> */}
				<HashLink smooth to="#home">
					Home
				</HashLink>
				{/* </motion.li> */}
				<li>
					<HashLink smooth to="#about">
						About
					</HashLink>
				</li>
				<li>
					<HashLink smooth to="#experience">
						Experience
					</HashLink>
				</li>
				<li>
					<HashLink smooth to="#projects">
						Skills
					</HashLink>
				</li>
				<li>
					<HashLink smooth to="#contact">
						Contact
					</HashLink>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
