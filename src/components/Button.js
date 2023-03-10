const Button = ({ children, ...props }) => {
  return (
    <button
      className="bg-slate-700 w-full shadow-sm block rounded-sm px-2 py-1.5 ring-0 text-white focus:outline-none hover:bg-slate-900"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
