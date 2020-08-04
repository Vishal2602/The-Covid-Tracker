import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
function Tweets() {
  return (
    <div>
      <TwitterTimelineEmbed
        sourceType="WHO"
        screenName="WHO"
        options={{ height: 300 }}
      />
    </div>
  );
}

export default Tweets;
