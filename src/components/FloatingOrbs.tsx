export default function FloatingOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      <div 
        className="absolute top-[20%] left-[10%] w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] opacity-60"
        style={{ animation: "floatY 10s ease-in-out infinite alternate" }}
      />
      <div 
        className="absolute top-[60%] right-[10%] w-[30rem] h-[30rem] bg-violet-600/20 rounded-full blur-[150px] opacity-60"
        style={{ animation: "floatY 12s ease-in-out infinite alternate-reverse" }}
      />
      <div 
        className="absolute bottom-[-10%] left-[30%] w-[25rem] h-[25rem] bg-magenta-500/10 rounded-full blur-[100px] opacity-50"
        style={{ animation: "floatY 14s ease-in-out infinite alternate" }}
      />
    </div>
  );
}
