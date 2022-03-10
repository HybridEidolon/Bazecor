// -*- mode: js-jsx -*-
/* Bazecor
 * Copyright (C) 2022  Dygmalab, Inc.
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import React from "react";
import Styled from "styled-components";
import i18n from "../../i18n";

import Title from "../../component/Title";
import { RegularButton } from "../../component/Button";

const Style = Styled.div`   
width: 100%;  
height:inherit;
.firmware-wrapper {
  max-width: 680px;   
  width: 100%;
  margin: auto;
  
  .firmware-row {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
  }
  .firmware-content {
    flex: 0 0 66%;
    background: ${({ theme }) => theme.styles.firmwareUpdatePanel.backgroundContent}; 
  }
  .firmware-sidebar {
    flex: 0 0 34%;
    background: ${({ theme }) => theme.styles.firmwareUpdatePanel.backgroundSidebar}; 
  }
  .firmware-content--inner {
    padding: 32px;
  }   

  .borderLeftTopRadius {
    border-top-left-radius: 14px;
  } 
  .borderRightTopRadius {
    border-top-right-radius: 14px;
  }
  .borderLeftBottomRadius {
    border-bottom-left-radius: 14px;
  } 
  .borderRightBottomRadius {
    border-bottom-right-radius: 14px;
  }
}
.firmware-footer {
  width: 100%;
  margin-top: 62px;
}
.holdButton { 
  
  margin-bottom: 32px;
}
`;

const FirmwareUpdateProcess = ({ onCancelDialog }) => {
  return (
    <Style>
      <div className="firmware-wrapper upgrade-firmware">
        <div className="firmware-row">Steps</div>
        <div className="firmware-row">Keyboard</div>
        <div className="firmware-footer">
          <div className="holdButton">
            <RegularButton
              className="flashingbutton nooutlined"
              style="outline"
              buttonText="Cancel update process"
              onClick={onCancelDialog}
            />
          </div>
          <div className="holdTootip">
            <Title
              text={i18n.firmwareUpdate.texts.flashCardHelp}
              headingLevel={6}
              tooltip={i18n.firmwareUpdate.texts.flashCardHelpTooltip}
              tooltipSize="wide"
            />
          </div>
        </div>
      </div>
    </Style>
  );
};

export default FirmwareUpdateProcess;