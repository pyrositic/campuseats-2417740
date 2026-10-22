export default function ErrorMessage({ message, onRetry }) {
  return (
    <div>
      <p>Something went wrong: {message}</p>
      <button onClick={onRetry}>Try again</button>
    </div>
  );
}
