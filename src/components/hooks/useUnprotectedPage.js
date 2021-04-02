import { useEffect } from "react";
import { useHistory } from "react-router";
import { goToHomeAdm } from "../../router/coordinator";

export function useUnprotectedPage() {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      goToHomeAdm(history);
    }
  }, [history]);
}

