import { ComboboxProps } from "./index.d";
import { Check, ChevronsUpDown } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export function Combobox<T>({
  className,
  items,
  value,
  onValueChange,
  placeholder,
  notFound,
  getLabel,
  getValue,
}: ComboboxProps<T>) {
  const [open, setOpen] = useState(false);
  const [popoverWidth, setPopoverWidth] = useState<number | undefined>(
    undefined,
  );
  const buttonRef = useRef<HTMLButtonElement>(null);

  const memoizedGetLabel = useCallback(getLabel, [getLabel]);
  const memoizedGetValue = useCallback(getValue, [getValue]);

  const filteredItems = useMemo(() => {
    return items.map((item) => ({
      label: memoizedGetLabel(item),
      value: memoizedGetValue(item),
    }));
  }, [items, memoizedGetLabel, memoizedGetValue]);

  const handleSelect = useCallback(
    (currentValue: string) => {
      onValueChange(currentValue === value ? "" : currentValue);
      setOpen(false);
    },
    [onValueChange, value],
  );

  useEffect(() => {
    if (buttonRef.current) setPopoverWidth(buttonRef.current.offsetWidth);
  }, [open]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          ref={buttonRef}
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(className, "justify-between")}
        >
          {value
            ? memoizedGetLabel(
                items.find((item) => memoizedGetValue(item) === value)!,
              )
            : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0" style={{ width: popoverWidth }}>
        <Command>
          <CommandInput placeholder={placeholder} />
          <CommandList>
            <CommandEmpty>{notFound}</CommandEmpty>
            <CommandGroup>
              {filteredItems.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={handleSelect}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === item.value ? "opacity-100" : "opacity-0",
                    )}
                  />
                  {item.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
