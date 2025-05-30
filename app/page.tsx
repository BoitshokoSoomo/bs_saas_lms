import React from 'react'
import {Button} from "@/components/ui/button";
import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>
        <section className="home-section">
            <CompanionCard
                id="123"
                name="Neura the brainy explorer"
                topic="Neural Network of the Brain"
                subject="science"
                duration={46}
                color="#E5D0FF"
            />
            <CompanionCard
                id="456"
                name="Countsy the number wizard"
                topic="Derivatives & Integrals"
                subject="Maths"
                duration={45}
                color="#ffda6e"
            />
            <CompanionCard
                id="789"
                name="Verba the vocabulary builder"
                topic="language"
                subject="English Literature"
                duration={30}
                color="#BDE7FF"
            />
        </section>

        <section className="home-section">
            <CompanionsList />
            <CTA />
        </section>
    </main>
  )
}

export default Page