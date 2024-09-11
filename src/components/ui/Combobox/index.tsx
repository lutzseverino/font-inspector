import { ComboboxProps } from "./index.d";

import { Check, ChevronsUpDown } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button.tsx";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command.tsx";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover.tsx";
import { cn } from "@/lib/utils.ts";

export function Combobox<T>({
  className,
  items,
  value,
  onValueChange,
  placeholder,
  notFound,
  getLabel,
  getDisplayLabel = getLabel,
  getValue,
  hideChevrons = false,
  hideSearch = false,
  collisionPadding = 16,
  buttonProps,
}: ComboboxProps<T>) {
  const { t } = useTranslation("components/combobox/index");

  placeholder = placeholder ?? t("placeholder");
  notFound = notFound ?? t("not-found");

  const [open, setOpen] = useState(false);
  const [popoverWidth, setPopoverWidth] = useState<number | undefined>(
    undefined,
  );

  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleGetLabel = useCallback(getLabel, [getLabel]);
  const handleGetDisplayLabel = useCallback(getDisplayLabel, [getDisplayLabel]);
  const handleGetValue = useCallback(getValue, [getValue]);

  const filteredItems = useMemo(() => {
    return items.map((item) => ({
      label: handleGetLabel(item),
      value: handleGetValue(item),
    }));
  }, [items, handleGetLabel, handleGetValue]);

  const handleSelect = useCallback(
    (currentValue: string) => {
      if (currentValue !== value) onValueChange(currentValue);
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
          {...buttonProps}
          ref={buttonRef}
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={className}
        >
          {value
            ? handleGetDisplayLabel(
                items.find((item) => handleGetValue(item) === value)!,
              )
            : placeholder}
          {!hideChevrons && (
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="p-0"
        collisionPadding={collisionPadding}
        style={{ minWidth: popoverWidth, width: "min-content" }}
      >
        <Command>
          {!hideSearch && <CommandInput placeholder={placeholder} />}
          <CommandList>
            <CommandEmpty>
              <div className="text-nowrap px-6">{notFound}</div>
            </CommandEmpty>
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
