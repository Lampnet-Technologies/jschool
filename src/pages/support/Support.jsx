import React from "react";
import Banner from "../../components/banner/Banner";
import BannerImage from "../../assets/images/support-banner.svg";
import CallToAction from "../../components/call-to-action/CallToAction";
import "./Support.css";
import Footer from "../../components/Footer";

export default function Support() {
  return (
    <div>
      <div className="support pages">
        <Banner image={BannerImage} title="Support Learning" />
        <div className="support-content">
          <p className="banner-text">
            At JSchool, we implement various learning support strategies to meet
            the diverse needs of students. Here are some examples:
          </p>
          <div className="support-text">
            <h4>Individualized Education Plans (IEPs):</h4>
            <p>
              For students with specific learning needs or disabilities, IEPs
              can be developed in collaboration with teachers, parents, and
              support staff. These plans outline specific goals, accommodations,
              and modifications to meet the unique learning requirements of each
              student.
            </p>
          </div>

          <div className="support-text">
            <h4>Small Group Instruction:</h4>
            <p>
              Small group instruction allows teachers to provide targeted
              support to students who require additional assistance. This
              approach allows for personalized attention, peer collaboration,
              and the opportunity to address specific learning gaps or
              challenges.
            </p>
          </div>

          <div className="support-text">
            <h4>Learning Support Programs:</h4>
            <p>
              Implementing dedicated learning support programs or interventions
              can provide targeted assistance for students who require
              additional academic support. These programs can focus on areas
              such as literacy, numeracy, study skills, or executive
              functioning, providing specialized instruction and resources.
            </p>
          </div>

          <div className="support-text">
            <h4>Assistive Technologies:</h4>
            <p>
              Technology can play a significant role in supporting students with
              learning difficulties. Assistive technologies such as
              text-to-speech software, speech recognition tools, graphic
              organizers, and digital learning platforms can help enhance
              accessibility, promote independence, and facilitate learning for
              students with diverse needs.
            </p>
          </div>

          <div className="support-text">
            <h4>Study Skills and Organization Workshops:</h4>
            <p>
              Offering workshops or courses focused on study skills, time
              management, organization, and effective learning strategies can
              empower students to become independent learners. These workshops
              can provide techniques for note-taking, test preparation,
              goal-setting, and self-regulation.
            </p>
          </div>

          <div className="support-text">
            <h4>Peer Tutoring or Monitoring Programs:</h4>
            <p>
              Peer tutoring or mentoring programs can be established where older
              students support younger students or peers in need of academic
              assistance. This not only enhances academic understanding but also
              fosters a sense of community and promotes positive relationships
              among students.
            </p>
          </div>

          <div className="support-text">
            <h4>Counseling and Emotional Support:</h4>
            <p>
              Providing access to counseling services can support students'
              emotional well-being, mental health, and overall learning
              readiness. School counselors can offer guidance, coping
              strategies, and interventions to address emotional and social
              challenges that may impact students' academic progress.
            </p>
          </div>

          <div className="support-text">
            <h4>Collaboration and Professional Development:</h4>
            <p>
              Encouraging collaboration among teachers, support staff, and
              specialists promotes the sharing of best practices, expertise, and
              resources. Professional development opportunities focused on
              inclusive education, differentiated instruction, and understanding
              diverse learning needs can further enhance teachers' capacity to
              support students effectively.
            </p>
          </div>
        </div>
        <CallToAction />
        <br /> <br />
        <Footer />
      </div>
    </div>
  );
}
