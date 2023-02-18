interface SelectItemBase {
    value: number | string | boolean
    label: string
}

interface SelectItem extends SelectItemBase {
    disabled?: boolean
}

export { SelectItem }
