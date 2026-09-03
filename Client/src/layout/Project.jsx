import { useParams, Link } from "react-router-dom";
import { projectData, subtitle } from "../constant/Data.js";
import NotFound from "../section/NotFound.jsx";
import { EarthIcon } from '../components/ui/earth.jsx';
import { GithubIcon } from "../components/ui/github.jsx";

export default function Project() {
  const { projectName } = useParams();

  const project = projectData.find((project) => project.slug === projectName);

  if (!project) {
    return <NotFound />;
  }

  return (
    <>
      <div className="w-full min-h-screen bg-zinc-950 flex justify-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl flex flex-col gap-6 sm:gap-8">
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm sm:text-base mb-4 group"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Portfolio
            </Link>
          </div>

          <div className="w-full h-56 sm:h-72 md:h-96 rounded-2xl border border-white/20 overflow-hidden shadow-2xl bg-zinc-900">
            <img
              className="w-full h-full object-cover"
              src={project.image}
              alt={project.title}
              loading="eager"
              decoding="async"
            />
          </div>

          <div className="w-full flex justify-center items-center gap-4 sm:gap-8 flex-wrap">
            {project.demo && project.demo !== "..." && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <div className="py-2.5 px-6 flex items-center gap-2 rounded-2xl text-black cursor-pointer text-lg sm:text-2xl bg-[#3B82F6] hover:bg-blue-400 transition-colors font-medium">
                  <EarthIcon />
                  <span>Visit</span>
                </div>
              </a>
            )}

            {project.repo && (
              <a href={project.repo} target="_blank" rel="noopener noreferrer">
                <div className="py-2.5 px-6 flex items-center gap-2 rounded-2xl text-black text-lg sm:text-2xl cursor-pointer bg-[#3B82F6] hover:bg-blue-400 transition-colors font-medium">
                  <GithubIcon />
                  <span>Github</span>
                </div>
              </a>
            )}
          </div>

          <div className="w-full border-t border-white/20 my-2"></div>

          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              {project.title}
            </h1>
          </div>

          <div className="flex flex-col gap-6">
            {subtitle.map((sub, index) => {
              const textContent = project.content?.[index];
              if (!textContent) return null;
              return (
                <div key={index} className="flex flex-col gap-1.5">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white/95">
                    {sub}
                  </h2>
                  <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                    {textContent}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
