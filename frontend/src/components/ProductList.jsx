import HighlightText from "./HighlightText";

export default function ProductList({ items, keyword }) {
  if (items.length === 0) {
    return <p>No results found</p>;
  }

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <strong>
            <HighlightText text={item.name} keyword={keyword} />
          </strong>{" "}
          - ${item.price}
        </li>
      ))}
    </ul>
  );
}