import "../App.css";

export default function Container({ children }) {
  return (
    <div className="p-4 w-full min-w-max justify-center flex items-center min-h-[100vh] relative">
      {children}
    </div>
  );
}
