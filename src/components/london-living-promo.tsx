import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styles from "./london-living-promo.module.scss"
import LondonLivingLogo from "../content/londonliving/LL_logo.inline.svg"
import Section from "./section"

const LondonLivingPromo = () => {
    const data = useStaticQuery<GatsbyTypes.LondonLivingPromoQuery>(graphql`
        query LondonLivingPromo {
            londonLiving: markdownRemark(
                fileAbsolutePath: { regex: "/_events/londonliving.md$/" }
            ) {
                html
            }
        }
    `)

    return (
        <Section
            colorScheme="custom"
            className={styles.londonLivingPromo}
            full-bleed
        >
            <div>
                <div className={styles.header}>
                    <LondonLivingLogo />
                </div>
                <div
                    className={styles.text}
                    dangerouslySetInnerHTML={{
                        __html: data.londonLiving!.html!,
                    }}
                />
                <div className={styles.buttons}>
                    <a className={styles.button} href="/londonliving">
                        Learn More
                    </a>
                </div>
            </div>
        </Section>
    )
}

export default LondonLivingPromo
