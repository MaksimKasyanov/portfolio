import { Routes } from '@angular/router';
import { LibraryComponent } from './projects/library/library.component';
import { BlocksComponent } from './projects/library/blocks/blocks.component';
import { CardComponent } from './projects/library/card/card.component';
import { ComponentsComponent } from './projects/library/components/components.component';
import { ElementsComponent } from "./projects/library/elements/elements.component";
import { MasterJSComponent }from './projects/master-js/master-js.component';
import { ModernJSComponent }from './projects/modern-js/modern-js.component';

export const routes: Routes = [
  { path: 'library', component: LibraryComponent },
  { path: 'library/blocks', component: BlocksComponent },
  { path: 'library/card', component: CardComponent },
  { path: 'library/components', component: ComponentsComponent },
  { path: 'library/elements', component: ElementsComponent },
  { path: 'master-js', component: MasterJSComponent },
  { path: 'modern-js', component: ModernJSComponent },
  { path: '', redirectTo: '/library', pathMatch: 'full' }
];

