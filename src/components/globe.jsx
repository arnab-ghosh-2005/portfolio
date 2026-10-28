import IconCloud from "./ui/icon-cloud";

const slugs = [
  "python",
  "mysql",
  "pandas",
  "numpy",
  "scikitlearn",
  "tensorflow",
  "keras",
  "plotly",
  "fastapi",
  "streamlit",
  "jupyter",
  "googlecolab",
  "git",
  "github",
  "react",
  "mongodb",
  "html5",
  "css3",
  "javascript",
  "googlegemini",
  "render",
  "kaggle",
  "leetcode",
  "hackerrank",
  "vercel",
];

function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8 bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;
