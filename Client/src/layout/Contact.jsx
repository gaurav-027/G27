import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
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
    // API / Email service integration point
    reset();
  };

  return (
    <>
      <div className="w-full min-h-screen lg:h-screen bg-[#f2e2c2] overflow-y-auto lg:overflow-hidden p-2 sm:p-4">
        <div className="w-full h-full flex flex-col lg:flex-row gap-3 sm:gap-4">
          {/* Column 1: Contact Form */}
          <div className="contactForm w-full lg:w-[34%] min-h-[580px] lg:h-full bg-black rounded-2xl p-5 sm:p-6 text-[#f2e2c2] flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex justify-between items-center border-b border-zinc-800 pb-3 mb-4">
                <Link
                  to="/"
                  className="text-xs sm:text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  ← Home
                </Link>
                <h1 className="text-4xl sm:text-6xl lg:text-6xl xl:text-7xl text-white text-right tracking-tight font-bold">
                  ✦ Contact
                </h1>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-3 sm:gap-4"
              >
                {/* Name */}
                <div className="group">
                  <label className="block text-xs sm:text-sm text-zinc-400 mb-1 font-medium">
                    YOUR NAME
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    {...register("name", {
                      required: "Name is required",
                    })}
                    className="w-full bg-transparent border-b border-zinc-700
                    py-2 text-base sm:text-lg outline-none placeholder:text-zinc-600
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
                  <label className="block text-xs sm:text-sm text-zinc-400 mb-1 font-medium">
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
                    py-2 text-base sm:text-lg outline-none placeholder:text-zinc-600
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
                  <label className="block text-xs sm:text-sm text-zinc-400 mb-1 font-medium">
                    WHAT'S THIS ABOUT?
                  </label>

                  <div className="relative">
                    <select
                      {...register("purpose", {
                        required: "Please select a purpose",
                      })}
                      defaultValue=""
                      className="appearance-none w-full bg-transparent
                      border-b border-zinc-700 py-2 text-base sm:text-lg outline-none
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
                <div className="flex flex-col">
                  <label className="block text-xs sm:text-sm text-zinc-400 mb-1 font-medium">
                    MESSAGE
                  </label>

                  <textarea
                    rows={3}
                    placeholder="Tell me a little about your idea..."
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message: "Message should be at least 10 characters",
                      },
                    })}
                    className="w-full resize-none bg-zinc-950/50
                    border border-zinc-800 rounded-xl p-3 text-base sm:text-lg
                    outline-none placeholder:text-zinc-600
                    focus:border-[#f2e2c2] transition-colors"
                  />

                  {errors.message && (
                    <p className="text-xs text-red-400 mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#f2e2c2] text-black rounded-xl
                  py-3.5 text-base sm:text-lg font-semibold flex items-center
                  justify-between px-5 group hover:bg-white
                  transition-all duration-300 disabled:opacity-50 mt-2 cursor-pointer"
                >
                  <span>{isSubmitting ? "SENDING..." : "SEND MESSAGE"}</span>

                  <span className="text-xl sm:text-2xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                    ↗
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* Column 2: 3D Model & Curved Loop */}
          <div className="w-full lg:w-[33%] min-h-[420px] lg:h-full rounded-2xl flex flex-col gap-3 sm:gap-4">
            <div className="model w-full h-[320px] sm:h-[380px] lg:h-[75%] bg-zinc-800 rounded-2xl flex justify-center items-center p-4 overflow-hidden shadow-xl">
              <Model />
            </div>

            <div className="w-full h-24 sm:h-28 lg:h-[25%] bg-black rounded-2xl overflow-hidden flex items-center justify-center shadow-xl">
              <CurvedLoop marqueeText="Let's Build Together ✦" />
            </div>
          </div>

          {/* Column 3: Get In Touch & Socials */}
          <div className="w-full lg:w-[33%] min-h-[580px] lg:h-full flex flex-col gap-3 sm:gap-4">
            <div className="w-full h-28 sm:h-32 lg:h-[22%] flex gap-2 sm:gap-3">
              <div className="h-full w-3/5 bg-black rounded-2xl p-3 flex flex-col justify-center items-center text-center shadow-xl">
                <p className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">GET</p>
                <p className="text-2xl sm:text-3xl lg:text-4xl text-zinc-300">In Touch</p>
              </div>

              <div className="h-full w-2/5 bg-black rounded-2xl p-2 flex items-center justify-center shadow-xl">
                <CircularText
                  text="+91 8 6 7 7 8 3 0 3 8 0 "
                  onHover="pause"
                  spinDuration={20}
                  className="custom-class"
                />
              </div>
            </div>

            <div className="social w-full flex-1 lg:h-[78%] bg-black rounded-2xl p-5 sm:p-6 overflow-hidden flex flex-col justify-between gap-4 shadow-xl">
              <div>
                <p className="text-lg sm:text-xl lg:text-2xl text-zinc-300">
                  Have a Project in mind..?
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl text-white font-semibold">
                  Let's Discuss Together
                </p>
              </div>

              <div className="flex flex-col">
                <a
                  href="https://instagram.com/gaurav__27.4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center gap-3 sm:gap-4 py-2.5 sm:py-3 px-3 border-b border-zinc-800 overflow-hidden transition-all duration-300 ease-out hover:border-[#f2e2c2]"
                >
                  <span className="absolute inset-0 bg-[#f2e2c2] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out" />
                  <span className="relative w-6 h-6 sm:w-8 sm:h-8 shrink-0 overflow-hidden">
                    <span className="absolute inset-0 flex items-center justify-center text-2xl sm:text-3xl leading-none text-[#f2e2c2] transition-all duration-300 ease-out group-hover:-translate-y-8 group-hover:opacity-0">
                      •
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center text-lg sm:text-xl text-black translate-y-8 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                      ↗
                    </span>
                  </span>
                  <span className="relative text-2xl sm:text-3xl lg:text-4xl font-semibold text-white transition-all duration-300 ease-out group-hover:text-black group-hover:translate-x-2">
                    Instagram
                  </span>
                </a>

                <a
                  href="https://www.linkedin.com/in/gaurav-kumar-810857320/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center gap-3 sm:gap-4 py-2.5 sm:py-3 px-3 border-b border-zinc-800 overflow-hidden transition-all duration-300 ease-out hover:border-[#f2e2c2]"
                >
                  <span className="absolute inset-0 bg-[#f2e2c2] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out" />
                  <span className="relative w-6 h-6 sm:w-8 sm:h-8 shrink-0 overflow-hidden">
                    <span className="absolute inset-0 flex items-center justify-center text-2xl sm:text-3xl leading-none text-[#f2e2c2] transition-all duration-300 ease-out group-hover:-translate-y-8 group-hover:opacity-0">
                      •
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center text-lg sm:text-xl text-black translate-y-8 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                      ↗
                    </span>
                  </span>
                  <span className="relative text-2xl sm:text-3xl lg:text-4xl font-semibold text-white transition-all duration-300 ease-out group-hover:text-black group-hover:translate-x-2">
                    LinkedIn
                  </span>
                </a>

                <a
                  href="https://github.com/gaurav-027"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center gap-3 sm:gap-4 py-2.5 sm:py-3 px-3 border-b border-zinc-800 overflow-hidden transition-all duration-300 ease-out hover:border-[#f2e2c2]"
                >
                  <span className="absolute inset-0 bg-[#f2e2c2] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out" />
                  <span className="relative w-6 h-6 sm:w-8 sm:h-8 shrink-0 overflow-hidden">
                    <span className="absolute inset-0 flex items-center justify-center text-2xl sm:text-3xl leading-none text-[#f2e2c2] transition-all duration-300 ease-out group-hover:-translate-y-8 group-hover:opacity-0">
                      •
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center text-lg sm:text-xl text-black translate-y-8 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                      ↗
                    </span>
                  </span>
                  <span className="relative text-2xl sm:text-3xl lg:text-4xl font-semibold text-white transition-all duration-300 ease-out group-hover:text-black group-hover:translate-x-2">
                    GitHub
                  </span>
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61558637158456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center gap-3 sm:gap-4 py-2.5 sm:py-3 px-3 border-b border-zinc-800 overflow-hidden transition-all duration-300 ease-out hover:border-[#f2e2c2]"
                >
                  <span className="absolute inset-0 bg-[#f2e2c2] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out" />
                  <span className="relative w-6 h-6 sm:w-8 sm:h-8 shrink-0 overflow-hidden">
                    <span className="absolute inset-0 flex items-center justify-center text-2xl sm:text-3xl leading-none text-[#f2e2c2] transition-all duration-300 ease-out group-hover:-translate-y-8 group-hover:opacity-0">
                      •
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center text-lg sm:text-xl text-black translate-y-8 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                      ↗
                    </span>
                  </span>
                  <span className="relative text-2xl sm:text-3xl lg:text-4xl font-semibold text-white transition-all duration-300 ease-out group-hover:text-black group-hover:translate-x-2">
                    Facebook
                  </span>
                </a>
              </div>

              <div className="flex flex-col sm:flex-row justify-between gap-3 pt-2 text-xs sm:text-sm text-zinc-400 border-t border-zinc-800">
                <div>
                  <p className="text-white font-medium">+91 86778 30380</p>
                  <p>kr.gauravbca7@gmail.com</p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="animate-pulse text-green-400">&#8226; Available For Work</p>
                  <p>India (Remote / Relocation)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
