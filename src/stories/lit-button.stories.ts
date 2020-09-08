import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
// import { CardComponent } from '../app/components/card/card.component';
import { CustomElement } from '../app/lit-elements/cutom-button-elements';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { ButtonComponent } from '../app/common-components/button/button.component';
import { Component, NgModule  } from '@angular/core';
// import {storiesOf} from '@storybook/polymer';
import { AppModule } from '../app/app.module'
export default {
    title: 'Example/lit-button',
    component: CustomElement,
    decorators: [
      moduleMetadata({
        declarations: [],
        imports: [NgModule],
          schemas: [
            CUSTOM_ELEMENTS_SCHEMA
          ]
      }),
    ],
  } as Meta;

//   const Template: Story<CustomElement> = (args: CustomElement) => ({
//     component: CustomElement,
//     props: args,    
//   });

//   export const litButton = Template.bind({});
//   litButton.args = {
//     title: 'Button'
//   }