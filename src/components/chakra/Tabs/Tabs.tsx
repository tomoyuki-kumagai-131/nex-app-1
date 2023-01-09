import { tabsAnatomy } from "@chakra-ui/anatomy"
import { createMultiStyleConfigHelpers } from "@chakra-ui/react"

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys)

const enclosed = definePartsStyle({
  tablist: {
    gap: "1",
    alignItems: "flex-end",
    borderBottomWidth: "2px",
    borderBottomColor: "black.200",
  },
  tabpanel: {
    p: 0,
  },
  tab: {
    borderBottomColor: "black.200",
    backgroundColor: "black.200",
    px: 3,
    py: 2,
    fontSize: "2xs",
    fontWeight: "semibold",
    borderWidth: "0 0 1px 0",
    _selected: {
      py: 3,
      backgroundColor: "black.300",
      color: "black.900",
      borderBottomColor: "black.200",
    },
  },
})

const roundness = definePartsStyle({
  tab: {
    border: "1px solid #DDDDDD",
    backgroundColor: "white",
    fontSize: "2xs",
    fontWeight: "semibold",
    _selected: {
      backgroundColor: "#DDDDDD",
      color: "black.900",
    },
    _even: {
      borderRight: "none",
      borderLeft: "none",
    },
    _first: {
      borderLeft: "1px solid #DDDDDD",
      borderRadius: "12px 0px 0px 12px",
    },
    _last: {
      borderRight: "1px solid #DDDDDD",
      borderRadius: "0px 12px 12px 0px",
    },
  },
})

export const Tabs = defineMultiStyleConfig({
  baseStyle: {},
  defaultProps: {
    variant: "enclosed",
  },
  variants: {
    enclosed,
    roundness,
  },
})
