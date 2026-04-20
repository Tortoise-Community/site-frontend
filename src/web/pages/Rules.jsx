import React from "react";
import Header from "../components/Header";
import Section from "../components/Section";
import Footer from "../components/Footer";

export default function Rules() {
  return (
    <div>
      <Header />
      <Section title={"Rules"} bs_classes={"pb-3"}>
        <p style={style.paragraph}>
          All members of the community are required to follow the rules listed
          below. Failure to comply may result in appropriate action taken by the
          moderation team.
        </p>
        <ol>
          <li>
            Follow the Discord Community Guidelines and Terms of Service at all
            times.
          </li>
          <li>
            Do not use racial, homophobic, or transphobic slurs, or any form of
            abusive language. Treat all members and staff with respect.
          </li>
          <li>
            Unapproved advertising is not allowed. You may showcase projects in
            #project-showcase.
          </li>
          <li>
            Do not spam or use automated accounts (self-bots) within the server.
            Suspected accounts would be immedately banned without notice.
          </li>
          <li>
            Do not attempt to mention <span style={style.span}>@everyone</span>,{" "}
            <span style={style.span}>@here</span> or unnecessarily ping members
            or roles. Avoid pinging users who are not involved in the current
            discussion unless you have their permission.
          </li>
          <li>
            Do not mention staff unless it is an emergency or a serious rule
            violation. For questions or reports, use Mod Mail by messaging
            <span style={style.span}>@Tortoise Bot</span>.
          </li>
          <li>
            Keep discussions relevant to their respective channels. Do not post
            questions in general chat; use the designated help/discussion
            channels instead.
          </li>
          <li>
            NSFW content is <b>not allowed</b>. Posting such content will result
            in an immediate and non-appealable ban.
          </li>
          <li>
            Do not send direct messages to members without their prior consent.
          </li>
        </ol>
      </Section>

      <Section title={"Infractions"} bs_classes={"pt-0 pb-5"}>
        <p style={style.paragraph}>
          The community enforces a range of infractions based on the severity of
          rule violations. Moderators determine the appropriate action in each
          case.
        </p>
        <ol>
          <li>Formal verbal warning.</li>
          <li>Short-term temporary timeout.</li>
          <li>Long-term temporary timeout.</li>
          <li>Short-term temporary ban from the server.</li>
          <li>Long-term temporary ban from the server.</li>
          <li>Permanent ban from the server and all associated services.</li>
        </ol>
      </Section>
      <Footer />
    </div>
  );
}

const style = {
  paragraph: {
    fontSize: 17,
    fontFamily: "Montserrat, san-serif",
  },
  span: {
    color: "#000",
    fontWeight: "bold",
  },
};
