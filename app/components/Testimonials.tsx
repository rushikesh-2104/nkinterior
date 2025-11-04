import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'
import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Komal Kadu completely transformed our space into something beyond our imagination. Every corner reflects elegance and thoughtful design. Truly a masterpiece of creativity.",
      name: "Kalpesh Yadhav",
      designation: "Homeowner",
      location: "Mumbai, India",
      rating: 5,
      src: "/testimonial1.png",
    },
    {
      quote:
        "From concept to completion, Komal’s attention to detail was remarkable. The interiors are both functional and visually stunning—everyone who visits compliments the design.",
      name: "Rajesh Kumar",
      designation: "Software Engineer",
      location: "Bangalore, India",
      rating: 5,
      src: "/testinomial2.png",
    },
    {
      quote:
        "Our office makeover by Komal Kadu has completely changed the work environment. The space now feels fresh, inspiring, and perfectly planned for productivity.",
      name: "Anant Patil",
      designation: "Marketing Head, CreativeCorp",
      location: "Delhi, India",
      rating: 5,
      src: "/testimonial5.png",
    },
    {
      quote:
        "Komal’s work blends style and comfort beautifully. The interiors reflect a perfect balance of color, texture, and modern design—she truly understands her client’s vision.",
      name: "Poorva Joshi",
      designation: "Entrepreneur",
      location: "Pune, India",
      rating: 5,
      src: "/testimonial4.png",
    },
    {
      quote:
        "Working with Komal Kadu was an absolute delight. Her creative approach and design sense transformed our house into a dream home. Highly professional and talented!",
      name: "Shreenidhi Iyer",
      designation: "Operations Manager",
      location: "Mumbai, India",
      rating: 5,
      src: "/testinomial3.png",
    },
  ]
  
  return (
    <div>
      <AnimatedTestimonials autoplay={true} testimonials={testimonials} />
    </div>
  )
}

export default Testimonials
