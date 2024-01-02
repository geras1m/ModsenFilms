import { Button } from "@components/ErrorBoundary/styled";

export const ReloadBtn = () => {
  const refreshPage = () => {
    window.location.reload();
  };

  return <Button onClick={refreshPage}>Reload the page</Button>;
};
