import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';

const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            Passionate technologist, enthusiastic learner, strong communicator, and experienced leader. Excited to take on new opportunities and challanges. I have spent time building skills across several different software industries since I was young. I am at my best when trailblazing, and enjoy working as both a self-starter, a team member, and also as a mentor. While I focus myself as a developer, I love working with all parts of the software cycle: From management, to quality, to marketing, user experience, and all parts in between.
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Quality Engineer</h3>
              <div className="subheading mb-3">MicroStrategy</div>
                <ul>
                  <li>Architecting and executing performance tests focused on multiple core server components</li>
                  <li>Designing and executing automated stability, security, and functionality tests</li>
                  <li>Developing and maintaining security automation for inter-component RESTful communications</li>
                  <li>Maintaining existing testing infrastructure in company-wide CI/CD pipelines</li>
                </ul>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2019 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Student Researcher</h3>
              <div className="subheading mb-3">George Mason University</div>
                <ul>
                  <li>Research in Autonomous Vehicle Integration and Design, as well as modern vehicle safety</li>
                  <li>Designed and developed Open Dataset Labeling Software</li>
                  <li>Research and education in modern data mining techniques for vehicle classification</li>
                </ul>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">June 2018 - April 2019</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Aferschool Teacher, Lead</h3>
              <div className="subheading mb-3">STEM ExCEL</div>
                <ul>
                  <li>Teaching  children  in  grades  K-5  skills  in  computer  game  design,  and  programming,  and  electrical  engineering  skills</li>
                </ul>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">April 2016 - August 2018</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">George Mason University</h3>
              <div className="subheading mb-3">Bachelor of Science</div>
              <div>Computer Science B.S., Linguistics Minor</div>
              <p>GPA: 3.80</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2015 - May 2019</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">George C. Marshall High School</h3>
              <div className="subheading mb-3">International Baccalaureate Graduate</div>
              {/* <p>GPA: 3.40</p> */}
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2011 - May 2015</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            
            <li className="list-inline-item">
              <i className="fab fa-python"></i>
            </li>
            
            <li className="list-inline-item">
              <i className="icon-cplusplus"></i>
            </li>

            <li className="list-inline-item">
              <i className="icon-java-bold"></i>
            </li>

            <li className="list-inline-item">
              <i className="icon-rust"></i>
            </li>

            <li className="list-inline-item">
              <i className="icon-ruby"></i>
            </li>

            <li className="list-inline-item">
              <i className="fab fa-node"></i>
            </li>

            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>

            <li className="list-inline-item">
              <i className="icon-html5-alt"></i>
            </li>

            <li className="list-inline-item">
              <i className="icon-css3"></i>
            </li>

            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>

            <li className="list-inline-item">
              <i className="icon-jquery"></i>
            </li>
            
            <li className="list-inline-item">
              <i className="fab fa-jenkins"></i>
            </li>

            <li className="list-inline-item">
              <i className="fab fa-git"></i>
            </li>

            <li className="list-inline-item">
              <i className="icon-mongodb"></i>
            </li>

            <li className="list-inline-item">
              <i className="fab fa-aws"></i>
            </li>

            <li className="list-inline-item">
              <i className="icon-heroku"></i>
            </li>

            <li className="list-inline-item">
              <i className="icon-unity"></i>
            </li>

            {/* 
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
            */}
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Full Stack Web and Mobile Development, Responsive Design
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Continuous Integration and End-to-End Test Automation
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Functional Teams
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            {/* I have a variety of interests. You know that, I am a human person. What human person doesnt. */}
            Day to day, I make myself happy with gormet coffee, and keep myself sharp by running (usually about 3 miles a day).
            On my weekends I practice <a href="https://en.wikipedia.org/wiki/Capoeira">Capoeira</a>, and on my holidays I try to spend some time hiking.
          </p>
          <p className="mb-0">
            I keep myself up way too late at night working on side projects and reading about new things (that's right, outside of developing, one of my biggest passions is developing).
            In my highschool days I was a game developer. You can checkout some of my small-time projects on <a href="https://gamejolt.com/@ForgeStudios">Gamejolt</a>.
            Throughout my college days I loved attending hackathons, and many of my projects and awards are recorded on my <a href="https://devpost.com/mkeays">Devpost</a>.
            Now, I spend my time doing webdev, and I am working on <a href="https://gignote.io">GigNote</a>, a gig work for musicians, by musicians.
          </p>
          {/* <ul>
            <li>Coffee</li>
            <li>Engineering Electronics</li>
            <li>Side projects
              <ul>
                <li><a href="https://gignote.io">GigNote</a></li>
                <li><a href="https://devpost.com/mkeays">Devpost</a></li>
                <li><a href="https://gamejolt.com/@ForgeStudios">GameJolt</a></li>
              </ul>
            </li>
            <li>Linguistics</li>
            <li>Capoeira</li>
            <li>Running</li>
            <li>Hiking</li>
          </ul> */}
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Amazon Web Services Cloud Practitioner Certification
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place - Hackital 2019 - George Washington University
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>2<sup>nd</sup>
              Place - Disrupt the District 2017
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Facebook Prize Winner - Hackital 2017
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Wolfram Alpha Award - Medhacks 2017
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Best Internet Sourced Data App - Hackital 2016
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
