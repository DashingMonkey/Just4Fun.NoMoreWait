import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WebApiService} from "./services/web-api.service";
import {FooterModule} from "./footer/footer.module";

@NgModule({
  imports: [
    CommonModule,
    FooterModule
  ], providers: [WebApiService],
  declarations: []
})
export class NoMoreWaitModule {
}
