import Fuse from "fuse.js";
import { ReactElement, useMemo, useState } from "react";

export type SearchableItem = {
  title: string;
  summary: string;
  tags: string[];
  url: string;
};

export default function Search({
  items,
  options,
}: {
  items: SearchableItem[];
  options: Fuse.IFuseOptions<SearchableItem>;
}): ReactElement {
  const [searchTerm, setSearchTerm] = useState("");

  const fuse = useMemo(() => new Fuse(items, options), [items, options]);

  const results = useMemo(() => fuse.search(searchTerm), [fuse, searchTerm]);

  return (
    <div>
      <div className="py-2">
        <input
          type="search"
          autoComplete="-1"
          className="w-full rounded pl-1 bg-[#1f2023] text-white"
          placeholder="Search..."
          onChange={(evt) => setSearchTerm(evt.currentTarget.value)}
        />
      </div>
      <ul>
        {searchTerm === ""
          ? items.map((item) => <ResultItem item={item} />)
          : results.map((result) => <ResultItem item={result.item} />)}
      </ul>
    </div>
  );
}

function ResultItem({ item }: { item: SearchableItem }): ReactElement {
  return (
    <li className="bg-[#1f2023] mb-2 p-2 rounded text-white">
      {item.tags.length > 0 && (
        <ul className="flex gap-1">
          {item.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      )}
      <h2>{item.title}</h2>
      <p>{item.summary}</p>
      <p>
        <a href={item.url}>View</a>
      </p>
    </li>
  );
}
