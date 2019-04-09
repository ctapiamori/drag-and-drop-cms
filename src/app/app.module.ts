import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ContentLayoutComponent } from './content-layout.component';
import { FloatingMenuComponent } from './floating-menu.component';
import { ElementComponentUiComponent } from './element-component-ui.component';
import { IconComponentUiComponent } from './icon-component-ui.component';
import { SlockComponentContentComponent } from './slock-component-content.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ContentLayoutComponent,
    FloatingMenuComponent,
    IconComponentUiComponent,
    ElementComponentUiComponent,
    SlockComponentContentComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
