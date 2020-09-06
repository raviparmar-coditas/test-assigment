import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
// import { CardComponent } from '../app/components/card/card.component';
// import { CustomElement } from '../app/lit-elements/cutom-button-elements';
import { ButtonComponent } from '../app/common-components/button/button.component';



export default {
    title: 'Example/common-button',
    component: ButtonComponent,
    decorators: [
      moduleMetadata({
        declarations: [ButtonComponent],
        imports: [CommonModule],
      }),
    ],
  } as Meta;

  const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
    component: ButtonComponent,
    props: args,
  });

  export const CommonBtn = Template.bind({});
  CommonBtn.args = {
    title: 'Button'
  }