import {
  arrow,
  computePosition,
  flip,
  hide,
  offset,
  shift,
} from '@floating-ui/dom'
import { type Ref } from 'vue'

export type Placements =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-start'
  | 'top-end'
  | 'right-start'
  | 'right-end'
  | 'bottom-start'
  | 'bottom-end'
  | 'left-start'
  | 'left-end'

export enum Placement {
  Top = 'top',
  Bottom = 'bottom',
  Left = 'left',
  Right = 'right',
  TopStart = 'top-start',
  TopEnd = 'top-end',
  RightStart = 'right-start',
  RightEnd = 'right-end',
  BottomStart = 'bottom-start',
  BottomEnd = 'bottom-end',
  LeftStart = 'left-start',
  LeftEnd = 'left-end',
}

export type Triggers = 'click' | 'hover' | 'manual'

export enum Trigger {
  Click = 'click',
  Hover = 'hover',
  Manual = 'manual',
}

export enum Theme {
  Tooltip = 'tooltip',
  Popover = 'popover',
  Dropdown = 'dropdown',
};

export async function update(
  { value: trigger }: Ref<HTMLDivElement>,
  { value: tooltip }: Ref<HTMLDivElement>,
  { value: arrowElement }: Ref<HTMLDivElement>,
  placement: Placements,
  offsetParam: number,
  padding: number,
  duration: number = 300,
  theme: Theme | string,
  extraData: any,
) {
  if (!trigger || !tooltip)
    return
  computePosition(trigger, tooltip, {
    placement,
    middleware: [
      offset(offsetParam),
      shift({ padding }),
      arrow({ element: arrowElement }),
      flip(),
      hide(),
    ],
  }).then(({ x, y, placement, middlewareData }) => {
    if (!tooltip)
      return

    middlewareData.flip && tooltip.setAttribute('data-placement', placement)

    const parentLeft = trigger.offsetParent?.getBoundingClientRect().left
    const parentBottom = trigger.offsetParent?.getBoundingClientRect().bottom
    const parentWidth = trigger.offsetParent?.getBoundingClientRect().width

    const safeParentBottom = extraData?.hideDetails ? Number(parentBottom) - 16 : parentBottom

    Object.assign(tooltip.style, {
      maxWidth: theme === Theme.Dropdown ? `${parentWidth}px` : 'auto',
      left: theme === Theme.Dropdown ? `${parentLeft}px` : `${x}px`,
      top: theme === Theme.Dropdown ? `${safeParentBottom}px` : `${y}px`,
      animation: `r-tooltip-show ${duration}ms ease-in-out forwards`,
      transformOrigin: 'start',
    })

    if (arrowElement && middlewareData.arrow) {
      const { x: arrowX, y: arrowY } = middlewareData.arrow

      const staticSide = {
        top: Placement.Bottom,
        right: Placement.Left,
        bottom: Placement.Top,
        left: Placement.Right,
      }[placement.split('-')[0]]

      Object.assign(arrowElement.style, {
        left: x != null ? `${arrowX}px` : '',
        top: y != null ? `${arrowY}px` : '',
        right: '',
        bottom: '',
        [`${staticSide}`]: '-4px',
      })
    }
  })
}
