type headerProps = {
  link: string;
  title: string;
  description: string;
};

const Headers = ({ link, title, description }: headerProps) => {
  return (
    <div className="bg-white mx-5">
      <div className="flex flex-col items-cente">
        <iframe
          src={link}
          title="YouTube video player"
          allow="accelerometer; 
            autoplay; 
            clipboard-write; 
            encrypted-media; 
            gyroscope; 
            picture-in-picture; 
            web-share"
          className="h-60"
        />
        <h1 className="text-3xl p-5 font-semibold w-72 sm:w-full">{title}</h1>
        <p>{description}</p>
      </div>
      <hr className="bg-gray-500 h-1 mx-6" />
    </div>
  );
};

export default Headers;
