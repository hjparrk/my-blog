import Head from "next/head";

function Biography() {
  return (
    <>
      <Head>
        <title>Biography - HJPark</title>
      </Head>
      <div className="flex h-full flex-col justify-center items-center">
        <h1 className="text-4xl mb-5 font-bold">Biography</h1>
        <span className="text-7xl">🏡</span>
      </div>
    </>
  );
}

export default Biography;
