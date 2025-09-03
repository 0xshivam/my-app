import styles from "./featureblock.module.css";
import Image from "next/image";

export default function Feature() {
  return (
    <>
      <section className={styles.assetSection}>
        <div className={styles.imageContainer}>
          <Image
            src="/asset.png"
            alt="World Supercomputer visualization"
            width={586}
            height={586}
            className={styles.assetImage}
          />
        </div>
      </section>

      <div className={styles.mainContainer}>
        <header>
          <h2>
            A World <br />
            <span>Supercomputer</span>
          </h2>
          <h3>/ The Nexus Layer 1</h3>
          <Image
            src="/circle.png"
            alt="circle with the cross"
            width={16}
            height={16}
            className={styles.circleImage}
          />

          <div>
            <p>
              Nexus is a new kind of Layer 1 blockchain — purpose-built for the
              AI era. It’s verifiable. Exponentially scalable. Built for agents.
              And open to anyone.
            </p>
          </div>
          <div>
            <button>
              <span>Button Name</span>
              <span>→</span>
            </button>
            <button>
              <span>Button Name</span>
              <span>→</span>
            </button>
          </div>
        </header>
        <main>
          <div>
            <div>
              <h4>Horizontally + vertically scalable</h4>
            </div>
            <div>
              <p>
                The Nexus Layer 1 is EVM-compatible and optimized for verifiable
                compute. Use Rust or Solidity to deploy applications that invoke
                zk-proven computation or power agentic services.
              </p>
              <div>
                <Image
                  src="/discord.png"
                  alt="discord icon"
                  width={18}
                  height={18}
                  // className={styles.discordImage}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
