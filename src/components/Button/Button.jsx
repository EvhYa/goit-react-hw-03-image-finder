import { Button } from "./Button.styled";

export function LoadButton({ onLoadMore }) {
  return (
    <Button type="button" onClick={onLoadMore}>
      Load more
    </Button>
  );
}
