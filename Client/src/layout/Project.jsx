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
        <div className='w-2/3 p-5 flex flex-col gap-5'>
            <div className="w-full h-80 rounded-2xl border border-white/50">
                <img className="w-full h-full rounded-2xl object-cover" src={project.image} alt={project.name} />
            </div>
            <div className="w-full flex justify-center gap-30">
                <p className="py-2 px-4 flex gap-2 rounded-2xl text-2xl bg-[#3B82F6]"><EarthIcon/>Visit</p>
                <p className="py-2 px-4 rounded-2xl text-2xl bg-white/50">Github</p>
            </div>
        
        </div>
    </div>
  )
}
