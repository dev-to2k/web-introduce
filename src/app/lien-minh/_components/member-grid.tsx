"use client";

import { memo, useMemo } from "react";
import MemberCard from "./member-card";
import { memberItems } from "./member-data";

interface MemberGridProps {
  filter?: string;
}

// Memoized component để tận dụng Next.js 15 caching
const MemberGrid = memo(function MemberGrid({ filter }: MemberGridProps) {
  // Memoize filtered items để tránh tính toán lại khi re-render
  const filteredItems = useMemo(() => {
    if (!filter) return memberItems;
    return memberItems.filter(
      (item) =>
        item.title.toLowerCase().includes(filter.toLowerCase()) ||
        item.tags.some((tag) =>
          tag.toLowerCase().includes(filter.toLowerCase())
        )
    );
  }, [filter]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
      {filteredItems.map((item, index) => (
        <MemberCard key={`${item.id}-${index}`} item={item} index={index} />
      ))}
    </div>
  );
});

// Đặt displayName để tối ưu debugging
MemberGrid.displayName = "MemberGrid";

export default MemberGrid;
