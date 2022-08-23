import Head from "next/head";

function About() {
  return (
    <>
      <Head>
        <title>About - HJPark</title>
      </Head>
      <div className="flex h-full flex-col justify-center items-center">
        <h1 className="text-4xl mb-5 font-bold">About</h1>
        <span className="text-7xl">💬</span>
      </div>
    </>
  );
}

export default About;
