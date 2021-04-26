import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Card from '../components/Card';
import ContactForm from '../components/ContactForm';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import { FaChargingStation } from '@react-icons/all-files/fa/FaChargingStation';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
import { FaSolarPanel } from '@react-icons/all-files/fa/FaSolarPanel';
import { FaHandshake } from '@react-icons/all-files/fa/FaHandshake';
import { RiHomeWifiFill } from 'react-icons/ri';

const Index = () => (
  <>
    <section id="top"></section>
    <Layout>
      <section className="grid container mx-auto text-center place-items-center ">
        <img
          src="https://i.imgur.com/FoIs05h.png"
          className="img-responsive img-centered"
          alt="Easy-Logo"
        ></img>
        <p className="text-primary-darker text-xl lg:text-2xl mt-6">
          <span className="text-primary font-semibold">EASY</span> provides organizations entry into
          a new world where sustainability is not just a word it is a call to action.{' '}
          <span className="text-primary font-semibold">EASY</span> will work with{' '}
          <span className="text-primary font-semibold">YOUR</span> Organization to bring you into
          the space and reduce the cost of entry or your tuition into this burgeoning world of
          opportunity.
        </p>
        <h1 className="text-primary font-semibold text-lg mt-2">
          If you want to make this world a more sustainable ecosystem and you are at a loss on how
          to do so, then EASY is your answer.
        </h1>
        <p className="mt-8 md:mt-12">
          <AnchorLink className="p-4 bg-primary rounded-md text-white" href="#contact">
            Get Started
          </AnchorLink>
        </p>
        <p className="mt-8 text-gray-600">
          Our passion drives our purpose to make the world a better place.
        </p>
      </section>

      <SplitSection
        id="services"
        primarySlot={
          <div className="lg:pr-32 xl:pr-48 mt-4">
            <h3 className="text-3xl text-primary-darker font-semibold leading-tight">
              Market Expertise
            </h3>
            <p className="mt-8 text-xl text-primary light leading-relaxed">
              Clean Energy is the solution to many of the Climate Change problems plaguing our
              world. EASY has access to everything you need to deploy or enter and succeed in this
              blossoming industry.
            </p>
          </div>
        }
        secondarySlot={
          <>
            <img src="https://i.imgur.com/6w8aLaF.png" alt="energy infrastructure"></img>
          </>
        }
      />

      <SplitSection
        reverseOrder
        primarySlot={
          <div className="lg:pl-32 xl:pl-48">
            <h3 className="text-primary-darker text-3xl font-semibold leading-tight">
              Design And Plan Your Business Growth Steps
            </h3>
            <p className="text-primary mt-8 text-lg lg:text-xl leading-relaxed">
              Hardware and software solutions for EV Charging infrastructure. Supporting resilience
              programs and Micro-Grids through Energy Storage Systems (ESS). Deployment, and
              connections to the vehicle manufacturers and many solutions coming to market. Final
              and last mile delivery as well as transit systems and the need for all Fleets to do a
              review of existing rolling assets and how to move forward into an Ecosystem of
              Electrification.
            </p>
          </div>
        }
        secondarySlot={
          <div className="grid grid-cols-3 grid-flow-col lg:gap-x-32">
            <FaChargingStation className="h-16 w-16 lg:h-48 lg:w-48" fill="#C62F14" />
            <FaSolarPanel className="h-16 w-16 lg:h-48 lg:w-48" fill="#1a1a1a" />
            <RiHomeWifiFill className="h-16 w-16 lg:h-48 lg:w-48" fill="#C62F14" />
          </div>
        }
      />

      <SplitSection
        primarySlot={
          <div className="lg:pr-32 xl:pr-48">
            <h3 className="text-primary-darker text-3xl font-semibold leading-tight">
              Win + Win + Win = Success
            </h3>
            <p className="text-primary mt-8 text-xl leading-relaxed">
              Each stage of the work that we take on MUST be a plus for everyone engaged otherwise
              we will not participate. We are committed to being transparent with all the
              constituents whom we are engaged by in the global market.
            </p>
            <h3 className="text-primary-darker text-xl font-semibold leading-tight mt-8">
              Our Focus is on a Regenerative World of Opportunity.
            </h3>
          </div>
        }
        secondarySlot={
          <div className="text-3xl">
            <FaHandshake className="hidden lg:grid lg:place-items-center lg:h-48 lg:w-48" />
          </div>
        }
      />

      <section id="stats" className="py-4 lg:pt-32">
        <div className="container mx-auto text-center">
          <LabelText className="text-primary">Experienced Collaborators</LabelText>
          <div className="text-primary-darker font-semibold mt-2">
            Having been in the world of Sustainability for a collective means we have worked with
            many companies and so let us have some fun and start with the most recent and make our
            way back to the early days.{' '}
          </div>
          <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
            <div className="w-full sm:w-1/3">
              <StatsBox primaryText="1000+" secondaryText="Customers" />
            </div>
            <div className="w-full sm:w-1/3">
              <StatsBox primaryText="615" secondaryText="Partners" />
            </div>
            <div className="w-full sm:w-1/3">
              <StatsBox primaryText="2" secondaryText="Countries" />
            </div>
          </div>
        </div>
        <section id="testimonials" className="py-6 lg:py-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-4 md:-mx-3">
              {customerData.map((customer) => (
                <div key={customer.id} className="flex-1 px-3">
                  <CustomerCard customer={customer} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
      <section id="people" className="py-12 lg:pb-40 lg:pt-48">
        <Card />
      </section>

      <section className="container mx-auto mt-10 rounded-lg text-center" id="contact">
        <h3 className="text-5xl font-semibold">Ready to grow your business?</h3>
        <p className="mt-8 text-xl font-light">
          Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque fermentum dui faucibus
          in.
        </p>
        <ContactForm />
      </section>
    </Layout>
  </>
);

export default Index;
