import { ReactNode, useContext, useState } from "react";
import { flowManagerContext } from "../../contexts/flowManagerContext";
import NewChatView from "../newChatView";
import TextInputComponent from "../textInputComponent";
import TextOutputComponent from "../textOutputComponent";
import { extractTypeFromLongId, removeCountFromString } from "../../utils/utils";
import AccordionComponent from "../AccordionComponent";
import { Badge } from "../ui/badge";
import ShadTooltip from "../ShadTooltipComponent";
import IconComponent from "../genericIconComponent";

export default function IOView(): JSX.Element {
  const { flowPool, inputIds, outputIds, inputTypes, outputTypes } =
    useContext(flowManagerContext);
  const options = inputIds.concat(outputIds);
  const [selectedView, setSelectedView] = useState<ReactNode>(handleSelectChange(options[0]));
  // if (outputTypes.includes("ChatOutput")) {
  //   return <NewChatView />;
  // }
  function handleSelectChange(selected: string) {
    const type = extractTypeFromLongId(selected);
    return <NewChatView />
    switch (type) {
      case "ChatOutput":
        return <NewChatView />;
        break;
    }
  }

  return (
    <div className="form-modal-iv-box">
      <div className="mr-6 flex h-full w-2/6 flex-col justify-start overflow-auto scrollbar-hide">
        <div className="file-component-arrangement">
          <IconComponent
            name="Variable"
            className=" file-component-variable"
          />
          <span className="file-component-variables-span text-md">
            Inputs
          </span>
        </div>
      </div>
      {selectedView}
    </div>
  );
}
