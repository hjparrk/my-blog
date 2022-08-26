import { motion } from "framer-motion";
import CustomCard from "../../ui/card";

function AnimatedCard({ title, subtitle, text }) {
  return (
    <motion.div whileHover={{ scale: 1.1 }}>
      <CustomCard title={title} subtitle={subtitle}>
        {text}
      </CustomCard>
    </motion.div>
  );
}

export default AnimatedCard;
