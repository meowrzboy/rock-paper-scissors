import "../App.css";

export default function Container({ children }) {
  return <div className="flex gap-[32px] flex-col">{children}</div>;
}
