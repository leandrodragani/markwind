import juice from "juice";
import fs from "fs";
import path from "path";
import PurgeCSS from "purgecss";

export default async (req, res) => {
  const compiled = fs.readFileSync(
    path.resolve("./public/compiled-tailwind.css"),
    "utf8"
  );

  const purgeCSSResults = await new PurgeCSS().purge({
    content: [{ raw: req.body, extension: "html" }],
    css: [{ raw: compiled }],
  });

  console.log(purgeCSSResults[0].css);
  const html = juice(req.body, {
    extraCss: `${purgeCSSResults[0].css} @import url(https://fonts.googleapis.com/css?family=Inter);`,
    
  });

  // res.setHeader('Content-disposition', 'attachment; filename=markdown.html');
  // res.setHeader('Content-type', 'text/html');
  // res.charset = 'UTF-8';
  res.write(html);
  res.end();
};
