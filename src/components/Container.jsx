import "../App.css";

export default function Container({ children }) {
  return (
    <div className="h-[100%] w-[100%] flex justify-center items-center min-h-[100vh] relative">
      {children}
    </div>
  );
}
