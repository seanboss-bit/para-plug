"use client";
import styles from "../src/styles/category.module.css";
import { motion } from "framer-motion";

const Category = () => {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };
  const item = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: { ease: "easeIn", duration: 1 },
    },
  };
  return (
    <div>
      <div className="container">
        <motion.div
          className={styles.allslides}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div className={styles.firstslide} variants={item}>
            <div className={styles.content}>
              <h3>Nike SB X Powerpuff Girls</h3>
              <p>
                Sugar, Spice, and Everything Nice: The Nike SB Dunk Low
                Powerpuff Girls Collection Straight outta Townsville, the
                Powerpuff Girls are taking over your kicks!Imagine choosing your
                favorite heroine: Blossom's vibrant pink and yellow pops,
                Bubbles' sweet blue and yellow hues, or Buttercup's fiery green
                and yellow combo. Each shoe boasts iconic details from the show
                – think laser eyes on the heel, Professor Utonium's face on the
                insole, and a textured upper that's tough enough to fight crime
                (or tackle any skate session) This collection isn't just
                playful; it's a celebration of female power and the spirit of
                saving the world before bedtime.
              </p>
              <a href="/store">shop now</a>
            </div>
          </motion.div>
          <motion.div variants={item} className={styles.secondslide}>
            <div className={styles.content}>
              <h3>Nike x Corteiz Air Max 95 SP Gutta Green</h3>
              <p>
                Born on the Streets of London: The Nike Air Max 95 SP x Corteiz
                The cobblestones of London birthed a legend. The Nike Air Max 95
                SP x Corteiz is a love letter to the city's vibrant street
                culture. This silhouette blends the iconic Air Max 95's
                revolutionary cushioning with the rugged aesthetic of the
                Corteiz. Imagine the pops of yellow against the
                military-inspired green upper, a nod to the city's iconic taxis
                and parks. The Corteiz "C" logo on the toe pays homage to its
                streetwise heritage. With every step, feel the comfort of
                visible Air units and the legacy of London's bold style. This
                isn't just a sneaker; it's a piece of London's story, ready to
                walk with you on your next urban adventure.
              </p>
              <a href="/store">shop now</a>
            </div>
          </motion.div>
          <motion.div variants={item} className={styles.thirdslide}>
            <div className={styles.content}>
              <h3>Nike x Nocta Glide White chrome</h3>
              <p>
                The Nike x NOCTA Glide White Chrome Drake's love for the game
                and clean style infuse every element of the Nike x NOCTA Glide
                White Chrome. This shoe transcends a simple collaboration – it's
                a statement piece inspired by theOVO boss himself. Imagine a
                pristine white upper, crafted from breathable mesh, a canvas for
                your next hustle. The chrome accents on the midsole and heel add
                a touch of luxury, echoing Drake's penchant for elevating the
                ordinary. Inspired by the Zoom Flight 95's legacy, the Nike x
                NOCTA Glide White Chrome delivers the perfect blend of comfort
                and performance. Whether you're chasing dreams or conquering
                errands, this shoe moves with you.
              </p>
              <a href="/store">shop now</a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Category;
