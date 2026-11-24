"use client";

import * as React from "react";
import { Select as BaseSelect } from "@base-ui/react/select";
import { Combobox } from "@base-ui/react/combobox";
import { Check, ChevronDown, Search } from "lucide-react";

import { cn } from "@/lib/utils";

export type SelectOption = {
  value: string;
  label: string;
  /** Optional second line shown under the label inside the menu. */
  hint?: string;
};

type SelectProps = {
  options: readonly SelectOption[];
  value: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
  id?: string;
  /** Submitted with native forms (renders a hidden input). */
  name?: string;
  required?: boolean;
  disabled?: boolean;
  /** Accessible name when there is no associated <label htmlFor>. */
  "aria-label"?: string;
  /**
   * Show a search box inside the menu. Defaults to on for long lists
   * (more than 10 options).
   */
  searchable?: boolean;
  searchPlaceholder?: string;
  /** Classes for the trigger button; merged over the defaults. */
  className?: string;
  /** Classes for the value text inside the trigger. */
  valueClassName?: string;
  /** Hide the default box styling (border, background, padding, height). */
  bare?: boolean;
};

const triggerBase =
  "group/select relative flex w-full min-w-0 cursor-pointer items-center justify-between gap-2 text-left outline-none select-none transition-[border-color,box-shadow,background-color] duration-150 disabled:cursor-not-allowed disabled:opacity-60 data-disabled:cursor-not-allowed data-disabled:opacity-60";

const triggerBox =
  "h-11 rounded-xl border border-slate-300 bg-white px-3.5 text-sm text-slate-900 hover:border-slate-400 focus-visible:border-[#1D5BD8] focus-visible:ring-2 focus-visible:ring-[#1D5BD8]/25 data-popup-open:border-[#1D5BD8] data-popup-open:ring-2 data-popup-open:ring-[#1D5BD8]/25";

const positionerCls = "z-[1000] outline-none";

const popupCls =
  "min-w-[var(--anchor-width)] max-w-[min(var(--available-width),28rem)] origin-[var(--transform-origin)] overflow-hidden rounded-xl border border-slate-200 bg-white text-slate-900 shadow-[0_18px_48px_-12px_rgba(15,23,42,0.28)] outline-none transition-[transform,opacity] duration-150 ease-out data-starting-style:scale-[0.97] data-starting-style:opacity-0 data-ending-style:scale-[0.97] data-ending-style:opacity-0";

const itemCls =
  "relative flex w-full cursor-pointer scroll-my-1 items-center gap-3 rounded-lg px-3 py-2.5 text-sm leading-snug text-slate-800 outline-none select-none data-highlighted:bg-[#1D5BD8]/[0.08] data-highlighted:text-[#1D5BD8] data-selected:font-semibold data-selected:text-[#1D5BD8] data-disabled:cursor-not-allowed data-disabled:opacity-50";

function Chevron({ className }: { className?: string }) {
  return (
    <ChevronDown
      aria-hidden="true"
      className={cn(
        "size-4 shrink-0 text-slate-500 transition-transform duration-200 group-data-popup-open/select:rotate-180 group-data-popup-open/select:text-[#1D5BD8]",
        className,
      )}
    />
  );
}

function ItemBody({ option, indicator }: { option: SelectOption; indicator: React.ReactNode }) {
  return (
    <>
      <span className="min-w-0 flex-1">
        <span className="block truncate">{option.label}</span>
        {option.hint && (
          <span className="mt-0.5 block truncate text-xs font-normal text-slate-500">{option.hint}</span>
        )}
      </span>
      <span className="flex size-4 shrink-0 items-center justify-center">{indicator}</span>
    </>
  );
}

