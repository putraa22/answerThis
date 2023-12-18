import "@/styles/globals.css";

const RootLayout = ({ children }) => {
  return (
    <html lang="id">
      <body className=" bg-black flex justify-center relative">
        <div className="shadow-md fixed top-0 w-full h-16 bg-dark-900 flex items-center justify-center z-10">
          <h1 className="font-justme text-5xl text-transparent bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text">
            Answer This!
          </h1>
        </div>

        <div className="w-full max-w-screen-sm h-screen">
            { children }
        </div>

      </body>
    </html>
  );
};

export default RootLayout;