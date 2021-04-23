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
import SvgCharts from '../svg/SvgCharts';
import { FaChargingStation } from '@react-icons/all-files/fa/FaChargingStation';
import { MdAllInclusive } from '@react-icons/all-files/md/MdAllInclusive';

const Index = () => (
  <>
    <section id="top"></section>
    <Layout>
      <section className="grid container mx-auto text-center place-items-center ">
        <img src="https://i.imgur.com/FoIs05h.png" className="img-responsive img-centered "></img>
        <p className="text-xl lg:text-2xl mt-6 font-light">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel
          beatae natus eveniet ratione temporibus aperiam harum
        </p>
        <p className="mt-8 md:mt-12">
          <AnchorLink className="p-4 bg-primary rounded-md text-white" href="#contact">
            Get Started
          </AnchorLink>
        </p>
        <p className="mt-4 text-gray-600">Sed fermentum felis ut cursu</p>
      </section>

      <SplitSection
        id="services"
        primarySlot={
          <div className="lg:pr-32 xl:pr-48 mt-4">
            <h3 className="text-3xl font-semibold leading-tight">Market Analysis</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Our team of enthusiastic marketers will analyse and evaluate how your company stacks
              against the closest competitors
            </p>
          </div>
        }
        secondarySlot={
          <>
            <FaChargingStation size={200} fill="#C62F14" />
          </>
        }
      />

      <SplitSection
        reverseOrder
        primarySlot={
          <div className="lg:pl-32 xl:pl-48">
            <h3 className="text-3xl font-semibold leading-tight">
              Design And Plan Your Business Growth Steps
            </h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Once the market analysis process is completed our staff will search for opportunities
              that are in reach
            </p>
          </div>
        }
        secondarySlot={<SvgCharts />}
      />

      <SplitSection
        primarySlot={
          <div className="lg:pr-32 xl:pr-48">
            <h3 className="text-3xl font-semibold leading-tight">
              Search For Performance Optimization
            </h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              With all the information in place you will be presented with an action plan that your
              company needs to follow
            </p>
          </div>
        }
        secondarySlot={<MdAllInclusive size={200} fill="#C62F14" />}
      />

      <section id="stats" className="py-20 lg:pt-32">
        <div className="container mx-auto text-center">
          <LabelText className="text-gray-600">Experienced Collaborators</LabelText>
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
      </section>
      <section id="people" className="py-20 lg:pb-40 lg:pt-48">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-semibold">People</h2>
          <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
            <div className="flex-1 px-3">
              <Card className="mb-8">
                <p className="font-semibold text-xl">Mike</p>
                <p className="mt-4">
                  An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                  velna vitae auctor integer.
                </p>
              </Card>
            </div>
            <div className="flex-1 px-3">
              <Card className="mb-8">
                <p className="font-semibold text-xl">Tanya</p>
                <p className="mt-4">
                  An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                  velna vitae auctor integer.
                </p>
              </Card>
            </div>
            <div className="flex-1 px-3">
              <Card className="mb-8">
                <p className="font-semibold text-xl">Garrett</p>
                <p className="mt-4">
                  An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                  velna vitae auctor integer.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonials" className="py-20 lg:py-40">
        <div className="container mx-auto">
          <LabelText className="mb-8 text-gray-600 text-center">
            What customers are saying
          </LabelText>
          <div className="flex flex-col md:flex-row md:-mx-3">
            {customerData.map((customer) => (
              <div key={customer.customerName} className="flex-1 px-3">
                <CustomerCard customer={customer} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container mx-auto mt-10 bg-gray-200 rounded-lg text-center" id="contact">
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
