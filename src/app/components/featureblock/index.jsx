import clsx from "clsx";
import styles from "./featureblock.module.css";
import Image from "next/image";

function Svg() {
  return (
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 0.515625L17.4853 9.00091L9 17.4862" stroke="black" />
      <path d="M0.514719 9.00091H17.4853" stroke="black" />
    </svg>
  );
}
export default function Feature() {
  return (
    <section className={styles.featureSection}>
      {/* Left Section - Image */}
      <picture className={styles.leftImageWrapper}>
        <Image
          src="/asset.png"
          alt="World Supercomputer visualization"
          width={586}
          height={586}
          className={styles.assetImage}
        />
      </picture>

      {/* Right Section - Content */}
      <div className={styles.rightContent}>
        {/* Header */}
        <div className={styles.headerWrapper}>
          <div>
            <h2 className={styles.heading}>
              A World <br />
              <span className={styles.supercomputer}>Supercomputer</span>
            </h2>
            <p className={styles.subHeading}>/ THE NEXUS LAYER 1</p>
          </div>

          <picture className={styles.circleWrappper}>
            <Image
              src="/circle.png"
              alt="circle with a cross"
              width={16}
              height={16}
              className={styles.circleImage}
            />
          </picture>

          {/* Description + Buttons */}
          <div className={styles.descriptionWrapper}>
            <p className={styles.description}>
              Nexus is a new kind of Layer 1 blockchain — purpose-built for the
              AI era. It&apos;s verifiable. Exponentially scalable. Built for
              agents. And <br />
              open to anyone.
            </p>
            <div className={styles.buttonGroup}>
              <button className={styles.primaryBtn}>
                Button Name
                <span className={styles.arrowone}>
                  <Svg />
                </span>
              </button>
              <button className={styles.secondaryBtn}>
                Button Name{" "}
                <span className={styles.arrowtwo}>
                  <Svg />
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* Features List */}
        <ul className={styles.featureList}>
          {[1, 2, 3, 4].map((item, index) => (
            <li key={index} className={styles.featureItem}>
              <p className={styles.featureTitle}>
                Horizontally + vertically scalable
              </p>
              <div className={styles.featureDetails}>
                <p>
                  The Nexus Layer 1 is EVM-compatible and optimized for
                  verifiable compute. Use Rust or Solidity to deploy
                  applications that invoke zk-proven computation or power
                  agentic services.
                </p>
                <Image
                  src="/discord.png"
                  alt="Discord icon"
                  width={18}
                  height={18}
                  className={styles.discordImage}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
