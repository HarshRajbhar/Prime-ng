import { Component } from '@angular/core';
import { TimelineData, TreenodedataArray, other1 } from '../../assets/big_data';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-other-compo',
  templateUrl: './other-compo.component.html',
  styleUrl: './other-compo.component.scss',
})
export class OtherCompoComponent {
  value!: number;
  selectedNodes: any;
  nodes = other1;
  TreeNodeData: TreeNode[] = [
    {
      label: 'F.C Barcelona',
      expanded: true,
      children: [
        {
          label: 'Argentina',
          expanded: true,
          children: [
            {
              label: 'Argentina',
            },
            {
              label: 'France',
            },
          ],
        },
        {
          label: 'France',
          expanded: true,
          children: [
            {
              label: 'France',
            },
            {
              label: 'Morocco',
            },
          ],
        },
      ],
    },
  ];
  TreeNodeData2: TreeNode[] = TreenodedataArray;
  Timeline = TimelineData;
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
}
