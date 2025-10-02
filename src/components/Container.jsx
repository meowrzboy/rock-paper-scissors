import "../App.css";

export default function Container({ children }) {
  return (
    <div className="flex justify-center items-center min-h-[100vh] relative">
      {children}
    </div>
  );
}
