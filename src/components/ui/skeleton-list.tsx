import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonList() {
  return (
    <div className="w-full flex flex-col gap-8">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
      </div>
  );
}