import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectSection from "../sections/ProjectSection";
import Section from "../components/Section";
import HeroSection from "../components/Hero";
import Partners from "../sections/PartnerSection";

function Index() {
  return (
    <div>
      <Header>
        <HeroSection />
      </Header>
      <Section no_border={true} bs_classes={"mb--5"}>
        <div className={"row"}>
          <div className="col-lg-10 col-sm-12">
            <h1 className="title-q">Who are we?</h1>
            <br />
            <p className="fs-5">
              {" "}
              We are a community of programmers and tech enthusiasts.
              <br />
              This server centers around LeetCode, DSA and SDE interview
              preparation or just hanging out and chatting about tech. <br />
              We host daily LeetCode challenges and maintain open-source
              projects that anyone can contribute to.
              <br />
              <br />
            </p>
          </div>
        </div>
      </Section>
      <ProjectSection />
      <Partners />
      <Footer />
    </div>
  );
}

export default Index;
