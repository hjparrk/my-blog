import Head from "next/head";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

function About() {
  const codeString = `import SyntaxHighlighter from 'react-syntax-highlighter';
  import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
  const Component = () => {
    const codeString = '(num) => num + 1';
    return (
      <SyntaxHighlighter language="javascript" style={docco}>
        {codeString}
      </SyntaxHighlighter>
    );
  };`;

  return (
    <>
      <Head>
        <title>About - HJPark</title>
      </Head>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl mb-5 font-bold">About</h1>
        <span className="text-7xl">💬</span>
        <h1>Here</h1>
      </div>
      <div className="flex justify-center w-auto">
        <SyntaxHighlighter language="javascript" style={docco}>
          {codeString}
        </SyntaxHighlighter>
      </div>
    </>
  );
}

export default About;
