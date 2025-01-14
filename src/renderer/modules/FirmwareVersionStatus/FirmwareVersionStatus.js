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
import Badge from "../../component/Badge";

import { IconCheckmarkSm } from "../../component/Icon";

const Style = Styled.div`
margin-left:32px;
.versionsStatus {
    height: 116px;
    margin-bottom: 42px;
    background-color: ${({ theme }) => theme.styles.firmwareUpdatePanel.backgroundStripeColor};    
    border-bottom-left-radius: 16px;
    border-top-left-radius: 16px;
    overflow: hidden;
}
.versionStatusInner {
  display: flex;
  flex-wrap: nowrap;
  height: inherit;
  .versionStatusInstalled,
  .versionStatusNext {
    padding: 24px;
    h6 {
      margin-top: 6px;
      margin-bottom: 10px;
    }
  } 
  .versionStatusInstalled {
    flex: 1;
    background: ${({ theme }) => theme.styles.firmwareUpdatePanel.backgroundStripeGradientColor};
  }
  .versionStatusNext {
    position: relative;
    .caret {
      position: absolute;
      top: 24px;
      left: -6px;
      color: ${({ theme }) => theme.styles.firmwareUpdatePanel.caretColor};
    }
  }
}
h6 {
  color: ${({ theme }) => theme.styles.firmwareUpdatePanel.versionInstalledTitle};
}
.badge {
  color: ${({ theme }) => theme.styles.firmwareUpdatePanel.versionInstalledTitle};
  border-color: ${({ theme }) => theme.styles.firmwareUpdatePanel.badgeBorderColor};
} 
.versionStatusNext {
  h6 {
    color: ${({ theme }) => theme.styles.firmwareUpdatePanel.nextVersionAvaliableTitle};
  }
  .badge {
    color: ${({ theme }) => theme.styles.firmwareUpdatePanel.nextVersionAvaliableBadge};
    border-color: ${({ theme }) => theme.styles.firmwareUpdatePanel.badgeBorderColorActive};
  } 
}
.isUpdated {
  .versionStatusNext {
    .badge {  
      padding: 4px;
      color: ${({ theme }) => theme.styles.firmwareUpdatePanel.versionSuccessTitle};
      border-color: ${({ theme }) => theme.styles.firmwareUpdatePanel.versionSuccessBadge};
    } 
  }
}

`;
const FirmwareVersionStatus = ({ currentlyVersionRunning, latestVersionAvailable, isUpdated }) => {
  return (
    <Style>
      <div className={`versionsStatus ${isUpdated && "isUpdated"}`}>
        <div className="versionStatusInner">
          <div className="versionStatusInstalled">
            <Title text={i18n.firmwareUpdate.texts.currentlyRunningCardTitle} headingLevel={6} />
            <Badge content={currentlyVersionRunning} />
          </div>
          <div className="versionStatusNext">
            <svg className="caret" width={18} height={27} viewBox="0 0 18 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.4222 12.0346C17.2741 12.8258 17.2741 14.1742 16.4222 14.9654L4.11106 26.3998C2.83142 27.5883 0.750001 26.6808 0.750001 24.9343L0.750002 2.06565C0.750002 0.319217 2.83142 -0.588284 4.11107 0.600225L16.4222 12.0346Z"
                fill="currentColor"
              />
            </svg>
            {isUpdated ? (
              <>
                <Title text={i18n.firmwareUpdate.texts.latestVersionInstalled} headingLevel={6} />
                <Badge icon={<IconCheckmarkSm />} />
              </>
            ) : (
              <>
                <Title text={i18n.firmwareUpdate.texts.latestAvailableText} headingLevel={6} />
                <Badge content={latestVersionAvailable} />
              </>
            )}
          </div>
        </div>
      </div>
    </Style>
  );
};

export default FirmwareVersionStatus;
