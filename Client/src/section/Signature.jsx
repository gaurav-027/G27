import TextPressure from '../components/TextPressure'

export default function Signature() {
  return (
    <div className="bg-black rounded-t-[40px] sm:rounded-t-[80px] border-t-2 border-white/20 px-4 sm:px-10 lg:px-20 sticky bottom-0 py-2 sm:py-4 overflow-hidden">
      <TextPressure
        text="GAURAV"
        flex
        alpha={false}
        stroke={false}
        width
        weight
        italic
        textColor="#ffffff"
        strokeColor="#5227FF"
        minFontSize={20}
      />
    </div>
  );
}
