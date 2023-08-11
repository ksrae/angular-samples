import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { TreeviewChildComponent } from "./treeview-child/treeview-child.component";

interface TreeNode {
  name: string;
  key: string;
  children?: TreeNode[];
}

@Component({
  selector: 'app-treeview',
  standalone: true,
  imports: [
    CommonModule,
    TreeviewChildComponent
  ],
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeviewComponent {
  TREE_DATA: TreeNode[] = [
    {
      name: 'parent 1',
      key: '1',
      children: [
        {
          name: 'parent 1-0',
          key: '1-0',
          children: [
            { name: 'leaf', key: '1-0-0' },
            { name: 'leaf', key: '1-0-1' }
          ]
        },
        {
          name: 'parent 1-1',
          key: '1-1',
          children: [{ name: 'leaf', key: '1-1-0' }]
        }
      ]
    },
    {
      key: '2',
      name: 'parent 2',
      children: [{ name: 'leaf', key: '2-0' }]
    }
  ];
}
