const GlassMorphicContainer = ({ children, className = "" }) => (
    <div className={`backdrop-blur-md bg-white/10 rounded-2xl shadow-xl border border-white/20 transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
  
  const SectionTitle = ({ children }) => (
    <h2 className="text-3xl md:text-5xl font-bold font-explorer text-center mb-10 bg-clip-text text-transparent bg-gradient-to-t from-blue-800 to-white animate-[fadeIn_1s_ease-in-out]">
      {children}
    </h2>
  );

  export {GlassMorphicContainer, SectionTitle}