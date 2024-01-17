// "use client";
import "./powerbi.css";

import { models } from 'powerbi-client';
import { PowerBIEmbed } from 'powerbi-client-react';
import { report } from "process";

export default function Report(props) {
  const embedConfig = {
    type: 'report',   // Supported types: report, dashboard, tile, visual, qna and paginated report
    id: process.env.NEXT_PUBLIC_SEMED_DADOSGERAIS_REPORT_ID,
    embedUrl: `https://app.powerbi.com/reportEmbed?reportId=${process.env.NEXT_PUBLIC_SEMED_DADOSGERAIS_REPORT_ID}&groupId=${process.env.NEXT_PUBLIC_SEMED_DADOSGERAIS_GROUP_ID}`,
    accessToken: props.token,    // Keep as empty string, null or undefined
    tokenType: models.TokenType.Embed
  };

  return (

    <PowerBIEmbed
      embedConfig={embedConfig}
      eventHandlers={
        new Map([
          ['loaded', function () { console.log('Report loaded'); }],
          ['rendered', function () { console.log('Report rendered'); }],
          ['error', function (event) { console.log(event.detail); }],
          ['visualClicked', () => console.log('visual clicked')],
          ['pageChanged', (event) => console.log(event)],
        ])
      }

      cssClassName={"reportClass"}

      getEmbeddedComponent={(embeddedReport) => {
        if (typeof (window) !== 'undefined' && window !== null) window.report = embeddedReport;

      }}
    />
  );
}