"use client";
import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronLeft,
	faChevronRight,
	faStar,
	faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

interface Author {
	fullName: string;
	picture: string;
	designation: string;
}

interface Testimonial {
	author: Author;
	rating: number;
	description: string;
}

const testimonialList: Testimonial[] = [
	{
		author: {
			fullName: "Ankita Nath",
			picture: "https://cdn.easyfrontend.com/pictures/users/user3.jpg",
			designation: "Founder / CEO",
		},
		rating: 3.5,
		description:
			"Komal’s work blends style and comfort beautifully. The interiors reflect a perfect balance of color, texture, and modern design—she truly understands her client’s vision...",
	},
	{
		author: {
			fullName: "Raima Sen",
			picture:
				"https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_2.jpeg",
			designation: "Founder / CEO",
		},
		rating: 4,
		description:
			"Our office makeover by Komal Kadu has completely changed the work environment. The space now feels fresh, inspiring, and perfectly planned for productivity...",
	},
	{
		author: {
			fullName: "Arjun Kapur",
			picture:
				"https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_3.jpeg",
			designation: "Founder / CEO",
		},
		rating: 5,
		description:
			"Komal Kadu completely transformed our space into something beyond our imagination. Every corner reflects elegance and thoughtful design. Truly a masterpiece of creativity...",
	},
];

interface RatingProps extends React.HTMLAttributes<HTMLParagraphElement> {
	rating: number;
	showLabel?: boolean;
	className?: string;
}

const Rating: React.FC<RatingProps> = ({ rating, showLabel, className, ...rest }) => (
	<p className={classNames("mb-6", className)} {...rest}>
		<span>
			{[...Array(5)].map((_, i) => {
				const index = i + 1;
				let content: React.ReactNode = null;
				if (index <= Math.floor(rating)) {
					content = <FontAwesomeIcon icon={faStar} className="text-yellow-500" />;
				} else if (rating > i && rating < index + 1) {
					content = (
						<FontAwesomeIcon icon={faStarHalfAlt} className="text-yellow-500" />
					);
				} else if (index > rating) {
					content = (
						<FontAwesomeIcon
							icon={faStar}
							className="text-yellow-200 dark:text-opacity-20"
						/>
					);
				}
				return <Fragment key={i}>{content}</Fragment>;
			})}
		</span>
		{showLabel && <span>{rating.toFixed(1)}</span>}
	</p>
);

const Testimonial12: React.FC = () => {
	const [index, setIndex] = useState<number>(0);
	const { author, description, rating } = testimonialList[index];

	const handleControl = (type: "prev" | "next") => {
		if (type === "prev") {
			setIndex(index <= 0 ? testimonialList.length - 1 : index - 1);
		} else if (type === "next") {
			setIndex(index >= testimonialList.length - 1 ? 0 : index + 1);
		}
	};

	return (
		<section className="ezy__testimonial12 light relative py-14 md:py-24 bg-gray-50 dark:bg-[#0b1727] text-zinc-900 dark:text-white z-[1]">
			<div className="container px-4 mx-auto">
				<div className="flex justify-center text-center mb-6 lg:mb-12">
					<div className="">
						<h2 className="text-5xl md:text-6xl font-serif text-gray-800 mb-12">
							Community Reviews
						</h2>
                        <p className="mb-2 text-lg font-medium text-gray-600 text-center">Hear what our clients have to say about their design journey — where every space we create tells a story of comfort, beauty, and craftsmanship.</p>
					</div>
				</div>

				<div className="flex justify-center mt-6">
					<div className="lg:max-w-5xl">
						<div className="flex flex-col md:flex-row gap-y-6 md:gap-x-6">
							<div className="md:w-1/2 md:py-12">
								<div
									className="bg-center bg-no-repeat bg-cover rounded-xl h-full min-h-[450px] object-cover"
									style={{
										backgroundImage: `url(${author.picture})`,
									}}
								></div>
							</div>
							<div className="md:w-1/2 relative">
								<div className="absolute -top-[10%] md:top-0 right-0 left-0 md:-left-[20%] bottom-0 bg-gray-200 dark:bg-slate-800 -z-[1] rounded-xl shadow-md"></div>
								<div className="flex flex-col justify-center h-full mb-10 md:mb-0">
									<div className="p-6 lg:py-16 mb-6">
										<h4 className="text-2xl font-bold mb-4">
											{author.fullName}
										</h4>
										<Rating rating={rating} showLabel={false} />
										<p className="opacity-75">{description}</p>
									</div>
									<div className="px-6 lg:px-12 text-end">
										<button
											className="w-10 h-10 text-[12px] bg-transparent border border-slate-400 dark:border-slate-600 rounded-full inline-flex items-center justify-center duration-150 hover:bg-slate-400 hover:text-slate-800 dark:hover:bg-slate-700 dark:hover:text-slate-200 mr-3"
											onClick={() => handleControl("prev")}
										>
											<FontAwesomeIcon icon={faChevronLeft} />
										</button>
										<button
											className="w-10 h-10 text-[12px] bg-transparent border border-slate-400 dark:border-slate-600 rounded-full inline-flex items-center justify-center duration-150 hover:bg-slate-400 hover:text-slate-800 dark:hover:bg-slate-700 dark:hover:text-slate-200"
											onClick={() => handleControl("next")}
										>
											<FontAwesomeIcon icon={faChevronRight} />
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonial12;
