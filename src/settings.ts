export class BubblesSettings {
  // filter
  depth: number = 1;                  // 1 - 5
  linksIncoming: boolean = true;
  linksOutgoing: boolean = true;
  linksNeighbor: boolean = true;
  linksTags: boolean = true;
  linksAttachments: boolean = true;
  linksExistingFilesOnly: boolean = true; // Disregard empty directories

  // bubbles
  bubbles: boolean = true;
  bubbleLinks: boolean = true;
  bubbleCrossingConnections: boolean = true;
  bubbleConnectionsAddWeight: boolean = true;
  bubbleInnerTagging: boolean = true;
  bubbleOuterTagging: boolean = true;

  // display
  arrows: boolean = true;
  textFadeThreshold: number = 0;  // -3.00 - 3.00
  nodeSize: number = 1;           // 0.10 - 5.00
  linkThickness: number = 1;      // 0.10 - 5.00

  // forces
  centerForce: number = 0.5;  // 0.00 - 1.00
  repelForce: number = 10;   // 0.00 - 20.00
  linkForce: number = 0.5;    // 0.00 - 1.00
  linkDistance: number = 265; // 30 - 500

}
