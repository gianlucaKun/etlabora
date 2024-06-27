declare module "react-scroll" {
  import * as React from "react";

  interface ScrollElementProps {
    name: string;
    children: React.ReactNode;
  }

  interface ScrollProps {
    duration?: number;
    delay?: number;
    smooth?: boolean | string;
    offset?: number;
    isDynamic?: boolean;
    ignoreCancelEvents?: boolean;
    spy?: boolean;
    hashSpy?: boolean;
    onSetActive?: () => void;
    onSetInactive?: () => void;
    onChange?: () => void;
    containerId?: string;
    activeClass?: string;
    to?: string;
  }

  export class Element extends React.Component<ScrollElementProps, any> {}
  export function scroller(): {
    scrollTo: (to: string, props: ScrollProps) => void;
  };
}
declare module "leaflet";
