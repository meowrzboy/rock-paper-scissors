import "../App.css";

export default function Button({ children }) {
  return (
    <button className="cursor-pointer w-[170px] h-[60px] rounded-[14px] bg-[#DF2E38] flex justify-center items-center">
      <div className="font-display font-bold text-[25px] text-white">
        {children}
      </div>
    </button>
  );
}
