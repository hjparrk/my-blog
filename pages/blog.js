import Head from "next/head";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

function Blog() {
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
        <title>Blog - HJPark</title>
      </Head>
      <div className="flex h-full flex-col justify-center items-center">
        <h1 className="text-4xl mb-5 font-bold">Blog</h1>
        <span className="text-7xl">🏡</span>
      </div>
      <div className="flex justify-center w-auto">
        <SyntaxHighlighter language="javascript" style={docco}>
          {codeString}
        </SyntaxHighlighter>
      </div>
    </>
  );
}

export default Blog;
