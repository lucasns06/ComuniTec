import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Faz o scroll para o topo ao mudar de rota (sem suavidade)
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
