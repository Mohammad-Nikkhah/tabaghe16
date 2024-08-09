import { projects } from '@/data';
import React from 'react';
import { PinContainer } from './ui/3d-pin';

function RecentPod() {
  return (
    <div className="py-30" id="podcast">
      <h1 className="heading">
        Stay with us{' '}
        <span className="text-gray-500">Recent episodes</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-16 gap-y-8 mt-10">
        {projects.map(({ id, title, img, company, link }) => (
          <div
            className="sm:h-[29rem] h-[20rem] lg:min-h-[20.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
            key={id}
          >
            <PinContainer title="Click" href={link}>
              <div
                className="relative flex items-center justify-center sm:w-[570px] w-[80vw]
                 overflow-hidden lg:h-[30vh] h-[30vh] mb-10 sm:h-[40vh]"
              >
                <div className="relative p-2 w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="/bg.png" alt="Background" />
                </div>
                <img
                  src={img}
                  alt={title}
                  className="z-10 absolute bottom-0 rounded-lg"
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  <img
                    width="50"
                    height="50"
                    className="rounded-3xl"
                    src={company}
                    alt="Company Logo"
                  />
                  <span className="mx-3">company name</span>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentPod;
