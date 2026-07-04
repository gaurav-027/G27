import React from 'react'
import {useParams} from "react-router-dom"
import projectData from "../constant/Data.js"
import NotFound from "../section/NotFound.jsx"
import { EarthIcon } from '../components/ui/earth.jsx'
import {GithubIcon} from "../components/ui/github.jsx"
export default function Project() {

    const {projectName} = useParams();

    const project = projectData.find((project)=> project.slug === projectName);

    if(!project){
        return <NotFound/>
    }

  return (
    <div className='w-full h-screen bg-zinc-950 flex justify-center'>
        <div className='w-2/3 p-5 flex flex-col gap-8'>
            <div className="w-full h-80 rounded-2xl border border-white/50">
                <img className="w-full h-full rounded-2xl object-cover" src={project.image} alt={project.name} />
            </div>
            <div className="w-full flex justify-center gap-30">
                <a href={project.demo} target="_main">
                    <div className="py-2 px-4 flex items-center gap-2 rounded-2xl text-black cursor-pointer text-2xl bg-[#3B82F6]">
                        <EarthIcon />
                        <span>Visit</span>
                    </div>
                </a>

                <a href={project.repo} target="_main">
                    <div className="py-2 px-4 flex items-center gap-2 rounded-2xl text-black text-2xl cursor-pointer bg-[#3B82F6]">
                        <GithubIcon />
                        <span>Github</span>
                    </div>
                </a>
            </div>
            <div className='w-full border border-white/30'></div>
            <div>
                <p className="text-5xl">{project.title}</p>
            </div>

            {
                project.description.subtitle.map((subtitle,index)=>{
                    return (
                        <div key={index}>
                            <p className='text-3xl'>{subtitle}</p>
                            <p className="text-lg align-super">{project.description.content[index]}</p>
                        </div>
                    )
                })
            }
            <div className="w-full border flex">
                {
                    projectData.map((project,index)=>{
                        return (
                            <div className="border w-64 h-64"></div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}
