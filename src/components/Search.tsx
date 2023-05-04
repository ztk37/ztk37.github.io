import Fuse from "fuse.js";
import { ReactElement, useMemo, useState } from "react";

export type SearchableItem = {
  title: string;
  summary: string;
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
      <div>
        <input
          type="search"
          autoComplete="-1"
          placeholder="Search term..."
          onInput={(evt) => setSearchTerm(evt.currentTarget.value)}
        />
      </div>
      <ul>
        {searchTerm === ""
          ? items.map((item) => (
              <li>
                <h2>{item.title}</h2>
                <p>{item.summary}</p>
                <p>
                  <a href={item.url}>View</a>
                </p>
              </li>
            ))
          : results.map((result) => (
              <li>
                <h2>{result.item.title}</h2>
                <p>{result.item.summary}</p>
                <p>
                  <a href={result.item.url}>View</a>
                </p>
              </li>
            ))}
      </ul>
    </div>
  );
}
