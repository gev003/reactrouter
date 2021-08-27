import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div>
      <h2>Error Page</h2>
      <Link to="/">
        <button>Back To Home</button>
      </Link>
    </div>
  );
}