export function Select({
  options,
  value,
  onValueChange,
  placeholder = "Select…",
  id,
  name,
  required,
  disabled,
  searchable,
  searchPlaceholder = "Search…",
  className,
  valueClassName,
  bare,
  "aria-label": ariaLabel,
}: SelectProps) {
  const useSearch = searchable ?? options.length > 10;
  const triggerCls = cn(triggerBase, !bare && triggerBox, className);
  const selected = options.find((o) => o.value === value) ?? null;

  if (useSearch) {
    return (
      <Combobox.Root<SelectOption>
        items={options as SelectOption[]}
        value={selected}
        onValueChange={(next) => onValueChange(next?.value ?? "")}
        isItemEqualToValue={(a, b) => a.value === b.value}
        itemToStringLabel={(o) => o.label}
        itemToStringValue={(o) => o.value}
        name={name}
        required={required}
        disabled={disabled}
      >
        <Combobox.Trigger id={id} aria-label={ariaLabel} className={triggerCls}>
          <span
            className={cn(
              "min-w-0 flex-1 truncate",
              !selected && "text-slate-400",
              valueClassName,
            )}
          >
            {selected?.label ?? placeholder}
          </span>
          <Chevron />
        </Combobox.Trigger>
        <Combobox.Portal>
          <Combobox.Positioner className={positionerCls} align="start" sideOffset={6} collisionPadding={12}>
            <Combobox.Popup className={cn(popupCls, "w-[max(var(--anchor-width),16rem)]")} aria-label={ariaLabel ?? placeholder}>
              <div className="flex items-center gap-2 border-b border-slate-100 px-3">
                <Search aria-hidden="true" className="size-4 shrink-0 text-slate-400" />
                <Combobox.Input
                  placeholder={searchPlaceholder}
                  className="h-11 w-full min-w-0 bg-transparent text-base text-slate-900 outline-none placeholder:text-slate-400 sm:text-sm"
                />
              </div>
              <Combobox.Empty>
                <div className="px-4 py-6 text-center text-sm text-slate-500">No matches found</div>
              </Combobox.Empty>
              <Combobox.List className="max-h-[min(18rem,calc(var(--available-height)-3rem))] overflow-y-auto overscroll-contain p-1 scroll-py-1 data-empty:p-0">
                {(option: SelectOption) => (
                  <Combobox.Item key={option.value} value={option} className={itemCls}>
                    <ItemBody
                      option={option}
                      indicator={
                        <Combobox.ItemIndicator>
                          <Check className="size-4" strokeWidth={2.5} />
                        </Combobox.ItemIndicator>
                      }
                    />
                  </Combobox.Item>
                )}
              </Combobox.List>
            </Combobox.Popup>
          </Combobox.Positioner>
        </Combobox.Portal>
      </Combobox.Root>
    );
  }

  return (
    <BaseSelect.Root
      value={value === "" ? null : value}
      onValueChange={(next) => onValueChange((next as string | null) ?? "")}
      items={options.map((o) => ({ value: o.value, label: o.label }))}
      name={name}
      required={required}
      disabled={disabled}
    >
      <BaseSelect.Trigger id={id} aria-label={ariaLabel} className={triggerCls}>
        <BaseSelect.Value
          placeholder={placeholder}
          className={cn("min-w-0 flex-1 truncate data-placeholder:text-slate-400", valueClassName)}
        />
        <Chevron />
      </BaseSelect.Trigger>
      <BaseSelect.Portal>
        <BaseSelect.Positioner
          className={positionerCls}
          sideOffset={6}
          collisionPadding={12}
          alignItemWithTrigger={false}
        >
          <BaseSelect.Popup className={popupCls}>
            <BaseSelect.List className="max-h-[min(20rem,var(--available-height))] overflow-y-auto overscroll-contain p-1 scroll-py-1">
              {options.map((option) => (
                <BaseSelect.Item key={option.value} value={option.value} className={itemCls}>
                  <ItemBody
                    option={option}
                    indicator={
                      <BaseSelect.ItemIndicator>
                        <Check className="size-4" strokeWidth={2.5} />
                      </BaseSelect.ItemIndicator>
                    }
                  />
                </BaseSelect.Item>
              ))}
            </BaseSelect.List>
          </BaseSelect.Popup>
        </BaseSelect.Positioner>
      </BaseSelect.Portal>
    </BaseSelect.Root>
  );
}
