import juice from "juice";
import fs from "fs";

const prose = ".prose{color:#4a5568;max-width:65ch}.prose .lead{color:#4a5568;font-size:1.25em;line-height:1.6;margin-top:1.2em;margin-bottom:1.2em}.prose a{color:#1a202c;text-decoration:underline}.prose strong{color:#1a202c;font-weight:600}.prose ol{counter-reset:list-counter;margin-top:1.25em;margin-bottom:1.25em}.prose ol > li{position:relative;counter-increment:list-counter;padding-left:1.75em}.prose ol > li::before{content:counter(list-counter) \".\";position:absolute;font-weight:400;color:#718096}.prose ul > li{position:relative;padding-left:1.75em}.prose ul > li::before{content:\"\";position:absolute;background-color:#cbd5e0;border-radius:50%;width:.375em;height:.375em;top:calc(0.875em - 0.1875em);left:.25em}.prose hr{border-color:#e2e8f0;border-top-width:1px;margin-top:3em;margin-bottom:3em}.prose blockquote{font-weight:500;font-style:italic;color:#1a202c;border-left-width:.25rem;border-left-color:#e2e8f0;quotes:\"\\201C\"\"\\201D\"\"\\2018\"\"\\2019\";margin-top:1.6em;margin-bottom:1.6em;padding-left:1em}.prose blockquote p:first-of-type::before{content:open-quote}.prose blockquote p:last-of-type::after{content:close-quote}.prose h1{color:#1a202c;font-weight:800;font-size:2.25em;margin-top:0;margin-bottom:.8888889em;line-height:1.1111111}.prose h2{color:#1a202c;font-weight:700;font-size:1.5em;margin-top:2em;margin-bottom:1em;line-height:1.3333333}.prose h3{color:#1a202c;font-weight:600;font-size:1.25em;margin-top:1.6em;margin-bottom:.6em;line-height:1.6}.prose h4{color:#1a202c;font-weight:600;margin-top:1.5em;margin-bottom:.5em;line-height:1.5}.prose figure figcaption{color:#718096;font-size:.875em;line-height:1.4285714;margin-top:.8571429em}.prose code{color:#1a202c;font-weight:600;font-size:.875em}.prose code::before{content:\" \\`\"}.prose code::after{content:\" \\`\"}.prose pre{color:#e2e8f0;background-color:#2d3748;overflow-x:auto;font-size:.875em;line-height:1.7142857;margin-top:1.7142857em;margin-bottom:1.7142857em;border-radius:.375rem;padding:.8571429em 1.1428571em}.prose pre code{background-color:transparent;border-width:0;border-radius:0;padding:0;font-weight:400;color:inherit;font-size:inherit;font-family:inherit;line-height:inherit}.prose pre code::before{content:\"\"}.prose pre code::after{content:\"\"}.prose table{width:100%;table-layout:auto;text-align:left;margin-top:2em;margin-bottom:2em;font-size:.875em;line-height:1.7142857}.prose thead{color:#1a202c;font-weight:600;border-bottom-width:1px;border-bottom-color:#cbd5e0}.prose thead th{vertical-align:bottom;padding-right:.5714286em;padding-bottom:.5714286em;padding-left:.5714286em}.prose tbody tr{border-bottom-width:1px;border-bottom-color:#e2e8f0}.prose tbody tr:last-child{border-bottom-width:0}.prose tbody td{vertical-align:top;padding:.5714286em}.prose{font-size:1rem;line-height:1.75}.prose p{margin-top:1.25em;margin-bottom:1.25em}.prose img{margin-top:2em;margin-bottom:2em}.prose video{margin-top:2em;margin-bottom:2em}.prose figure{margin-top:2em;margin-bottom:2em}.prose figure > *{margin-top:0;margin-bottom:0}.prose h2 code{font-size:.875em}.prose h3 code{font-size:.9em}.prose ul{margin-top:1.25em;margin-bottom:1.25em}.prose li{margin-top:.5em;margin-bottom:.5em}.prose ol > li:before{left:0}.prose > ul > li p{margin-top:.75em;margin-bottom:.75em}.prose > ul > li > :first-child{margin-top:1.25em}.prose > ul > li > :last-child{margin-bottom:1.25em}.prose > ol > li > :first-child{margin-top:1.25em}.prose > ol > li > :last-child{margin-bottom:1.25em}.prose ul ul,.prose ul ol,.prose ol ul,.prose ol ol{margin-top:.75em;margin-bottom:.75em}.prose hr + *{margin-top:0}.prose h2 + *{margin-top:0}.prose h3 + *{margin-top:0}.prose h4 + *{margin-top:0}.prose thead th:first-child{padding-left:0}.prose thead th:last-child{padding-right:0}.prose tbody td:first-child{padding-left:0}.prose tbody td:last-child{padding-right:0}.prose > :first-child{margin-top:0}.prose > :last-child{margin-bottom:0}.prose-sm{font-size:.875rem;line-height:1.7142857}.prose-sm p{margin-top:1.1428571em;margin-bottom:1.1428571em}.prose-sm .lead{font-size:1.2857143em;line-height:1.5555556;margin-top:.8888889em;margin-bottom:.8888889em}.prose-sm blockquote{margin-top:1.3333333em;margin-bottom:1.3333333em;padding-left:1.1111111em}.prose-sm h1{font-size:2.1428571em;margin-top:0;margin-bottom:.8em;line-height:1.2}.prose-sm h2{font-size:1.4285714em;margin-top:1.6em;margin-bottom:.8em;line-height:1.4}.prose-sm h3{font-size:1.2857143em;margin-top:1.5555556em;margin-bottom:.4444444em;line-height:1.5555556}.prose-sm h4{margin-top:1.4285714em;margin-bottom:.5714286em;line-height:1.4285714}.prose-sm img{margin-top:1.7142857em;margin-bottom:1.7142857em}.prose-sm video{margin-top:1.7142857em;margin-bottom:1.7142857em}.prose-sm figure{margin-top:1.7142857em;margin-bottom:1.7142857em}.prose-sm figure > *{margin-top:0;margin-bottom:0}.prose-sm figure figcaption{font-size:.8571429em;line-height:1.3333333;margin-top:.6666667em}.prose-sm code{font-size:.8571429em}.prose-sm h2 code{font-size:.9em}.prose-sm h3 code{font-size:.8888889em}.prose-sm pre{font-size:.8571429em;line-height:1.6666667;margin-top:1.6666667em;margin-bottom:1.6666667em;border-radius:.25rem;padding:.6666667em 1em}.prose-sm ol{margin-top:1.1428571em;margin-bottom:1.1428571em}.prose-sm ul{margin-top:1.1428571em;margin-bottom:1.1428571em}.prose-sm li{margin-top:.2857143em;margin-bottom:.2857143em}.prose-sm ol > li{padding-left:1.5714286em}.prose-sm ol > li:before{left:0}.prose-sm ul > li{padding-left:1.5714286em}.prose-sm ul > li::before{height:.3571429em;width:.3571429em;top:calc(0.8571429em - 0.1785714em);left:.2142857em}.prose-sm > ul > li p{margin-top:.5714286em;margin-bottom:.5714286em}.prose-sm > ul > li > :first-child{margin-top:1.1428571em}.prose-sm > ul > li > :last-child{margin-bottom:1.1428571em}.prose-sm > ol > li > :first-child{margin-top:1.1428571em}.prose-sm > ol > li > :last-child{margin-bottom:1.1428571em}.prose-sm ul ul,.prose-sm ul ol,.prose-sm ol ul,.prose-sm ol ol{margin-top:.5714286em;margin-bottom:.5714286em}.prose-sm hr{margin-top:2.8571429em;margin-bottom:2.8571429em}.prose-sm hr + *{margin-top:0}.prose-sm h2 + *{margin-top:0}.prose-sm h3 + *{margin-top:0}.prose-sm h4 + *{margin-top:0}.prose-sm table{font-size:.8571429em;line-height:1.5}.prose-sm thead th{padding-right:1em;padding-bottom:.6666667em;padding-left:1em}.prose-sm thead th:first-child{padding-left:0}.prose-sm thead th:last-child{padding-right:0}.prose-sm tbody td{padding:.6666667em 1em}.prose-sm tbody td:first-child{padding-left:0}.prose-sm tbody td:last-child{padding-right:0}.prose-sm > :first-child{margin-top:0}.prose-sm > :last-child{margin-bottom:0}.prose-lg{font-size:1.125rem;line-height:1.7777778}.prose-lg p{margin-top:1.3333333em;margin-bottom:1.3333333em}.prose-lg .lead{font-size:1.2222222em;line-height:1.4545455;margin-top:1.0909091em;margin-bottom:1.0909091em}.prose-lg blockquote{margin-top:1.6666667em;margin-bottom:1.6666667em;padding-left:1em}.prose-lg h1{font-size:2.6666667em;margin-top:0;margin-bottom:.8333333em;line-height:1}.prose-lg h2{font-size:1.6666667em;margin-top:1.8666667em;margin-bottom:1.0666667em;line-height:1.3333333}.prose-lg h3{font-size:1.3333333em;margin-top:1.6666667em;margin-bottom:.6666667em;line-height:1.5}.prose-lg h4{margin-top:1.7777778em;margin-bottom:.4444444em;line-height:1.5555556}.prose-lg img{margin-top:1.7777778em;margin-bottom:1.7777778em}.prose-lg video{margin-top:1.7777778em;margin-bottom:1.7777778em}.prose-lg figure{margin-top:1.7777778em;margin-bottom:1.7777778em}.prose-lg figure > *{margin-top:0;margin-bottom:0}.prose-lg figure figcaption{font-size:.8888889em;line-height:1.5;margin-top:1em}.prose-lg code{font-size:.8888889em}.prose-lg h2 code{font-size:.8666667em}.prose-lg h3 code{font-size:.875em}.prose-lg pre{font-size:.8888889em;line-height:1.75;margin-top:2em;margin-bottom:2em;border-radius:.375rem;padding:1em 1.5em}.prose-lg ol{margin-top:1.3333333em;margin-bottom:1.3333333em}.prose-lg ul{margin-top:1.3333333em;margin-bottom:1.3333333em}.prose-lg li{margin-top:.6666667em;margin-bottom:.6666667em}.prose-lg ol > li{padding-left:1.6666667em}.prose-lg ol > li:before{left:0}.prose-lg ul > li{padding-left:1.6666667em}.prose-lg ul > li::before{width:.3333333em;height:.3333333em;top:calc(0.8888889em - 0.1666667em);left:.2222222em}.prose-lg > ul > li p{margin-top:.8888889em;margin-bottom:.8888889em}.prose-lg > ul > li > :first-child{margin-top:1.3333333em}.prose-lg > ul > li > :last-child{margin-bottom:1.3333333em}.prose-lg > ol > li > :first-child{margin-top:1.3333333em}.prose-lg > ol > li > :last-child{margin-bottom:1.3333333em}.prose-lg ul ul,.prose-lg ul ol,.prose-lg ol ul,.prose-lg ol ol{margin-top:.8888889em;margin-bottom:.8888889em}.prose-lg hr{margin-top:3.1111111em;margin-bottom:3.1111111em}.prose-lg hr + *{margin-top:0}.prose-lg h2 + *{margin-top:0}.prose-lg h3 + *{margin-top:0}.prose-lg h4 + *{margin-top:0}.prose-lg table{font-size:.8888889em;line-height:1.5}.prose-lg thead th{padding-right:.75em;padding-bottom:.75em;padding-left:.75em}.prose-lg thead th:first-child{padding-left:0}.prose-lg thead th:last-child{padding-right:0}.prose-lg tbody td{padding:.75em}.prose-lg tbody td:first-child{padding-left:0}.prose-lg tbody td:last-child{padding-right:0}.prose-lg > :first-child{margin-top:0}.prose-lg > :last-child{margin-bottom:0}.prose-xl{font-size:1.25rem;line-height:1.8}.prose-xl p{margin-top:1.2em;margin-bottom:1.2em}.prose-xl .lead{font-size:1.2em;line-height:1.5;margin-top:1em;margin-bottom:1em}.prose-xl blockquote{margin-top:1.6em;margin-bottom:1.6em;padding-left:1.0666667em}.prose-xl h1{font-size:2.8em;margin-top:0;margin-bottom:.8571429em;line-height:1}.prose-xl h2{font-size:1.8em;margin-top:1.5555556em;margin-bottom:.8888889em;line-height:1.1111111}.prose-xl h3{font-size:1.5em;margin-top:1.6em;margin-bottom:.6666667em;line-height:1.3333333}.prose-xl h4{margin-top:1.8em;margin-bottom:.6em;line-height:1.6}.prose-xl img{margin-top:2em;margin-bottom:2em}.prose-xl video{margin-top:2em;margin-bottom:2em}.prose-xl figure{margin-top:2em;margin-bottom:2em}.prose-xl figure > *{margin-top:0;margin-bottom:0}.prose-xl figure figcaption{font-size:.9em;line-height:1.5555556;margin-top:1em}.prose-xl code{font-size:.9em}.prose-xl h2 code{font-size:.8611111em}.prose-xl h3 code{font-size:.9em}.prose-xl pre{font-size:.9em;line-height:1.7777778;margin-top:2em;margin-bottom:2em;border-radius:.5rem;padding:1.1111111em 1.3333333em}.prose-xl ol{margin-top:1.2em;margin-bottom:1.2em}.prose-xl ul{margin-top:1.2em;margin-bottom:1.2em}.prose-xl li{margin-top:.6em;margin-bottom:.6em}.prose-xl ol > li{padding-left:1.8em}.prose-xl ol > li:before{left:0}.prose-xl ul > li{padding-left:1.8em}.prose-xl ul > li::before{width:.35em;height:.35em;top:calc(0.9em - 0.175em);left:.25em}.prose-xl > ul > li p{margin-top:.8em;margin-bottom:.8em}.prose-xl > ul > li > :first-child{margin-top:1.2em}.prose-xl > ul > li > :last-child{margin-bottom:1.2em}.prose-xl > ol > li > :first-child{margin-top:1.2em}.prose-xl > ol > li > :last-child{margin-bottom:1.2em}.prose-xl ul ul,.prose-xl ul ol,.prose-xl ol ul,.prose-xl ol ol{margin-top:.8em;margin-bottom:.8em}.prose-xl hr{margin-top:2.8em;margin-bottom:2.8em}.prose-xl hr + *{margin-top:0}.prose-xl h2 + *{margin-top:0}.prose-xl h3 + *{margin-top:0}.prose-xl h4 + *{margin-top:0}.prose-xl table{font-size:.9em;line-height:1.5555556}.prose-xl thead th{padding-right:.6666667em;padding-bottom:.8888889em;padding-left:.6666667em}.prose-xl thead th:first-child{padding-left:0}.prose-xl thead th:last-child{padding-right:0}.prose-xl tbody td{padding:.8888889em .6666667em}.prose-xl tbody td:first-child{padding-left:0}.prose-xl tbody td:last-child{padding-right:0}.prose-xl > :first-child{margin-top:0}.prose-xl > :last-child{margin-bottom:0}.prose-2xl{font-size:1.5rem;line-height:1.6666667}.prose-2xl p{margin-top:1.3333333em;margin-bottom:1.3333333em}.prose-2xl .lead{font-size:1.25em;line-height:1.4666667;margin-top:1.0666667em;margin-bottom:1.0666667em}.prose-2xl blockquote{margin-top:1.7777778em;margin-bottom:1.7777778em;padding-left:1.1111111em}.prose-2xl h1{font-size:2.6666667em;margin-top:0;margin-bottom:.875em;line-height:1}.prose-2xl h2{font-size:2em;margin-top:1.5em;margin-bottom:.8333333em;line-height:1.0833333}.prose-2xl h3{font-size:1.5em;margin-top:1.5555556em;margin-bottom:.6666667em;line-height:1.2222222}.prose-2xl h4{margin-top:1.6666667em;margin-bottom:.6666667em;line-height:1.5}.prose-2xl img{margin-top:2em;margin-bottom:2em}.prose-2xl video{margin-top:2em;margin-bottom:2em}.prose-2xl figure{margin-top:2em;margin-bottom:2em}.prose-2xl figure > *{margin-top:0;margin-bottom:0}.prose-2xl figure figcaption{font-size:.8333333em;line-height:1.6;margin-top:1em}.prose-2xl code{font-size:.8333333em}.prose-2xl h2 code{font-size:.875em}.prose-2xl h3 code{font-size:.8888889em}.prose-2xl pre{font-size:.8333333em;line-height:1.8;margin-top:2em;margin-bottom:2em;border-radius:.5rem;padding:1.2em 1.6em}.prose-2xl ol{margin-top:1.3333333em;margin-bottom:1.3333333em}.prose-2xl ul{margin-top:1.3333333em;margin-bottom:1.3333333em}.prose-2xl li{margin-top:.5em;margin-bottom:.5em}.prose-2xl ol > li{padding-left:1.6666667em}.prose-2xl ol > li:before{left:0}.prose-2xl ul > li{padding-left:1.6666667em}.prose-2xl ul > li::before{width:.3333333em;height:.3333333em;top:calc(0.8333333em - 0.1666667em);left:.25em}.prose-2xl > ul > li p{margin-top:.8333333em;margin-bottom:.8333333em}.prose-2xl > ul > li > :first-child{margin-top:1.3333333em}.prose-2xl > ul > li > :last-child{margin-bottom:1.3333333em}.prose-2xl > ol > li > :first-child{margin-top:1.3333333em}.prose-2xl > ol > li > :last-child{margin-bottom:1.3333333em}.prose-2xl ul ul,.prose-2xl ul ol,.prose-2xl ol ul,.prose-2xl ol ol{margin-top:.6666667em;margin-bottom:.6666667em}.prose-2xl hr{margin-top:3em;margin-bottom:3em}.prose-2xl hr + *{margin-top:0}.prose-2xl h2 + *{margin-top:0}.prose-2xl h3 + *{margin-top:0}.prose-2xl h4 + *{margin-top:0}.prose-2xl table{font-size:.8333333em;line-height:1.4}.prose-2xl thead th{padding-right:.6em;padding-bottom:.8em;padding-left:.6em}.prose-2xl thead th:first-child{padding-left:0}.prose-2xl thead th:last-child{padding-right:0}.prose-2xl tbody td{padding:.8em .6em}.prose-2xl tbody td:first-child{padding-left:0}.prose-2xl tbody td:last-child{padding-right:0}.prose-2xl > :first-child{margin-top:0}.prose-2xl > :last-child{margin-bottom:0}"

export default async (req, res) => {
  const tailwindcss = await fetch(
    "https://unpkg.com/tailwindcss@1.6.0/dist/tailwind.min.css"
  );
  const css = await tailwindcss.text();
  const extraCss = `${css} ${prose}`;
  const html = juice(req.body, { extraCss });

  res.setHeader('Content-disposition', 'attachment; filename=markdown.html');
  res.setHeader('Content-type', 'text/html');
  res.charset = 'UTF-8';
  res.write(html);
  res.end();
};