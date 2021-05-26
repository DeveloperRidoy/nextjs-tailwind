function Hamburger({className, children, onClick}) {
    return (
      <button className={`text-3xl w-8 focus:outline-none ${className}`} onClick={onClick}>
        <div className="p-[1px] my-2 bg-white"></div>
        <div className="p-[1px] my-2 bg-white"></div>
        <div className="p-[1px] my-2 bg-white"></div>
        {children} 
      </button>
    );
}

export default Hamburger
