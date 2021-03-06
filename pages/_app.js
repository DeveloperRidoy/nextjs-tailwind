import "tailwindcss/tailwind.css";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="max-w-[1500px] mx-auto">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp
