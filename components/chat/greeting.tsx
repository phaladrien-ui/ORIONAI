import { motion } from "framer-motion";

export const Greeting = () => {
  return (
    <div className="flex flex-col items-center px-4" key="overview">
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
        initial={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.35, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          Hello 👋 i'm Orion.
        </h1>
        <p className="mt-3 text-base text-muted-foreground md:text-lg">
          How can I help you today?
        </p>
      </motion.div>
    </div>
  );
};
