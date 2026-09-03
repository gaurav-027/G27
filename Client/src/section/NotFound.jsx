import { Link } from 'react-router-dom';
import FuzzyText from '../components/FuzzyText.jsx';

export default function NotFound() {
  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center p-4 gap-8">
      <FuzzyText
        baseIntensity={0.2}
        hoverIntensity={0.5}
        enableHover
        fontSize="clamp(4rem, 15vw, 10rem)"
      >
        404
      </FuzzyText>
      <Link
        to="/"
        className="px-6 py-3 rounded-full bg-white text-black font-semibold text-base sm:text-lg hover:bg-[#f2e2c2] transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
