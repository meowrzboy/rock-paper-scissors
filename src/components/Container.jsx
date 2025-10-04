import "../App.css";

export default function Container({ children }) {
  return (
    <div className="mx-4 min-w-max justify-center flex items-center min-h-[100vh] relative">
      {children}
    </div>
  );
}
