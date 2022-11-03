import { TabsNames } from "../../Utils/globalTypes";

export type TabsNamesArray = {
    key: TabsNames,
    title: string,
    disabled?: boolean
}
export type TabsProps = {
    tabs: Array<TabsNamesArray>,
    onClick: (id: TabsNames) => void,
    activeTab: TabsNames
}