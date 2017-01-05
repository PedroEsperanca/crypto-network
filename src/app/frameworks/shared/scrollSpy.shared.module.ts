import { NgModule } from '@angular/core';

import {
  ScrollSpyIndexDirective,
  ScrollSpyIndexRenderComponent
} from 'ng2-scrollspy/dist/plugin/index';
import { ScrollSpyAffixDirective } from 'ng2-scrollspy/dist/plugin/affix';
import { ScrollSpyElementDirective } from 'ng2-scrollspy/dist/core/element.directive';

@NgModule({
  imports: [],
  declarations: [
    ScrollSpyIndexDirective,
    ScrollSpyIndexRenderComponent,
    ScrollSpyAffixDirective,
    ScrollSpyElementDirective
  ],
  providers: [],
  exports: [
    ScrollSpyIndexDirective,
    ScrollSpyIndexRenderComponent,
    ScrollSpyAffixDirective,
    ScrollSpyElementDirective
  ]
})
export class ScrollSpySharedModule {}
