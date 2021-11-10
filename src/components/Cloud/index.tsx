import * as React from "react";
import { Content, Animation } from "./styles";

interface CloudProps {
  margin: string;
}

const Cloud: React.FC<CloudProps> = ({ margin }) => {
  return (
    <Animation>
      <Content margin={margin} />
    </Animation>
  );
};

export default Cloud;
