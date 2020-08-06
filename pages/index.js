import Head from "next/head";
import classNames from "classnames";
import { ScrollSyncPane, ScrollSync } from "react-scroll-sync";
import Markdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { renderToStaticMarkup } from "react-dom/server";

function CodeBlock({ value }) {
  return (
    <SyntaxHighlighter showLineNumbers language="python" style={nord}>
      {value}
    </SyntaxHighlighter>
  );
}

function Button({ ...props }) {
  return (
    <button
      className={classNames(
        "bg-gray-300",
        "hover:bg-gray-400",
        "text-gray-800",
        "font-bold",
        "py-2",
        "px-4",
        "rounded",
        "inline-flex",
        "items-center"
      )}
      {...props}
    >
      <svg
        className="fill-current w-4 h-4 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
      </svg>
      <span>Download</span>
    </button>
  );
}

export default function Home() {
  const [value, setValue] = React.useState("");

  const handleValue = (event) => setValue(event.target.value);

  const handleDownload = () => {
    const markdownHtml = renderToStaticMarkup(
      <Markdown
        className="container mx-auto p-10 prose"
        source={value}
        renderers={{ code: CodeBlock }}
      />
    );

    fetch("/api/download", {
      method: "POST",
      body: markdownHtml,
    }).then((res) => console.log(res));
  };

  return (
    <div>
      <Head>
        <title>Markwind</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ScrollSync>
          <div
            className={classNames(
              "relative",
              "grid",
              "grid-cols-2",
              "gap-10",
              "p-10",
              "min-h-screen"
            )}
          >
            <div className="flex flex-col">
              <h1 className="mb-4 text-2xl">Markdown</h1>
              <ScrollSyncPane>
                <textarea
                  placeholder="Put your markdown here..."
                  className="p-10 flex-1 shadow bg-white resize-none overflow-y-scroll"
                  value={value}
                  onChange={handleValue}
                  style={{ maxHeight: 850 }}
                />
              </ScrollSyncPane>
            </div>
            <div className="flex flex-col">
              <h1 className="mb-4 text-2xl">Preview</h1>
              <ScrollSyncPane>
                <div
                  className="bg-white break-words p-10 flex-1 shadow overflow-y-scroll"
                  style={{ maxHeight: 850 }}
                >
                  <Markdown
                    className="prose"
                    source={value}
                    renderers={{ code: CodeBlock }}
                    s
                  />
                </div>
              </ScrollSyncPane>
            </div>
          </div>
        </ScrollSync>
        <div
          className={classNames(
            "absolute",
            "bottom-0",
            "right-0",
            "m-8",
            "shadow-xl"
          )}
        >
          <Button onClick={handleDownload} />
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
