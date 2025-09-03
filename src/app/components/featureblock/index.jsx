import styles from "./featureblock.module.css";
import Image from "next/image";

export default function Feature() {
  return (
    <section>
      {/* 1️⃣ Section image */}
      <div>
        <Image
          src="/asset.png"
          alt="World Supercomputer visualization"
          width={586}
          height={586}
          className={styles.assetImage}
        />
      </div>

      {/* 2️⃣ Most outer wrapper */}
      <div>
        {/* Header and button container */}
        <div>
          <div>
            <h2>
              A World <br /> Supercomputer
            </h2>
            <h3>/ THE NEXUS LAYER 1</h3>
          </div>

          <Image
            src="/circle.png"
            alt="circle with a cross"
            width={16}
            height={16}
            className={styles.circleImage}
          />
        </div>

        {/* Description + buttons */}
        <div>
          <p>
            Nexus is a new kind of Layer 1 blockchain — purpose-built for the AI
            era. It&apos;s verifiable. Exponentially scalable. Built for agents.
            And open to anyone.
          </p>
          <div>
            <button>
              Button Name <span>→</span>
            </button>
            <button>
              Button Name <span>→</span>
            </button>
          </div>
        </div>

        {/* List Section */}
        <div>
          <ul>
            <li>
              <div>
                <p>Horizontally + vertically scalable</p>
              </div>
              <div>
                <p>
                  The Nexus Layer 1 is EVM-compatible and optimized for
                  verifiable compute. Use Rust or Solidity to deploy
                  applications that invoke zk-proven computation or power
                  agentic services.
                </p>
                <Image
                  src="/discord.png"
                  alt="circle with a cross"
                  width={18}
                  height={18}
                  className={styles.discordImage}
                />
              </div>
            </li>
            <li>
              {" "}
              <div>
                <p>Horizontally + vertically scalable</p>
              </div>
              <div>
                <p>
                  The Nexus Layer 1 is EVM-compatible and optimized for
                  verifiable compute. Use Rust or Solidity to deploy
                  applications that invoke zk-proven computation or power
                  agentic services.
                </p>
                <Image
                  src="/discord.png"
                  alt="circle with a cross"
                  width={18}
                  height={18}
                  className={styles.discordImage}
                />
              </div>
            </li>
            <li>
              {" "}
              <div>
                <p>Horizontally + vertically scalable</p>
              </div>
              <div>
                <p>
                  The Nexus Layer 1 is EVM-compatible and optimized for
                  verifiable compute. Use Rust or Solidity to deploy
                  applications that invoke zk-proven computation or power
                  agentic services.
                </p>
                <Image
                  src="/discord.png"
                  alt="circle with a cross"
                  width={18}
                  height={18}
                  className={styles.discordImage}
                />
              </div>
            </li>
            <li>
              {" "}
              <div>
                <p>Horizontally + vertically scalable</p>
              </div>
              <div>
                <p>
                  The Nexus Layer 1 is EVM-compatible and optimized for
                  verifiable compute. Use Rust or Solidity to deploy
                  applications that invoke zk-proven computation or power
                  agentic services.
                </p>
                <Image
                  src="/discord.png"
                  alt="circle with a cross"
                  width={18}
                  height={18}
                  className={styles.discordImage}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
