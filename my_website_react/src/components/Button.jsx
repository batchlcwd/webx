const MyButton = ({ title }) => 
  {
  return (
    <button className="bg-neutral-800 m-1.5 text-white px-2 py-1 rounded cursor-pointer hover:bg-neutral-700 transition-all duration-400">
      {title}
    </button>
  );
};

export default MyButton;
