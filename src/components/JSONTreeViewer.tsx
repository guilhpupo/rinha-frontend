interface Props {
  json: JSON;
}

export default function JSONTreeViewer({ json }: Props) {
  function renderJSONTree(data) {
    if (typeof data === "object") {
      return (
        <ul className="ml-2">
          {Object.keys(data).map((key) => (
            <li key={key}>
              <strong>{key}:</strong>
              {renderJSONTree(data[key])}
            </li>
          ))}
        </ul>
      );
    } else {
      return <span>"{data}"</span>;
    }
  }
  return (
    <ul>
      <li>{renderJSONTree(json)}</li>
    </ul>
  );
}
