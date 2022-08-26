import AnimatedCard from "./animated-card";

const DUMMY_TEXT = [
  {
    title: "About",
    subtitle: "Hello I'm Hyojoon Park",
    text: "I'm a student developer at the University of Sydney, now living inSeoul, South Korea because of the COVID-19 outbreaks. Due to my current status, replacing my military service as a social service personnel, I have a lot of spare time to discover and dive into new cool stuffs (Frontend & Backend stacks) !",
  },
  {
    title: "Programming Skills",
    subtitle: "Python, Java & C",
    text: "Have learnt and written programs and/or algorithms using C and 2 Object-Oriented Languages(OOP): Java and Python throughout courses at the university",
  },
  {
    title: "Web Dev",
    subtitle: "React & Next JS",
    text: "Trying to write and build web applications using React and Next JS (A framework for React). This blog is the first React application that I build on my own, styling using Tailwind css for easy & fast modern design",
  },
  {
    title: "Interests",
    subtitle: "Framer Motion !",
    text: "You will be fascinated by animations implemented by 'Framer Motionr' libaray. This library makes React components look user-friendly and move dynamically !",
  },
];

function CardList() {
  return (
    <>
      {DUMMY_TEXT.map((card) => (
        <AnimatedCard
          key={card.title}
          title={card.title}
          subtitle={card.subtitle}
          text={card.text}
        />
      ))}
    </>
  );
}

export default CardList;
