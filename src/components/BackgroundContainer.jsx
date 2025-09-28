import "../App.css";

export default function BackgroundContainer({ children }) {
  return (
    <div className="bg-[#D9D9D9] min-h-screen min-w-screen flex justify-center items-center ">
      {children}
    </div>
  );
}
