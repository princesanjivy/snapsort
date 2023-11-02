const HeadingText = () => {
  return (
    <div className="text-6xl">
      AI powered event photo <br /> filtering app.
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <section className="min-h-screen p-10">
        <div className="flex justify-center items-center">
          <HeadingText />
        </div>
      </section>
      <section className="min-h-screen p-10 bg-slate-50">
        Section 2 - This is where the file upload UI comes in
        <div className="m-10 flex flex-col items-center">
          <div className="custom-box border-dashed border-2 border-gray-500 flex justify-center items-center">
            <p className="text-lg font-bold">Image to upload</p>
          </div>
          <button className="btn m-4">Click to take selfie</button>
        </div>
      </section>

      <section className="h-20">
        <footer className="p-10 flex justify-center">
          Footer content appear here
        </footer>
      </section>
    </div>
  );
}
