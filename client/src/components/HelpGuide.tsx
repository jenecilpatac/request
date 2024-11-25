import React, { useState } from "react";

type Props = {};

const videoOptions = [
  {
    url: "https://drive.google.com/file/d/1M86DCE2_HU4DkShxDj3gxUOxLvbVMEJl/preview",
    title: "Setting Up Your Request and Create Request",
  },
  {
    url: "https://drive.google.com/file/d/1FwDW0OcWFn97iGZh5KzSY3J0K62oNMKz/preview",
    title: "How to edit request ",
  },
  {
    url: "https://drive.google.com/file/d/1WO1vplGmRbfd3Xbjw5Fs_hk8xQ1lZ7ma/preview",
    title: "How to print request with Approved status",
  },
  {
    url: "  https://drive.google.com/file/d/1grgaiZHLpRS-vs4PyfqHQNX-mkdaYUJV/preview",
    title: "How to approve a request",
    role: "approver",
  },
];

const HelpGuide = (props: Props) => {
  const [currentVideo, setCurrentVideo] = useState(videoOptions[0].url);
  const [currentTitle, setCurrentTitle] = useState(videoOptions[0].title);

  const handleVideoChange = (url: string, title: string) => {
    setCurrentVideo(url);
    setCurrentTitle(title);
  };
  return (
    <div className="bg-graybg dark:bg-blackbg h-full pt-[26px] px-[35px]">
      <h1 className="text-primary dark:text-primaryD text-[32px] font-bold">
        Help Guide
      </h1>
      <div className="bg-white w-full mb-5 rounded-[12px] flex flex-col p-10">
        <div className="flex justify-center items-center mb-4">
          <iframe
            src={currentVideo}
            width="1280"
            height="720"
            allow="autoplay"
          ></iframe>
        </div>
        <p className="font-bold">{currentTitle}</p>
        <div className="mt-10">
          <h2 className="text-primary  text-[24px] font-bold">Other Video</h2>
          <ul>
            {videoOptions.map((option, index) => (
              <li key={index} className="mb-2">
                <button
                  className="text-blue-500 hover:underline"
                  onClick={() => handleVideoChange(option.url, option.title)}
                >
                  {option.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HelpGuide;