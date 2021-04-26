import React from 'react';

const Card = () => (
  <div>
    <div className="relative items-center justify-center">
      <h1 className="text-center text-2xl font-bold p-4 bg-primary-lighter text-primary">People</h1>
      <div className="lg:flex items-center container mx-auto my-auto">
        <div className="lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white my-12 mx-8">
          <img
            src="https://media-exp1.licdn.com/dms/image/C5603AQFzuLJ8iv5FwQ/profile-displayphoto-shrink_200_200/0/1567630797727?e=1625097600&v=beta&t=q2LoLdpnodaA_EGYu07gWmfmTpfmHJTv_c2cxHsrz3k"
            alt=""
            className="h-48 w-48 overflow-hidden rounded-lg"
          ></img>
          <div className="p-4">
            <h3 className="font-medium text-primary text-lg my-2 uppercase">Mike Elwood</h3>
            <p className="text-justify">
              Mike has been building brands for years, but he has focused on the Electric Vehicle
              space for the last 20 years. Bringing EASY out to the market with the Team is
              something that can affect positive change.
            </p>
            <div className="mt-5">
              <a
                href=""
                className="border border-primary hover:bg-primary rounded-full py-2 px-3 font-semibold hover:text-white bg-primary-lighter text-primary"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white my-12 mx-8">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E03AQG9RjqDgPWBpQ/profile-displayphoto-shrink_200_200/0/1554919153360?e=1625097600&v=beta&t=kBhuI2TObRfgz3aSxBC6qAosHI_rSOiA0_pOmZeM2RY"
            alt=""
            className="h-48 w-48 overflow-hidden rounded-lg"
          ></img>
          <div className="p-4">
            <h3 className="font-medium text-primary  text-lg my-2 uppercase">Tanya Krackovic</h3>
            <p className="text-justify">
              Tanya has a passion to deliver a better planet and to empower the youth who are going
              to be handed the torch that EASY is carrying out to customers and the global market of
              Clean Energy Solutions.
            </p>
            <div className="mt-5">
              <a
                href=""
                className="border border-primary hover:bg-primary rounded-full py-2 px-3 font-semibold hover:text-white bg-primary-lighter text-primary"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white my-12 mx-8">
          <img
            src="https://media-exp1.licdn.com/dms/image/C5603AQFbjUKm7hl_Tw/profile-displayphoto-shrink_200_200/0/1616170009306?e=1625097600&v=beta&t=BnNzhxjDBiO3qvViyXto6O_7ZydjfU2TNusKjZ1TZQY"
            alt=""
            className="h-48 w-48 overflow-hidden rounded-lg"
          ></img>
          <div className="p-4">
            <h3 className="font-medium text-primary  text-lg my-2 uppercase">Garrett Vanderwyst</h3>
            <p className="text-justify">
              Garrett represents the youth in the movement of EASY coming to market and he is years
              ahead of most when it comes to the financial mechanisms required to affect the changes
              we are bringing to market.
            </p>
            <div className="mt-5">
              <a
                href=""
                className="border border-primary hover:bg-primary rounded-full py-2 px-3 font-semibold hover:text-white bg-primary-lighter text-primary"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
