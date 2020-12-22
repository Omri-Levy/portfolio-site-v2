import React from "react";
import useDevice from "../../../hooks/useDevice/useDevice";
import { Container } from "../../Layout/Container";
import { DesktopIllustration } from "./DesktopIllustration";
import { MobileIllustration } from "./MobileIllustration";
import { TabletIllustration } from "./TabletIllustration";

const LandingPage: React.FunctionComponent = () => {
  const { isMobile, isDesktop, isTablet, isIpadPro } = useDevice();

  let content;

  if (isMobile || isIpadPro) {
    content = <MobileIllustration />;
  } else if (isDesktop) {
    content = <DesktopIllustration />;
  } else if (isTablet) {
    content = <TabletIllustration />;
  } else {
    content = <TabletIllustration />;
  }

  return <Container>{content}</Container>;
};

export default LandingPage;
