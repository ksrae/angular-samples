import { Routes } from "@angular/router";
import { ChildComponent } from "./code-service/code-service.component";
import { Child2Component } from "./condition/condition.component";
import { DCPComponent } from "./dcp/dcp.component";
import { DdmsComponent } from "./ddms/ddms.component";
import { DssComponent } from "./dss/dss.component";
import { FwuiComponent } from "./fwui/fwui.component";
import { MiComponent } from "./mi/mi.component";
import { OcapManagementComponent } from "./ocap-management/ocap-management.component";
import { OcapResultViewComponent } from "./ocap-result-view/ocap-result-view.component";
import { SharedComponent } from "./shared/shared.component";
import { SpcComponent } from "./spc/spc.component";
import { ToolInformationManagementComponent } from "./tool-information-management/tool-information-management.component";
import { TpcComponent } from "./tpc/tpc.component";

export const appRoutes: Routes = [
  {path: 'codeservice', component: ChildComponent},
  {path: 'condition', component: Child2Component},
  {path: 'dcp', component: DCPComponent},
  {path: 'ddms', component: DdmsComponent},
  {path: 'dss', component: DssComponent},
  {path: 'fwui', component: FwuiComponent},
  {path: 'mi', component: MiComponent},
  {path: 'ocapmanagement', component: OcapManagementComponent},
  {path: 'ocapresultview', component: OcapResultViewComponent},
  {path: 'shared', component: SharedComponent},
  {path: 'spc', component: SpcComponent},
  {path: 'toolinformation', component: ToolInformationManagementComponent},
  {path: 'tpc', component: TpcComponent},
];
