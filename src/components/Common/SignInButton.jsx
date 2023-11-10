import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function SignInButton() {
  const navigate = useNavigate();

  const isLoggedIn = false; // TODO: replace with actual variable from state manager
  const currentPath = window.location.pathname;

  if (!isLoggedIn && currentPath !== "/login")
    return (
      <Button variant="danger" onClick={(e) => navigate("/login")}>
        sign in
      </Button>
    );
  else return <></>;
}
