import Head from "next/head";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/cjs/languages/hljs/javascript";
import python from "react-syntax-highlighter/dist/cjs/languages/hljs/python";
import docco from "react-syntax-highlighter/dist/cjs/styles/hljs/docco";

function Blog() {
  SyntaxHighlighter.registerLanguage("javascript", js);
  SyntaxHighlighter.registerLanguage("python", python);
  const codeString = `import { Grid } from "@nextui-org/react";

  function NextUIGrid(props) {
    return (
      <Grid.Container gap={2} justify="center">
        <Grid>{props.children}</Grid>
      </Grid.Container>
    );
  }
  
  export default NextUIGrid;`;

  const codeString2 = `# Python3 program to swap elements
  # at given positions
   
  # Swap function
  def swapPositions(list, pos1, pos2):
       
      list[pos1], list[pos2] = list[pos2], list[pos1]
      return list
   
  # Driver function
  List = [23, 65, 19, 90]
  pos1, pos2  = 1, 3
   
  print(swapPositions(List, pos1-1, pos2-1))`;

  return (
    <>
      <Head>
        <title>Blog - HJPark</title>
      </Head>
      <div className="flex h-full flex-col justify-center items-center">
        <h1 className="text-4xl mb-5 font-bold">Blog</h1>
        <span className="text-7xl">🏡</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="mb-12">
          <SyntaxHighlighter
            language="python"
            style={docco}
            showLineNumbers={true}
          >
            {codeString2}
          </SyntaxHighlighter>
        </div>
        <div>
          <SyntaxHighlighter
            language="javascript"
            style={docco}
            showLineNumbers={true}
          >
            {codeString}
          </SyntaxHighlighter>
        </div>
      </div>
    </>
  );
}

export default Blog;
