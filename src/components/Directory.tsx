"use client";

import { useState, useMemo } from "react";
import { Search, ExternalLink, Tag, ChevronDown, ChevronRight, Filter } from "lucide-react";
import { categories, searchCompanies, allCompanies, type Company } from "@/data/companies";

export default function Directory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(categories.map((c) => c.name))
  );

  const filteredCategories = useMemo(() => {
    if (searchQuery.trim()) {
      const results = searchCompanies(searchQuery);
      const resultNames = new Set(results.map((c) => c.name));
      return categories
        .map((cat) => ({
          ...cat,
          companies: cat.companies.filter((c) => resultNames.has(c.name)),
        }))
        .filter((cat) => cat.companies.length > 0);
    }

    if (selectedCategory) {
      return categories.filter((c) => c.name === selectedCategory);
    }

    return categories;
  }, [searchQuery, selectedCategory]);

  const totalShown = filteredCategories.reduce(
    (sum, cat) => sum + cat.companies.length,
    0
  );

  function toggleCategory(name: string) {
    setExpandedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(name)) {
        next.delete(name);
      } else {
        next.add(name);
      }
      return next;
    });
  }

  return (
    <div className="flex flex-col h-full">
      {/* Search and filters */}
      <div className="p-4 border-b border-gray-800 space-y-3">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setSelectedCategory(null);
            }}
            placeholder="Search companies, categories, or tags..."
            className="w-full bg-gray-800 border border-gray-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
          />
        </div>

        {/* Category filter chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
          <Filter size={14} className="text-gray-500 flex-shrink-0" />
          <button
            onClick={() => {
              setSelectedCategory(null);
              setSearchQuery("");
            }}
            className={`text-xs px-3 py-1 rounded-full whitespace-nowrap transition-colors ${
              !selectedCategory && !searchQuery
                ? "bg-teal-600 text-white"
                : "bg-gray-800 text-gray-400 border border-gray-700 hover:border-teal-600"
            }`}
          >
            All ({allCompanies.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => {
                setSelectedCategory(
                  selectedCategory === cat.name ? null : cat.name
                );
                setSearchQuery("");
              }}
              className={`text-xs px-3 py-1 rounded-full whitespace-nowrap transition-colors ${
                selectedCategory === cat.name
                  ? "bg-teal-600 text-white"
                  : "bg-gray-800 text-gray-400 border border-gray-700 hover:border-teal-600"
              }`}
            >
              {cat.name} ({cat.companies.length})
            </button>
          ))}
        </div>

        <div className="text-xs text-gray-500">
          Showing {totalShown} companies across{" "}
          {filteredCategories.length} categories
          {searchQuery && ` matching "${searchQuery}"`}
        </div>
      </div>

      {/* Company listings */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {filteredCategories.map((category) => (
          <div
            key={category.name}
            className="border border-gray-800 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => toggleCategory(category.name)}
              className="w-full flex items-center justify-between p-4 bg-gray-800/50 hover:bg-gray-800 transition-colors text-left"
            >
              <div>
                <h3 className="font-semibold text-white text-sm">
                  {category.name}
                </h3>
                <p className="text-xs text-gray-400 mt-0.5">
                  {category.description.slice(0, 100)}...
                </p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0 ml-3">
                <span className="text-xs bg-teal-600/20 text-teal-400 px-2 py-0.5 rounded-full">
                  {category.companies.length}
                </span>
                {expandedCategories.has(category.name) ? (
                  <ChevronDown size={16} className="text-gray-500" />
                ) : (
                  <ChevronRight size={16} className="text-gray-500" />
                )}
              </div>
            </button>

            {expandedCategories.has(category.name) && (
              <div className="divide-y divide-gray-800">
                {category.companies.map((company) => (
                  <CompanyCard key={company.name} company={company} />
                ))}
              </div>
            )}
          </div>
        ))}

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <p className="text-lg mb-2">No companies found</p>
            <p className="text-sm">
              Try adjusting your search or browse all categories.
            </p>
          </div>
        )}

        {/* Attribution */}
        <div className="text-center py-6 text-xs text-gray-600">
          Data sourced from the{" "}
          <a
            href="https://thegerontechnologist.com/wp-content/uploads/2025/11/2025-AgeTech-Market-Map-Final-Nov.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-500 hover:text-teal-400 underline"
          >
            2025 AgeTech Market Map
          </a>{" "}
          by TheGerontechnologist
        </div>
      </div>
    </div>
  );
}

function CompanyCard({ company }: { company: Company }) {
  return (
    <div className="p-4 hover:bg-gray-800/30 transition-colors">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h4 className="font-medium text-white text-sm">{company.name}</h4>
            {company.website && (
              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-500 hover:text-teal-400 flex-shrink-0"
              >
                <ExternalLink size={14} />
              </a>
            )}
          </div>
          <p className="text-xs text-gray-400 mt-1 leading-relaxed">
            {company.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {company.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 text-[10px] bg-gray-800 text-gray-400 px-2 py-0.5 rounded-full border border-gray-700"
              >
                <Tag size={8} />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
