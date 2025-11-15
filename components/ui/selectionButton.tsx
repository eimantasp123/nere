import { cn } from "@/lib/utils";

interface SelectionButtonProps {
  label: string;
  description?: string;
  selected: boolean;
  onClick: () => void;
}

export function SelectionButton({
  label,
  description,
  selected,
  onClick,
}: SelectionButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex w-full items-start gap-4 rounded-[20px] border bg-[#F6F5F1] px-5 py-2 text-left transition",
        selected
          ? "border-black bg-neutral-800 text-white"
          : "border-muted text-foreground",
      )}
    >
      {/* Left radio circle */}
      <div
        className={
          "mt-2 h-4 w-4 rounded-full border border-[#e9e9e9] bg-white transition"
        }
      />

      <div className="flex flex-col">
        <p className="text-sm font-medium">{label}</p>
        {description && (
          <p
            className={cn(
              "-mt-1 text-xs leading-normal break-words opacity-90",
              selected && "text-white",
            )}
          >
            {description}
          </p>
        )}
      </div>
    </button>
  );
}
