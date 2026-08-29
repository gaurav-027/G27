import React from "react";
import { useForm } from "react-hook-form";
import CircularText from "../components/CircularText";
import CurvedLoop from "../components/CurvedLoop";
import Model from "../components/Model";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    // API / Email service yaha connect kar sakte ho

    reset();
  };

  return (
    <>
      <div className="w-full h-screen bg-[#f2e2c2]">
        <div className="w-full h-full flex p-2 gap-2">
          {/* CONTACT FORM */}
          <div className="contactForm w-35/10 h-full bg-black rounded-2xl p-5 text-[#f2e2c2]">
            {/* Header */}
            <div className="w-full border-b border-zinc-700 pb-3 mb-5">
              <p className="text-7xl text-white text-right tracking-tight">
                ✦ Contact
              </p>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4 h-[calc(100%-100px)]"
            >
              {/* Name */}
              <div className="group">
                <label className="block text-sm text-zinc-400 mb-1">
                  YOUR NAME
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  {...register("name", {
                    required: "Name is required",
                  })}
                  className="w-full bg-transparent border-b border-zinc-700
                  py-3 text-lg outline-none placeholder:text-zinc-600
                  focus:border-[#f2e2c2] transition-colors"
                />

                {errors.name && (
                  <p className="text-xs text-red-400 mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-zinc-400 mb-1">
                  EMAIL ADDRESS
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email",
                    },
                  })}
                  className="w-full bg-transparent border-b border-zinc-700
                  py-3 text-lg outline-none placeholder:text-zinc-600
                  focus:border-[#f2e2c2] transition-colors"
                />

                {errors.email && (
                  <p className="text-xs text-red-400 mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Purpose */}
              <div>
                <label className="block text-sm text-zinc-400 mb-1">
                  WHAT'S THIS ABOUT?
                </label>

                <div className="relative">
                  <select
                    {...register("purpose", {
                      required: "Please select a purpose",
                    })}
                    defaultValue=""
                    className="appearance-none w-full bg-transparent
                    border-b border-zinc-700 py-3 text-lg outline-none
                    text-[#f2e2c2] cursor-pointer
                    focus:border-[#f2e2c2] transition-colors"
                  >
                    <option value="" disabled className="bg-black">
                      Select an option
                    </option>

                    <option value="Freelance" className="bg-black">
                      Freelance
                    </option>

                    <option value="Job Opportunity" className="bg-black">
                      Job Opportunity
                    </option>

                    <option value="A Project to discuss" className="bg-black">
                      A Project to discuss
                    </option>

                    <option value="Just say a word" className="bg-black">
                      Just say a word
                    </option>
                  </select>

                  <span className="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none text-xl">
                    ↓
                  </span>
                </div>

                {errors.purpose && (
                  <p className="text-xs text-red-400 mt-1">
                    {errors.purpose.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="flex-1 flex flex-col">
                <label className="block text-sm text-zinc-400 mb-1">
                  MESSAGE
                </label>

                <textarea
                  placeholder="Tell me a little about your idea..."
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Message should be at least 10 characters",
                    },
                  })}
                  className="w-full flex-1 resize-none bg-zinc-950/50
                  border border-zinc-800 rounded-xl p-4 text-lg
                  outline-none placeholder:text-zinc-600
                  focus:border-[#f2e2c2] transition-colors"
                />

                {errors.message && (
                  <p className="text-xs text-red-400 mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#f2e2c2] text-black rounded-xl
                py-4 text-lg font-semibold flex items-center
                justify-between px-5 group hover:bg-white
                transition-all duration-300 disabled:opacity-50"
              >
                <span>{isSubmitting ? "SENDING..." : "SEND MESSAGE"}</span>

                <span className="text-2xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  ↗
                </span>
              </button>
            </form>
          </div>

          {/* REST OF YOUR LAYOUT */}
          <div className="w-35/10 h-full rounded-2xl flex flex-col gap-2">
            <div className="model w-full h-8/1 bg-zinc-700 rounded-2xl flex justify-center items-center p-10">
              <Model />
            </div>

            <div className="w-full h-15/10 bg-black rounded-2xl overflow-hidden">
              <CurvedLoop marqueeText="Let's Build Together ✦" />
            </div>
          </div>

          <div className="w-3/1 h-full flex flex-col gap-2">
            <div className="w-full h-15/10 flex gap-2">
              <div className="h-full w-6/10 bg-black rounded-2xl p-2 text-center">
                <p className="text-6xl font-bold">GET</p>
                <p className="text-5xl">In Touch</p>
              </div>

              <div className="h-full w-4/10 bg-black rounded-2xl">
                <CircularText
                  text="+91 8 6 7 7 8 3 0 3 8 0 "
                  onHover="pause"
                  spinDuration={20}
                  className="custom-class"
                />
              </div>
            </div>

            <div className="social w-full h-8/1 bg-black rounded-2xl p-6 overflow-hidden">
              <div className="w-full h-full flex flex-col justify-around">
                <div>
                  <p className="text-2xl relative left-10">
                    Have a Project in mind..?
                  </p>
                  <p className="text-2xl relative left-20">
                    Let's Discuss Together
                  </p>
                </div>

                <div className="flex flex-col">
                  <a href="https://instagram.com/gaurav__27.4" target="_blank" rel="noopener noreferrer" className="group relative flex items-center gap-4 py-3 px-3 border-b border-zinc-800 overflow-hidden transition-all duration-300 ease-out hover:border-[#f2e2c2]">
                    <span className="absolute inset-0 bg-[#f2e2c2] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out"/>
                    <span className="relative w-8 h-8 shrink-0 overflow-hidden">
                      <span className="absolute inset-0 flex items-center justify-center text-3xl leading-none text-[#f2e2c2] transition-all duration-300 ease-out group-hover:-translate-y-8 group-hover:opacity-0">
                        •
                      </span>
                      <span className="absolute inset-0 flex items-center justify-center text-xl text-black translate-y-8opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0group-hover:opacity-100">
                        ↗
                      </span>
                    </span>
                    <span className=" relative text-5xl  text-white transition-all duration-300 ease-out  group-hover:text-black group-hover:translate-x-2 " >
                      Instagram
                    </span>
                  </a>
                  <a href="https://www.linkedin.com/in/gaurav-kumar-810857320/" target="_blank" rel="noopener noreferrer" className="group relative flex items-center gap-4 py-3 px-3 border-b border-zinc-800 overflow-hidden transition-all duration-300 ease-out hover:border-[#f2e2c2]">
                    <span className="absolute inset-0 bg-[#f2e2c2] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out"/>
                    <span className="relative w-8 h-8 shrink-0 overflow-hidden">
                      <span className="absolute inset-0 flex items-center justify-center text-3xl leading-none text-[#f2e2c2] transition-all duration-300 ease-out group-hover:-translate-y-8 group-hover:opacity-0">
                        •
                      </span>
                      <span className="absolute inset-0 flex items-center justify-center text-xl text-black translate-y-8opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0group-hover:opacity-100">
                        ↗
                      </span>
                    </span>
                    <span className=" relative text-5xl  text-white transition-all duration-300 ease-out  group-hover:text-black group-hover:translate-x-2 " >
                      LinkedIn
                    </span>
                  </a>
                  <a href="https://github.com/gaurav-027" target="_blank" rel="noopener noreferrer" className="group relative flex items-center gap-4 py-3 px-3 border-b border-zinc-800 overflow-hidden transition-all duration-300 ease-out hover:border-[#f2e2c2]">
                    <span className="absolute inset-0 bg-[#f2e2c2] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out"/>
                    <span className="relative w-8 h-8 shrink-0 overflow-hidden">
                      <span className="absolute inset-0 flex items-center justify-center text-3xl leading-none text-[#f2e2c2] transition-all duration-300 ease-out group-hover:-translate-y-8 group-hover:opacity-0">
                        •
                      </span>
                      <span className="absolute inset-0 flex items-center justify-center text-xl text-black translate-y-8opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0group-hover:opacity-100">
                        ↗
                      </span>
                    </span>
                    <span className=" relative text-5xl  text-white transition-all duration-300 ease-out  group-hover:text-black group-hover:translate-x-2 " >
                      GitHub
                    </span>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61558637158456" target="_blank" rel="noopener noreferrer" className="group relative flex items-center gap-4 py-3 px-3 border-b border-zinc-800 overflow-hidden transition-all duration-300 ease-out hover:border-[#f2e2c2]">
                    <span className="absolute inset-0 bg-[#f2e2c2] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out"/>
                    <span className="relative w-8 h-8 shrink-0 overflow-hidden">
                      <span className="absolute inset-0 flex items-center justify-center text-3xl leading-none text-[#f2e2c2] transition-all duration-300 ease-out group-hover:-translate-y-8 group-hover:opacity-0">
                        •
                      </span>
                      <span className="absolute inset-0 flex items-center justify-center text-xl text-black translate-y-8opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0group-hover:opacity-100">
                        ↗
                      </span>
                    </span>
                    <span className=" relative text-5xl  text-white transition-all duration-300 ease-out  group-hover:text-black group-hover:translate-x-2 " >
                      Facebook
                    </span>
                  </a>  
                </div>
                <div className="text-center text-l">
                  <p>+91 86778 30380</p>
                  <p>kr.gauravbca7@gmail.com</p>
                </div>
                <div className="text-center text-l">
                  <p className="animate-pulse">&#8226; Available For</p>
                  <p>Freelance | Job Opportunity | Let's Talk</p>
                  <p>India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
